import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { AuthService } from '../service/auth.service';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit{

  constructor(private service:AuthService){}
  chartdata:any;
  labeldata:any[]=[];

  ngOnInit(): void {
    this.service.GetChartinfo().subscribe(
      (result)=>{
        this.chartdata = result;
        if(this.chartdata!=null){
          for(let i=0;i<this.chartdata.length; i++){
            // console.log(this.chartdata[i])
            this.labeldata.push(this.chartdata[i].id);
          }
        }
      }
    )
    this.Renderchart(this.labeldata)
    
  }
  Renderchart(labeldata:any){
    const mychart = new Chart("piechart", {
      type: 'bar',
      data: {
         
        datasets: [{
          label: '# of Votes',
          data: labeldata,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    
  }

}
