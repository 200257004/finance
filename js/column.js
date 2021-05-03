function drawColumn() {
    var table = new google.visualization.DataTable();

    table.addColumn('string', 'Categories');
    table.addColumn('number', 'Values');
    //table.addColumn({ type: 'number', role: 'annotation' });
    //table.addColumn({ type: 'string', role: 'style' });

    table.addRows(
        [
            ['Education', 2000/*, 2000*//*, '#3366CC'*/],
            ['Transportation', 350/*, 350*//*, 'grey'*/],
            ['Healthcare', 100/*, 100*//*, 'grey'*/],
            ['Food', 650/*, 650*//*, 'grey'*/],
            ['Entertainment', 900/*, 900*//*, '#990099'*/]
        ]
    );

    var options = {
        //title: 'Budget categories',
        //vAxis: {
        //    textPosition: 'none',
        //    gridlines: {
        //        color: 'transparent'
        //    }
        //},
        //legend: 'none'
    }

    var element = document.getElementById('columnChart');

    var chart = new google.visualization.ColumnChart(element);
    chart.draw(table, options);
}