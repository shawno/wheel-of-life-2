google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var options = { 
  title: 'Wheel of Life over Time',
  curveType: 'function',
  legend: { 
    position: 'right' 
  },
  vAxis: { 
    viewWindow: {
      min: 0,
      max: 10
    }
  },
  hAxis: {
    format:'MMM y'
  }
};

function drawChart() {

  //zero-based months(?!)
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Career', 'Money', 'Health', 'Love & Romance', 'Friends & Family', 'Personal Growth', 'Fun & Recreation', 'Physical Environment'],
    [new Date(2019,  9, 31),  2,  4,  9,  2,  8, 10,  3,  8],
    [new Date(2019, 10,  1),  6,  3,  6,  0,  8,  7,  3,  1],
    [new Date(2019, 10, 25),  1,  1,  9,  2,  8,  7,  5,  1],
    [new Date(2019, 11,  2),  0,  2,  9 , 3,  8,  8,  5,  2],
    [new Date(2020,  0,  5),  1,  0,  9,  6,  8,  8,  4,  4],
    [new Date(2020,  1, 17),  2,  1,  5,  4,  7,  6,  7,  7],
    [new Date(2020,  2, 23),  2,  2,  5,  4,  7,  7,  6,  7],
    [new Date(2020,  3, 30),  6,  4,  7,  6,  6,  8,  6,  8],
    [new Date(2020,  5, 14),  4,  5,  7,  4,  7,  8,  6,  9]
  ]);

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

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




// function drawSeriesChart() {
  
//   var data = [];

//   //December 2019
//   data[0] = google.visualization.arrayToDataTable(
//     [['Brand', 'FCP (p75)', 'FID (p95)', 'ID', 'Size'],
//     ['Clearly.ca', 1.3, 199, '1', 0.3874315669],
//     ['Frames Direct', 3.1, 172, '2', 0.3958950066],
//     ['Eye Buy Direct', 1.4, 157, '3', 0.81374963],
//     ['Coastal', 1.5, 228, '4', 0.2936800389],
//     ['Coolwinks', 1.1, 198, '5', 0.5580894523],
//     ['Lenskart', 2.6, 208, '6', 0.7946449471],
//     ['Vision Direct', 2.8, 231, '7', 0.04863571633],
//     ['Glasses Direct', 2.3, 145, '8', 0.1822601118],
//     ['Sunglasses Shop', 2.6, 214, '9', 0.00000000462645307],
//     ['Lensway', 1.2, 221, '10', 0],
//     ['Lenson', 1.3, 139, '11', 0.00003995753615],
//     ['Brille24', 2.1, 134, '12', 0.02009014447],
//     ['Lensbest', 1.1, 118, '13', 0.01397907372],
//     ['eOtica', 3.0, 517, '14', 0.1944578272],
//     ['Hubble Contacts', 1.8, 82, '15', 0.2587389009],
//     ['Warby Parker', 1.7, 375, '16', 0.8390764252],
//     ['Zenni', 1.9, 315, '17', 0.8538420244],
//     ['Amazon', 1.2, 140, '18', 0.9998121769]]);

//   //February 2020
//   data[1] = google.visualization.arrayToDataTable(
//     [['Brand','FCP (p75)','FID (p95)','ID','Size'],
//     ['Clearly.ca',1.3,204,'1',0.442802858],
//     ['Frames Direct',3.3,73,'2',0.388929959],
//     ['Eye Buy Direct',1.4,187,'3',0.809958547],
//     ['Coastal',1.6,254,'4',0.264680084],
//     ['Coolwinks',1.3,188,'5',0.564488984],
//     ['Lenskart',2.5,250,'6',0.827117798],
//     ['Vision Direct',3.0,238,'7',0.061337381],
//     ['Glasses Direct',2.4,163,'8',0.132333179],
//     ['Sunglasses Shop',2.5,212,'9',1.06057E-10],
//     ['Lensway',1.3,114,'10',0],
//     ['Lenson',1.5,256,'11',0],
//     ['Brille24',1.4,109,'12',0.100894637],
//     ['Lensbest',1.1,135,'13',0.000977496],
//     ['eOtica',3.1,794,'14',0.130810356],
//     ['Hubble Contacts',2.0,88,'15',0.271267549],
//     ['Warby Parker',1.3,286,'16',0.855604895],
//     ['Zenni',1.9,320,'17',0.864609544],
//     ['Amazon',1.3,136,'18',0.999784209]]);

//   //March 2020
//   data[2] = google.visualization.arrayToDataTable(
//     [['Brand','FCP (p75)','FID (p95)','ID','Size'],
//     ['Clearly.ca', 1.3, 200, '1', 0.434297004501544],
//     ['Frames Direct', 3.2, 84, '2', 0.42591644003564],
//     ['Eye Buy Direct', 1.4, 207, '3', 0.809882043135925],
//     ['Coastal', 1.6, 242, '4', 0.25674263051304],
//     ['Coolwinks', 1.4, 204, '5', 0.538367736391293],
//     ['Lenskart', 2.7, 289, '6', 0.83836114888672],
//     ['Vision Direct', 3, 230, '7', 0.0854461341784081],
//     ['Glasses Direct', 2.4, 160, '8', 0.100801875323308],
//     ['Sunglasses Shop', 2.5, 223, '9', 0.0000000123518911017463],
//     ['Lensway', 1.3, 138, '10', 0.0000413991214780135],
//     ['Lenson', 1.5, 257, '11', 0],
//     ['Brille24', 1.4, 162, '12', 0.159751488892911],
//     ['Lensbest', 1.1, 135, '13', 0.00133559443634713],
//     ['eOtica', 3.4, 767, '14', 0.0972778991264616],
//     ['Hubble Contacts', 2.1, 107, '15', 0.314694802432403],
//     ['Warby Parker', 1.2, 282, '16', 0.848760995554823],
//     ['Zenni', 2, 324, '17', 0.86172976189204],
//     ['Amazon', 1.3, 133, '18', 0.999799439577541]]);

