import { Component, OnInit } from '@angular/core';

declare let d3: any;

@Component({
  selector: 'app-d3js',
  templateUrl: './d3js.component.html',
  styleUrls: ['./d3js.component.css']
})
export class D3jsComponent implements OnInit {

  constructor() { }

   datasource=[10, 20, 30, 40, 50, 60]


  ngOnInit(): void {
    d3.select('h2').style('color','red')
   // d3.select('p').data(this.datasource).enter().append('p').text((d:any)=>{return d})
   var svgwidth=500,svgheight=300,barPadding=5
   var barWidth=(svgwidth/this.datasource.length)

   var svg=d3.select('svg')
   .attr('width',svgwidth)
   .attr('height',svgheight)

   var barChart=svg.selectAll("rect")
   .data(this.datasource)
   .enter()
   .append("rect")
   .attr('y',(d:any)=>{
     return svgheight-d
   })
   .attr('height',(d:any)=>{
    return d
   })
   .attr('width',barWidth-barPadding)
   .attr('transform',(d:any,i:any)=>{
    var translate=[barWidth*i,0]
    return "translate("+translate+")"
  })

  var text=svg.selectAll('text')
  .data(this.datasource)
  .enter()
  .append("text")
  .text((d:any)=>{
    return d
   })
   .attr("y",(d:any,i:any)=>{
   return svgheight-d-2
  })
  .attr("x",(d:any,i:any)=>{
    return barWidth*i
   })

  }

}
