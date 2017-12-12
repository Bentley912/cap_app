var chart = bb.generate({
  bindto: "#chart",
  data: {
      type: "bar",
      columns: [
          ["Male", 30],
          ["Female", 130]
      ]
  }, 
  color:
  {
    pattern:["#2c3e50", "#a6cff7"]
  }
});

var chart = bb.generate({
  "data": {
    "columns": [
	    ["data1", 30, 200, 100, 400, 150, 250],
	    ["data2", 50, 20, 10, 40, 15, 25]
    ]
  },
  "bindto": "#lineChart"
});

var chart = bb.generate({
  "data": {
    "columns": [
	["data1", 30],
	["data2", 45],
	["data3", 25]
    ],
    "type": "donut"
  },
  "donut": {
    "title": "Title Text",
    "padAngle": 0.1
  },
  color:
  {
    pattern:["#2c3e50", "#a6cff7","#f1f2f3"]
  },
  "bindto": "#padAngle"
});