//   //April 2020
//   data[3] = google.visualization.arrayToDataTable(
//     [['Brand','FCP (p75)','FID (p95)','ID','Size'],
//     ['Clearly.ca', 1.3, 189, '1', 0.437025705330731],
//     ['Frames Direct', 3.2, 66, '2', 0.507240430994863],
//     ['Eye Buy Direct', 1.3, 276, '3', 0.840567953846004],
//     ['Coastal', 1.5, 226, '4', 0.294327693164122],
//     ['Coolwinks', 1.5, 194, '5', 0.527966959193237],
//     ['Lenskart', 2.5, 273, '6', 0.851066851486209],
//     ['Vision Direct', 2.8, 247, '7', 0.133464950871354],
//     ['Glasses Direct', 2.2, 169, '8', 0.137990285409434],
//     ['Sunglasses Shop', 2.4, 200, '9', 0.0000340491073415459],
//     ['Lensway', 1.2, 117, '10', 0.000747052127936419],
//     ['Lenson', 1.4, 258, '11', 0],
//     ['Brille24', 1.4, 295, '12', 0.266498850467878],
//     ['Lensbest', 1, 119, '13', 0.0200820800441466],
//     ['eOtica', 3.1, 772, '14', 0.22386000636128],
//     ['Hubble Contacts', 2.2, 97, '15', 0.333509699670553],
//     ['Warby Parker', 1.2, 279, '16', 0.864156806992796],
//     ['Zenni', 1.9, 325, '17', 0.878413738412796],
//     ['Amazon', 1.2, 120, '18', 0.999836633149594]]);

//   //May 2020
//   data[4] = google.visualization.arrayToDataTable(
//     [['Brand','FCP (p75)','FID (p75)','ID','Size'],
//     ['Clearly.ca', 1.3, 30, '1', 0.598370257061186],
//     ['Frames Direct', 3.4, 21, '2', 0.645596877495528],
//     ['Eye Buy Direct', 1.2, 60, '3', 0.90201358866449],
//     ['Coastal', 1.6, 36, '4', 0.447265753456439],
//     ['Coolwinks', 1.5, 34, '5', 0.637932243782532],
//     ['Lenskart', 2.4, 25, '6', 0.906507995603588],
//     ['Vision Direct', 2.8, 74, '7', 0.262006248207988],
//     ['Glasses Direct', 2.4, 20, '8', 0.24503405535492],
//     ['Sunglasses Shop', 2.3, 20, '9', 0.0304195951165966],
//     ['Lensway', 1.3, 21, '10', 0.0245947884030854],
//     ['Lenson', 1.4, 75, '11', 0],
//     ['Brille24', 1.4, 27, '12', 0.367572986511535],
//     ['Lensbest', 1, 54, '13', 0.135971425795781],
//     ['eOtica', 3.2, 86, '14', 0.382552115420583],
//     ['Hubble Contacts', 2.1, 21, '15', 0.489963135095084],
//     ['Warby Parker', 1.2, 20, '16', 0.909581034341231],
//     ['Zenni', 1.9, 53, '17', 0.915444236927452],
//     ['Amazon', 1.2, 24, '18', 0.999892871517852]]);

  

//   var index = data.length-1; //start with the most recent month
//   var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
//   var prevButton = document.getElementById('prevButton');
//   var nextButton = document.getElementById('nextButton');
//   var changeZoomButton = document.getElementById('zoomButton');
//   var monthName = document.getElementById('monthName');

//   function drawChart(isFastDraw) {
//     // Disabling the buttons while the chart is drawing.
//     prevButton.disabled = true;
//     nextButton.disabled = true;
//     changeZoomButton.disabled = true;

//     updateAxes();

//     google.visualization.events.addListener(chart, 'ready',
//         function() {
//           if(index > 0){
//             prevButton.disabled = false;
//           }
//           if(index < data.length-1){
//             nextButton.disabled = false;
//           }

//           changeZoomButton.disabled = false;
//           changeZoomButton.innerHTML = (zoomed ? "-" : "+") + "&#x1F50D;";
//         });
//     monthName.innerHTML = months[index];
    
//     if(isFastDraw){
//       //draw quickly during a resize
//       options.animation.duration = 100; 
//     }
//     // console.log("drawing chart for index = " + index);
//     chart.draw(data[index], options);

//     if(isFastDraw){
//       //reset animation speed for other interactions
//       options.animation.duration = animationSpeed;
//     }
//   }

//   prevButton.onclick = function() {
//     console.log("index = " + index);
//     console.log("data.length = " + data.length);
//     if (index > 0){
//       index--;    
//     }
//     drawChart();
//   }

//   nextButton.onclick = function() {
//     if (index < data.length - 1){
//       index++;
//     }
//     drawChart();
//   }
  
//   changeZoomButton.onclick = function() {
//     zoomed = !zoomed;
//     drawChart();
//   }



//   drawChart();
// };
