function drawLine() {
    var tabela = new google.visualization.arrayToDataTable(
        [
            ['Month', 'Values'],
            ['jan', 390], ['feb', 150], ['mar', 470], ['apr', 200], 
            ['may', 250], ['jun', 275], ['jul', 750], ['aug', 375], 
            ['sep', 450], ['oct', 200], ['nov', 300], ['dec', 190]
        ]
    );

    var options = {
        //title: 'Values per month',
        //legend: 'none',
        //vAxis: {
        //    format: 'currency',
        //    gridlines: {
        //        color: 'transparent'
        //    }
        //},
        //curveType: 'function'
    }

    var element = document.getElementById('lineChart');

    var chart = new google.visualization.LineChart(element);
    chart.draw(tabela, options);
}