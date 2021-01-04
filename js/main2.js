//Docs: https://developers.google.com/chart/interactive/docs/gallery/linechart
google.charts.load('current', {'packages':['annotationchart']});
google.charts.setOnLoadCallback(drawChart2);


var options2 = {
  displayAnnotations: true,
  max: 10,
  min: 0,
  legendPosition: 'newRow'
};

function drawChart2() {

  var data2 = new google.visualization.DataTable();
  data2.addColumn('date', 'Date');
  
  data2.addColumn('number', 'Average');
  data2.addColumn('string', 'Average title');
  data2.addColumn('string', 'Average text');

  data2.addColumn('number', 'Career');
  data2.addColumn('string', 'Career Title');
  data2.addColumn('string', 'Career text');
  
  data2.addColumn('number', 'Money');
  data2.addColumn('string', 'Money title');
  data2.addColumn('string', 'Money text');
  
  data2.addColumn('number', 'Health');
  data2.addColumn('string', 'Health title');
  data2.addColumn('string', 'Health text');

  data2.addColumn('number', 'Love & Romance');
  data2.addColumn('string', 'Love & Romance title');
  data2.addColumn('string', 'Love & Romance text');
  
  data2.addColumn('number', 'Friends & Fam');
  data2.addColumn('string', 'Friends & Fam title');
  data2.addColumn('string', 'Friends & Fam text');
  
  data2.addColumn('number', 'Personal Growth');
  data2.addColumn('string', 'Personal Growth title');
  data2.addColumn('string', 'Personal Growth text');
  
  data2.addColumn('number', 'Fun & Rec');
  data2.addColumn('string', 'Fun & Rec title');
  data2.addColumn('string', 'Fun & Rec text');
  
  data2.addColumn('number', 'Physical Environment');
  data2.addColumn('string', 'Physical Environment title');
  data2.addColumn('string', 'Physical Environment text');
  
  data2.addRows([
    [ /* Date */             new Date(2019, 9, 31), 
      /* Average */          5.75, '', '',
      /* Career */           2, '', '',
      /* Money */            4, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   2, '', '',
      /* Friends & Fam */    8, '', '',
      /* Personal Growth */ 10, '', '',
      /* Fun & Rec */        3, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date(2019, 10, 1),
      /* Average */          4.25, '', '',
      /* Career */           6, '', '',
      /* Money */            3, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   0, '', '',
      /* Friends & Fam */    8, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        3, '', '',
      /* Physical Env */     1, '', '']
    ,[/* Date */             new Date(2019, 10, 25), 
      /* Average */          4.25, '', '',
      /* Career */           1, '', '',
      /* Money */            1, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   2, '', '',
      /* Friends & Fam */    8, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     1, '', '']
    ,[/* Date */             new Date(2019, 11, 2), 
      /* Average */          4.625, '', '',
      /* Career */           0, '', '',
      /* Money */            2, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   3, '', '',
      /* Friends & Fam */    8, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     2, '', '']
    ,[/* Date */             new Date(2020, 0, 5), 
      /* Average */          5, '', '',
      /* Career */           1, '', '',
      /* Money */            0, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   6, '', '',
      /* Friends & Fam */    8, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        4, '', '',
      /* Physical Env */     4, 'Home', 'Secured a place to live']
    ,[/* Date */             new Date(2020, 1, 17), 
      /* Average */          4.875, '', '',
      /* Career */           2, '', '',
      /* Money */            1, '', '',
      /* Health */           5, 'Sick', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Personal Growth */  6, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     7, 'Home', 'Moved to Cambie']
    ,[/* Date */             new Date(2020, 2, 23), 
      /* Average */          5, 'COVID Begins', '',
      /* Career */           2, '', '',
      /* Money */            2, '', '',
      /* Health */           5, '', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     7, '', '']
    ,[/* Date */             new Date(2020, 3, 30), 
      /* Average */          6.375, '', '',
      /* Career */           6, 'Working From Home', '',
      /* Money */            4, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   6, '', '',
      /* Friends & Fam */    6, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date(2020, 5, 14), 
      /* Average */          6.25, '', '',
      /* Career */           4, '', '',
      /* Money */            5, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date(2020, 6, 10), 
      /* Average */          5.75, '', '',
      /* Career */           2, '', '',
      /* Money */            4, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    6, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date(2020, 7, 10), 
      /* Average */          7.25, '', '',
      /* Career */           5, '', '',
      /* Money */            4, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   8, '', '',
      /* Friends & Fam */    8, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date(2020, 8, 4), 
      /* Average */          7.25, '', '',
      /* Career */           6, '', '',
      /* Money */            4, '', '',
      /* Health */           8, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    7, '', '',
      /* Personal Growth */  9, '', '',
      /* Fun & Rec */        8, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date(2020, 9, 12), 
      /* Average */          5.875, '', '',
      /* Career */           3, '', '',
      /* Money */            3, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    7, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        4, '211 Prep', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date(2020, 10, 2), 
      /* Average */          5.125, '', '',
      /* Career */           2, '', '',
      /* Money */            2, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   4, 'Carly', '',
      /* Friends & Fam */    6, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     9, '', '']


  ]);

  
  // var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  var chart2 = new google.visualization.AnnotationChart(document.getElementById('annotated_chart'));

  chart2.draw(data2, options2);
}

//redraw the graph on resize, debounced
var resizeTimer;
window.addEventListener("resize", function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    console.log("resized");
    drawChart2(true);
  }, 100);
});
