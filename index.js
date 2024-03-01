const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

async function scrapeIPCA() {
    try {
        const resposta = await axios.get('https://www.ibge.gov.br/indicadores#custo-do-m2/rss');
        const html = resposta.data;
        const $ = cheerio.load(html);
        const dadosIPCA = $('#indicador-ipca');
        const ipcaMesTexto = dadosIPCA.find('.ultimo small').text();
        const ipcaMes = parseFloat(dadosIPCA.find('.ultimo').text().match(/[\d,]+/)[0].replace(',', '.'));
        const ipcaAnterior = parseFloat(dadosIPCA.find('.anterior').text().match(/[\d,]+/)[0].replace(',', '.'));
 const ipca12Meses = parseFloat(dadosIPCA.find('.dozemeses').text().match(/\d+,\d{2}/)[0].replace(',', '.'));
        const ipcaAno = parseFloat(dadosIPCA.find('.ano').text().match(/[\d,]+/)[0].replace(',', '.'));
        const dataAtual = new Date();

        const dataFormatada = `${dataAtual.getDate().toString().padStart(2, '0')}/${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}/${dataAtual.getFullYear()}`;
        return {
            ipcaMes,
            ipcaAnterior,
            ipca12Meses,
            ipcaAno,
            data: dataFormatada,
            referencia: ipcaMesTexto
        };
    } catch (erro) {
        console.error('Erro ao consultar dados do IPCA:', erro);
        return null;
    }
}

app.get('/obter-ipca', async (req, res) => {
    const ipca = await scrapeIPCA();
    if (ipca) {
        res.json(ipca);
    } else {
        res.status(500).json({ erro: 'Falha ao consultar dados do IPCA' });
    }
});

async function buscarDadosIPCA() {
    try {
        const resposta = await axios.get('https://servicodados.ibge.gov.br/api/v3/agregados/1737/periodos/-12/variaveis/63?&localidades=N1');
        if (!resposta.data || !Array.isArray(resposta.data) || resposta.data.length === 0) {
            throw new Error('Dados da resposta inválidos ou vazios');
        }

     
        return resposta.data;
    } catch (erro) {
        console.error('Erro ao buscar e formatar dados do IPCA:', erro);
        throw new Error('Falha ao buscar e formatar dados do IPCA');
    }
}

app.get('/obter-ipca-12', async (req, res) => {
    try {
        const dados = await buscarDadosIPCA();
        res.json(dados);
    } catch (erro) {
        console.error('Erro ao recuperar dados do IPCA pela API:', erro);
        res.status(500).json({ erro: 'Falha ao recuperar dados do IPCA pela API' });
    }
});
const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
    console.log(`Servidor online, porta:  ${PORTA}`);
});
