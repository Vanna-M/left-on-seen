var jsonCircles = [
    "Mercury": [ "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" ],
    "Venus": [ "x_axis": 130, "y_axis": 130, "radius": 50, "color" : "red" ]
];
 
var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 
var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });
