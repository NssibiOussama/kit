import { OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Component, ViewChild } from "@angular/core";
import { DashService } from '../../app/demo/components/soft-skills/services/dash.service';



import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,



  
} from "ngx-apexcharts";


export type ChartOptions = {
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  labels: string[];
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  grid: ApexGrid;
  annotations: ApexAnnotations; 
  series: ApexNonAxisChartSeries;




  

};

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    manager : any
    effectif : any
    date : String 



    constructor(public layoutService: LayoutService , private dashService : DashService) {
        this.chartOptions = {
            series: [84],
            chart: {
              height: 350,
              type: "radialBar",
              offsetY: -10
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                  name: {
                    fontSize: "16px",
                    color: undefined,
                    offsetY: 120
                  },
                  value: {
                    offsetY: 76,
                    fontSize: "22px",
                    color: undefined,
                    formatter: function(val) {
                      return val+"%" ;
                    }
                  }
                }
              }
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
              //  stops: [0, 50, 65, 91]
              }
            },
            stroke: {
              dashArray: 4
            },
            labels: ["Management score"]
          };
        
     }

    ngOnInit() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Months are zero indexed, so add 1
      const year = currentDate.getFullYear();
  
      // Format the date as dd-mm-yyyy
      this.date = `${this.padNumber(day)}-${this.padNumber(month)}-${year}`;      this.model = [
            {
                label: 'Kit RH',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/admin'] }
                ]
            },
                    ];
                    this.fetchData()
    }
    private padNumber(num: number): string {
      return (num < 10 ? '0' : '') + num;
    }
    fetchData() {
      this.dashService.fetchData().subscribe({
        next: (data) => {
          this.manager = data[0].manager
          this.effectif = data[0].names.length
         let exist : Boolean = false
          data[0].names.forEach(element => {
            if( element == this.manager) {
              exist = true
              
            }
            
            
          });
          if(exist == false ){
            this.effectif++
          } 
  
          

  
  

  
  
          
        },
        error: (error) => {
          console.error(error);
        }
      });
    }


}
