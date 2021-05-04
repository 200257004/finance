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
    
    //table.sort([{ column: 1, desc: true }]);

    var options = {
        //title: 'Budget categories',
        //legend: 'labeled',
        //pieSliceText: 'value',
        //slices: {
        //    0: { color: '#3366CC'},
        //    1: { color: '#990099' },
        //    2: { color: 'grey' },
        //    3: { color: 'lightgrey' },
        //    4: { color: 'grey' }
        //}
    };

    var element = document.getElementById('pieChart');

    var chart = new google.visualization.PieChart(element);
    chart.draw(table, options);
}