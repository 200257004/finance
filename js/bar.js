function drawBar() {
    var table = new google.visualization.DataTable();

    table.addColumn('string', 'Categories');
    table.addColumn('number', 'Values');
    //table.addColumn({ type: 'string', role: 'annotation' });
    //table.addColumn({ type: 'string', role: 'style' });

    table.addRows(
        [
            ['Education', 2000/*, '2000,00 €'*//*, '#3366CC'*/],
            ['Transportation', 350/*, '350,00 €'*//*, 'grey'*/],
            ['Healthcare', 100/*, '100,00 €'*//*, 'grey'*/],
            ['Food', 650/*, '650,00 €'*//*, 'grey'*/],
            ['Entertainment', 900/*, '900,00 €'*//*, '#990099'*/]
        ]
    );

    //table.sort([{ column: 1, desc: true }]);

    var options = {
        //title: 'Budget categories',
        //legend: 'none',
        //hAxis: {
        //    textPosition: 'none',
        //    gridlines: {
        //        color: 'transparent'
        //    }
        //},
        //annotations: {
        //    alwaysOutside: true
        //}
    }

    var element = document.getElementById('barChart');

    var chart = new google.visualization.BarChart(element);
    chart.draw(table, options);
}