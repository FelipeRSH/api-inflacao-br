WebService IPCA 

Hosted URLs:

https://api-inflacao.onrender.com/obter-ipca

https://api-inflacao.onrender.com/obter-ipca-12



Este serviço oferece uma maneira simplificada de acessar os dados de IPCA (Índice Nacional de Preços ao Consumidor Amplo) disponibilizados pelo IBGE (Instituto Brasileiro de Geografia e Estatística).



Uso da API:


Português

Endpoint: /obter-ipca

Método: GET

Descrição: Retorna os dados mais recentes do IPCA, incluindo a variação mensal, variação acumulada em 12 meses e variação no ano.

Resposta:

    ipcaMes: Variação percentual do IPCA no último mês.
    ipcaAnterior: Variação percentual do IPCA no mês anterior.
    ipca12Meses: Variação percentual acumulada do IPCA nos últimos 12 meses.
    ipcaAno: Variação percentual acumulada do IPCA no ano corrente.
    data: Data da última atualização dos dados (formato dd/mm/aaaa).


Endpoint: /obter-ipca-12

Método: GET

Description: Retorna o valor acumulado dos últimos 12 meses de IPCA

Response:

    id: Identificador único para a série de dados.
    variavel: Nome da variável medida, neste caso, a variação mensal do IPCA.
    unidade: Unidade de medida dos dados, por exemplo, percentual (%).
    resultados: Contém os dados da série temporal.
        classificacoes: Classificações adicionais dos dados, se houver. Geralmente vazio para esta consulta.
        series: Array contendo as séries temporais de dados.
            localidade: Informações sobre a localidade dos dados.
                id: Identificador único da localidade.
                nivel: Nível geográfico da localidade.
                    id: Identificador do nível geográfico.
                    nome: Nome do nível geográfico, por exemplo, Brasil.
                nome: Nome da localidade.
            serie: Objeto contendo pares de data-valor representando a variação mensal do IPCA.

--------------------------------------------------------------------------

Deutsch

Endpoint: /obter-ipca 

Methode: GET

Beschreibung: Gibt die neuesten IPCA-Daten zurück, einschließlich der monatlichen Veränderung, der kumulierten Veränderung über 12 Monate und der jährlichen Veränderung.

Antwort:

    ipcaMes: Prozentuale Veränderung des IPCA im letzten Monat.
    ipcaAnterior: Prozentuale Veränderung des IPCA im vorherigen Monat.
    ipca12Meses: Kumulierte prozentuale Veränderung des IPCA in den letzten 12 Monaten.
    ipcaAno: Kumulierte prozentuale Veränderung des IPCA im laufenden Jahr.
    data: Datum der letzten Datenaktualisierung (Format dd/mm/yyyy).




Endpoint: /obter-ipca-12

Método: GET

Description: Gibt die kumulierten Veränderung über 12 Monate und der jährlichen Veränderung von IPCA.

Response:

    id: Eindeutige Kennung für die Datenserie.
    variavel: Name der gemessenen Variablen, in diesem Fall die monatliche Veränderung des IPCA.
    unidade: Maßeinheit der Daten, zum Beispiel Prozent (%).
    resultados: Enthält die Zeitreihendaten.
        classificacoes: Zusätzliche Klassifizierungen der Daten, falls vorhanden. Für diese Abfrage meist leer.
        series: Array, das die Zeitreihen der Daten enthält.
            localidade: Informationen über den Ort der Daten.
                id: Eindeutige Kennung des Ortes.
                nivel: Geografische Ebene des Ortes.
                    id: Kennung der geografischen Ebene.
                    nome: Name der geografischen Ebene, zum Beispiel Brasilien.
                nome: Name des Ortes.
            serie: Objekt, das Datum-Wert-Paare enthält, die die monatliche Veränderung des IPCA darstellen.



--------------------------------------------------------------------------

English

Endpoint: /get-ipca

Method: GET

Description: Returns the most recent IPCA data, including the monthly change, cumulative change over 12 months, and annual change.

Response:

    ipcaMes: Percentage change in IPCA for the last month.
    ipcaAnterior: Percentage change in IPCA for the previous month.
    ipca12Meses: Cumulative percentage change in IPCA over the last 12 months.
    ipcaAno: Cumulative percentage change in IPCA for the current year.
    data: Date of the last data update (format dd/mm/yyyy).

Endpoint: /obter-ipca-12

Método: GET

Description: Returns the most recent IPCA data,  cumulative change over 12 months.

Response:

    id: Unique identifier for the data series.
    variavel: Name of the variable being measured, in this case, the monthly change in IPCA.
    unidade: Unit of measurement for the data, for example, percentage (%).
    resultados: Contains the time series data.
        classificacoes: Additional classifications of the data, if any. Usually empty for this query.
        series: Array containing the time series of data.
            localidade: Information about the location of the data.
                id: Unique identifier for the location.
                nivel: Geographic level of the location.
                    id: Identifier for the geographic level.
                    nome: Name of the geographic level, for example, Brazil.
                nome: Name of the location.
            series: Object containing date-value pairs representing the monthly change in IPCA.



--------------------------------------------------------------------------

Español

Endpoint: /obter-ipca

Método: GET

Descripción: Devuelve los datos más recientes del IPCA, incluyendo el cambio mensual, el cambio acumulado en 12 meses y el cambio anual.

Respuesta:

    ipcaMes: Cambio porcentual en el IPCA del último mes.
    ipcaAnterior: Cambio porcentual en el IPCA del mes anterior.
    ipca12Meses: Cambio porcentual acumulado en el IPCA en los últimos 12 meses.
    ipcaAno: Cambio porcentual acumulado en el IPCA en el año actual.
    data: Fecha de la última actualización de datos (formato dd/mm/aaaa).
    
Endpoint: /obter-ipca-12

Método: GET

Descripción: Devuelve los datos más recientes del IPCA x 12 meses, historico del cambio mensual.

Respuesta:


    id: Identificador único para la serie de datos.
    variavel: Nombre de la variable medida, en este caso, la variación mensual del IPCA.
    unidade: Unidad de medida de los datos, por ejemplo, porcentaje (%).
    resultados: Contiene los datos de series temporales.
        classificacoes: Clasificaciones adicionales de los datos, si las hay. Generalmente vacío para esta consulta.
        series: Array que contiene las series temporales de datos.
            localidade: Información sobre la localidad de los datos.
                id: Identificador único de la localidad.
                nivel: Nivel geográfico de la localidad.
                    id: Identificador del nivel geográfico.
                    nome: Nombre del nivel geográfico, por ejemplo, Brasil.
                nome: Nombre de la localidad.
            serie: Objeto que contiene pares de fecha-valor representando la variación mensal del IPCA.

