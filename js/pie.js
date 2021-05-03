function drawPie() {
    var table = new google.visualization.arrayToDataTable(
        [
            ['Categories', 'Values'],
            ['Education', 2000],
            ['Transportation', 350],
            ['Healthcare', 100],
            ['Food', 650],
            ['Entertainment', 900]
        ]
    );

    var options = {
        //title: 'Budget categories',
        //is3D: true,
        //legend: 'labeled',
        //pieSliceText: 'value',
        //slices: {
        //    0: {},
        //    1: { color: 'grey' },
        //    2: { color: 'lightgrey' },
        //    3: { color: 'grey'},
        //    4: { offset: 0.4 }
        //}
    };

    var element = document.getElementById('pieChart');

    var chart = new google.visualization.PieChart(element);
    chart.draw(table, options);
}