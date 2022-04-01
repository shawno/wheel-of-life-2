//Docs: https://developers.google.com/chart/interactive/docs/gallery/linechart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var options = { 
  displayAnnotations: true,
  curveType: 'function',
  chartArea: {width: '90%', height: '85%'},
  legend: { 
    position: 'top',
    maxLines: 3 
  },
  vAxis: { 
    viewWindow: {
      min: 0,
      max: 10
    },
    gridlines: {
      count: 10
    }
  },
  hAxis: {
    format:'MMM `yy'
  },
  explorer: {
    axis: 'horizontal',
    keepInBounds: true,
    maxZoomOut: 1
  },
  focusTarget: 'category',
  series:{
    0:{
      lineWidth: 50,
      color: '#eef',
      annotations: {
        textStyle: {
          color: '#333' 
        }
      }
    }
  }
};

function drawChart() {
  data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');

  data.addColumn('number', 'Average');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.
  
  data.addColumn('number', 'Inside ❤️');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Outside ❤️');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Freedom');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Zen');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'My Mind');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'My Body');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Environment');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Drive');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addRows([
  
     [/* Date */         new Date('Mar 12, 2022'),
      /* Average */      6.5, '', '',
      /* Inside <3 */    6, '', '',
      /* Outside <3 */   9, '', '',
      /* Freedom */      3, '', '',
      /* Zen */          3, '', '',
      /* My Mind */      9, '', '',
      /* My Body */      5, '', '',
      /* Environment */  8, '', '',
      /* Drive */        9, '', '']

    ,[/* Date */         new Date('April 1, 2022'),
      /* Average */      6.25, '', '',
      /* Inside <3 */    7, '', '',
      /* Outside <3 */   8, '', '',
      /* Freedom */      6, '', '',
      /* Zen */          3, '', '',
      /* My Mind */      6, '', '',
      /* My Body */      6, '', '',
      /* Environment */  7, '', '',
      /* Drive */        7, '', '']
    
    // ,[/* Date */         new Date(''),
    //   /* Average */      , '', '',
    //   /* Inside <3 */    , '', '',
    //   /* Outside <3 */   , '', '',
    //   /* Freedom */      , '', '',
    //   /* Zen */          , '', '',
    //   /* My Mind */      , '', '',
    //   /* My Body */      , '', '',
    //   /* Environment */  , '', '',
    //   /* Drive */        , '', '']
    
  ]);
  
  
  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  //var chart = new google.visualization.AnnotationChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

//redraw the graph on resize, debounced
var resizeTimer;
window.addEventListener("resize", function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    console.log("resized");
    drawChart(true);
  }, 100);
});
