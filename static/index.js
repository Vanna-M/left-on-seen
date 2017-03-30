var svg = d3.select("#svg");

var planets = [
    {"name":"Mercury", "size": 20, "orbpd": 88, "x_axis": 30, "y_axis": 100, "color":"red"},
    {"name":"Venus", "size": 20, "orbpd": 88, "x_axis": 60, "y_axis": 100, "color":"red"},
    {"name":"Earth", "size": 20, "orbpd": 88, "x_axis": 90, "y_axis": 100, "color":"red"},
    {"name":"Mars", "size": 20, "orbpd": 88, "x_axis": 120, "y_axis": 100, "color":"red"},
    {"name":"Jupiter", "size": 20, "orbpd": 88, "x_axis": 150, "y_axis": 100, "color":"red"},
    {"name":"Saturn", "size": 20, "orbpd": 88, "x_axis": 180, "y_axis": 100, "color":"red"},
    {"name":"Uranus", "size": 20, "orbpd": 88, "x_axis": 210, "y_axis": 100, "color":"red"},
    {"name":"Neptune", "size": 20, "orbpd": 88, "x_axis": 240, "y_axis": 100, "color":"red"}
];


var circles = svg.selectAll("circle")
    .data(planets)
    .enter()
    .append("circle");

var circleAttributes = circles
    .attr("cx", function (d) { return d.x_axis; })
    .attr("cy", function (d) { return d.y_axis; })
    .attr("r", function (d) { return d.size; })
    .style("fill", function(d) { return d.color; });
