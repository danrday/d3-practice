let dataArray = [5,11,18];

let svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
          .attr("fill", "pink")
          .attr("height",function(d,i) {return d*15;})
          .attr("width", "50")
          .attr("x",function(d,i) { return 60*i; })
          .attr("y",function(d,i) {return 300 - (d*15)});

let newX = 300;

svg.selectAll("circle.first")
      .data(dataArray)
      .enter().append("circle")
          .attr("class", "first")
          .attr("fill", "pink")
          .attr("cx", function(d,i) {newX +=(d*3)+(i*20); return newX})
          .attr("cy", "100")
          .attr("r",function(d,i) {return d*3});

newX = 600;

svg.selectAll("ellipse")
      .data(dataArray)
      .enter().append("ellipse")
          .attr("class", "second")
          .attr("class", "first")
          .attr("fill", "pink")
          .attr("cx", function(d,i) {newX +=(d*3)+(i*20); return newX})
          .attr("cy", "100")
          .attr("rx",function(d,i) {return d*3})
          .attr("ry", "30");
