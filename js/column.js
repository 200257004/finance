function drawColumn() {
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

    var options = {
    //    title: 'Budget categories',
    //    legend: 'none',
    //    vAxis: {
    //        textPosition: 'none',
    //        gridlines: {
    //            color: 'transparent'
    //        }
    //    }
    }

    var element = document.getElementById('columnChart');

    var chart = new google.visualization.ColumnChart(element);
    chart.draw(table, options);
}