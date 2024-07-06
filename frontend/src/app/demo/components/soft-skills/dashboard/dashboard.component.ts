import { style } from '@angular/animations';
import { Component, OnInit, ViewChild } from "@angular/core";
import { DashService } from '../services/dash.service';


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




} from "ngx-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
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
  tooltip: any;
  subtitle: ApexTitleSubtitle;







};


interface Criters {
  name: any,
  data: any

}

interface Types {
  name: any,
  data: any

}

interface df1Criters {
  name: any,
  data: any

}

interface GroupeCriteres {
  name: string
  data: any
}
interface City {
  name: string,
  data: any
}

// back up

interface DropdownModule {
  names: City[],
  criteres: GroupeCriteres[]

}
interface SelectedValues {

  selectedName: City,
  selectedGgroupeCriteres: GroupeCriteres

}
interface Names {
  name: string,
  data: any
}

interface DropdownModuleForEnv {
  names: Names[],
  criteres: GroupeCriteres[]

}

interface SelectedValuesForEnv {

  selectedName: Names[],
  selectedGgroupeCriteres: GroupeCriteres

}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  dropdownModuleForEnv: DropdownModuleForEnv = {
    names: [],
    criteres: []
  };
  selectedValuesForEnv: SelectedValuesForEnv = {
    selectedGgroupeCriteres: null,
    selectedName: []
  }
  dropdownModule: DropdownModule = {
    names: [],
    criteres: []
  };



  selectedValues: SelectedValues = {
    selectedGgroupeCriteres: null,
    selectedName: null
  }
  cities: City[] = [];
  selectedCities: City[] = [];
  selectedNames: City;
  selectedTypes: Types;
  groupeCriteres: GroupeCriteres[] = []

  criters: Criters[] = [];
  selectedCriters: Criters;
  names: string[] = [];

  df1criters: df1Criters[] = []
  selecteddf1Criters: df1Criters[] = []

  types: Types[] = [];
  namesForEnv: City[] = [];
  selectedNamesForEnv: City[] = [];
  namesForManagement: City[] = [];
  selectedNamesForManagement: City[] = [];



  selectedGgroupeCriteres: GroupeCriteres
  df1: any
  Data: any;
  df3: any
  critere: any;
  df2: any
  df4: any
  typeDf2: any
  df7: any
  df6: any
  namesForCritere: string[] = [];

  namesForChartMoyenne: Names[] = [];
  selectedNamesForCharMoyenne: Names[] = [];

  namesForMotivation: City[] = [];
  selectedNamesForMotivation: City[] = [];


  @ViewChild("chart0") chart0!: ChartComponent;
  @ViewChild("chart1") chart1!: ChartComponent;
  @ViewChild("chart2") chart2!: ChartComponent;
  @ViewChild("chart3") chart3!: ChartComponent;
  @ViewChild("chart4") chart4!: ChartComponent;
  @ViewChild("chart5") chart5!: ChartComponent;
  @ViewChild("chart6") chart6!: ChartComponent;
  @ViewChild("chart7") chart7!: ChartComponent;
  @ViewChild("chart8") chart8!: ChartComponent;
  @ViewChild("chart9") chart9!: ChartComponent;
  @ViewChild("chart10") chart10!: ChartComponent;
  @ViewChild("chart11") chart11!: ChartComponent;
  @ViewChild("chart12") chart12!: ChartComponent;
  @ViewChild("chart13") chart13!: ChartComponent;
  @ViewChild("chart14") chart14!: ChartComponent;
  @ViewChild("chart15") chart15!: ChartComponent;











  public chartOptions0: Partial<ChartOptions>;
  public chartRadarTalents: Partial<ChartOptions>;
  public barTalents: Partial<ChartOptions>;
  public chartMoyennedf1: Partial<ChartOptions>;
  public radarPersonnalite: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  public barCharCritere: Partial<ChartOptions>;
  public chartOptions7: Partial<ChartOptions>;
  public barChar8: Partial<ChartOptions>;
  public chartMoyenne: Partial<ChartOptions>;
  public personneTypeChart: Partial<ChartOptions>;
  public chartMotivationCritere: Partial<ChartOptions>;
  public chartOptions12: Partial<ChartOptions>;
  public chartOptions13: Partial<ChartOptions>;
  public chartOptions14: Partial<ChartOptions>;
  public chartOptions15: Partial<ChartOptions>;






  constructor(private dashService: DashService) {






    this.chartOptions5 = {
      series: [
        {
          name: "stepline-series",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        },

      ],
      chart: {
        type: "line",
        height: 350
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Stepline Chart",
        align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };


    this.chartOptions7 = {
      series: [
        {
          name: "stepline-series",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Stepline Chart",
        align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };


    this.chartOptions0! = {
      series: [{ data: [75] }]
      ,
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: true

        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          // stops: [0, 100]
        }
      },

      stroke: {
        lineCap: "round"
      },
      labels: ["Management score"]
    };





    this.chartOptions12 = {
      series: [
        {
          name: "Series Blue",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Series Orange",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart - Multi Series"
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };

    this.chartOptions14 = {
      series: [
        {
          name: "stepline-series",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Stepline Chart",
        align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };


  }

  ngOnInit() {
    this.fetchData()
    this.fetchDataFrame1()
    this.UpdateDataForPersonneTypeChart()
    this.UpdateDataForChartMoyenneDf1()
    this.fetchDataForDf4()
    this.fetchDataFrame7ForManagement()
    this.fetchDataFrame6ForMotivation()

  }
  fetchDataFrame1() {
    this.dashService.fetchData().subscribe({
      next: (data) => {
        this.df1 = JSON.parse(data[0].df1);
        const typeValuesSet = new Set(Object.values(this.df1.type));
        Object.entries(this.df1.critere).forEach(([key, value]) => {
          this.df1criters.push({ name: value, data: key });
        });
        this.selecteddf1Criters = [];
        this.selecteddf1Criters.push({ name: this.df1.critere['0'], data: '0' });
        this.selecteddf1Criters.push({ name: this.df1.critere['1'], data: '1' });
        this.types = Array.from(typeValuesSet).map(value => ({
          name: value,
          data: []
        }));
        // update here for default value

        this.selectedTypes = this.types.length > 0 ? this.types[0] : null;


        // Find the keys related to the selected type
        const keys: number[] = Object.keys(this.df1.type)
          .filter(key => this.df1.type[key] === this.selectedTypes.name)
          .map(key => parseInt(key));
        // Update the selectedTypes object
        this.selectedTypes = {
          name: this.selectedTypes.name,
          data: keys
        };
        this.updateChartRadarPersonalitie(this.selectedTypes);
        this.updateCharBar8(this.selecteddf1Criters)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  updateChartRadarPersonalitie(selectedType: any) {
    // Find the keys related to the selected type
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];
    const keys: number[] = selectedType.data;

    // Filter the criteria based on the selected keys
    const categories = keys.map(key => this.df1.critere[key]);

    // Initialize series array
    const series = [];
    let colorIndex = 0; // Initialize color index

    // Iterate through each person in df1
    for (const person in this.df1) {
      if (person !== 'type' && person !== 'equipe' && person !== 'critere') {
        const personData = this.df1[person];
        const dataValues = keys.map(key => Number(personData[key]));

        // Push person's data to series if it has non-zero values
        if (dataValues.some(value => value !== 0)) {
          series.push({
            name: person,
            data: dataValues,
            color: colors[colorIndex] // Use color from the colors array
          });

          // Increment color index and reset to 0 if it exceeds the length of the colors array
          colorIndex = (colorIndex + 1) % colors.length;
        }
      }
    }

    // Update the radarPersonnalite object
    this.radarPersonnalite = {
      series: series,
      chart: {

        height: 500,
        type: "radar",


      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: "Radar Personnalité- Comportements"
      },

      colors: ["#FF4560"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 1
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#757575'
          }
        } // Set categories to the criteria related to the selected type
      }
    };
  }



  onDropdownChangeForTypes(selectedType: any) {
    // Find the keys related to the selected type
    const keys: number[] = Object.keys(this.df1.type)
      .filter(key => this.df1.type[key] === selectedType.name)
      .map(key => parseInt(key));

    // Update the selectedTypes object
    this.selectedTypes = {
      name: selectedType.name,
      data: keys
    };
    this.updateChartRadarPersonalitie(this.selectedTypes)

  }
  updateCharBar8(selectedCriteria: any) {
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];
    const memberNames = Object.keys(this.df1).filter(key => !['type', 'critere', 'equipe'].includes(key));
    const seriesData = [];

    // Iterate over the selected criteria
    selectedCriteria.forEach((selectedCriterion, index) => {
      const criteriaIndex = Object.values(this.df1.critere).findIndex(critere => critere === selectedCriterion.name);

      // Create a new series object with the selected criteria name, corresponding data, and color
      const newSeries = {
        name: selectedCriterion.name,
        data: memberNames.map(member => this.df1[member][criteriaIndex]),
        color: colors[index % colors.length] // Cycle through colors array
      };

      // Push the new series object to the series data array
      seriesData.push(newSeries);
    });

    this.barChar8 = {
      series: seriesData,
      chart: {
        type: "bar",
        height: 600
      },
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "Bananas are good"
            }
          }
        ]
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false,

      },
      stroke: {
        width: 2,

      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: memberNames,
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "Servings"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,

        }
      }
    };
  }

  ondf1CritersSelectionChange(selectedCritere: any) {

    this.updateCharBar8(selectedCritere);

  }
  fetchData(): void {
    this.dashService.fetchData().subscribe({
      next: (data) => {
        this.Data = data;
        this.names = this.Data[0].names;
        this.df3 = JSON.parse(this.Data[0].df3);
        this.df2 = JSON.parse(this.Data[0].df2);
        this.criters = [];
        const moyenneData = [];
        const typeValues = Object.values(this.df2.type);
        typeValues.forEach(value => {
          this.criters.push({
            name: value,
            data: [] // You can initialize the data with an empty array or leave it as it is
          });
        });

        if (this.df2 && this.df2.type) {
          const typeValues = Object.values(this.df2.type);
          const defaultSelectedType = typeValues[0]; // Get the first value from the type object
          const defaultdata = this.getDataForType(defaultSelectedType);
          this.updateBarCharCritere(defaultdata);
        }

        if (this.df3 && this.df3.critere) {
          this.critere = this.df3.critere;
          this.cities = []; // Reset cities array
          this.selectedCities = []; // Reset selectedCities array


          for (const person in this.df3) {
            if (person !== 'critere') {
              const personData = this.df3[person];
              const dataValues = Object.values(personData).map(value => Number(value) * 100);

              // Push all cities to cities array
              this.cities.push({
                name: person,
                data: dataValues
              });

              // Push all cities to selectedCities array initially
              this.selectedCities.push({
                name: person,
                data: dataValues
              });
            }
            if (person == 'moyenne') {
              const personData = this.df3[person];
              const dataValues = Object.values(personData).map(value => Math.round(Number(value) * 100));
              moyenneData.push({
                name: 'basic',
                data: dataValues
              })


            }
          }
          this.updateChart(this.selectedCities); // Update the radar chart
          this.updateBarTalentChart(Object.values(this.df3.critere), moyenneData)

        } else {
          console.log('The "df3" object or "critere" property is undefined.');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getDataForType(type: any): number[] | null {
    // Find the index of the type in the 'type' object  
    const typeIndex = Object.values(this.df2.type).findIndex((value: string) => value === type);


    // If the type doesn't exist, return null
    if (typeIndex === -1) {

      return null;
    }

    // Initialize an array to store the data for the specified type
    const data: number[] = [];

    // Extract the data for the specified type from each person's object
    for (const key in this.df2) {
      // Skip 'type' and 'equipe' keys
      if (key !== 'type' && key !== 'equipe') {
        const personData = this.df2[key];
        data.push(personData[typeIndex]);
      }
    }
    return data;
  }



  updateBarTalentChart(criteriaValues: any, moyenne: any) {
    this.barTalents = {
      series: moyenne,
      chart: {
        type: "bar",
        height: 500,


      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          horizontal: true,

        }
      }, colors: [
        "#69d2e7",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      dataLabels: {
        enabled: false,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: criteriaValues,
        labels: {
          style: {
            fontSize: '14px'
          }
        }
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      title: {
        text: "Talents de l’équipe",
        align: "center",
        floating: true
      },
      tooltip: {
        theme: "dark",
        x: {
          show: true
        },
        y: {
          title: {
            formatter: function () {
              return "";
            }
          }
        }
      }

    };
  }

  updateChart(selectedCities: City[]): void {
    const criteriaValues = Object.values(this.df3.critere);
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];

    // Generate chart configuration dynamically
    this.chartRadarTalents = {
      series: selectedCities.map((city, index) => ({
        name: city.name,
        data: city.data,
        color: colors[index % colors.length] // Use modulo to loop through available colors
      })),
      chart: {
        height: 500,
        type: "radar"
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: "Radar Talents de l’équipe"
      },

      colors: ["#FF4560"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 1
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: criteriaValues,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#757575'
          }
        }
      },

    };
  }


  onCitySelectionChange(selectedCities: City[]): void {
    this.updateChart(selectedCities);
  }



  updateBarCharCritere(data: any) {
    const namesforChart = []
    for (const person in this.df2) {
      if (person !== 'type' && person !== 'equipe') {
        const personData = this.df2[person];
        const dataValues = Object.values(personData).map(value => Number(value) * 100);

        namesforChart.push(person)


      }
    }
    this.barCharCritere = {
      series: [
        {
          name: "basic",
          data: data
        }
      ],
      chart: {
        type: "bar",
        height: 500
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      }, colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      dataLabels: {
        enabled: false,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: namesforChart,

      },
      yaxis: {
        labels: {
          show: true
        }
      },
      title: {
        text: "Personnalité- Comportements",
        align: "center",
        floating: true
      },
      tooltip: {
        theme: "dark",
        x: {
          show: true
        },
        y: {
          title: {
            formatter: function () {
              return "";
            }
          }
        }
      }

    };
  }

  onDropdownChange(selectedValue: any) {
    const dataForSelectedType = this.getDataForType(selectedValue.name);
    this.updateBarCharCritere(dataForSelectedType)
  }

  UpdateDataForPersonneTypeChart() {

    this.dashService.fetchData().subscribe({
      next: (data) => {
        this.df1 = JSON.parse(data[0].df1);
        this.df2 = JSON.parse(data[0].df2);
        this.dropdownModule.names = this.cities
        this.dropdownModule.criteres = [
          { name: "Tous les criteres", data: null },
          { name: "Groupes", data: null }]
        const defaultSelectedName = Object.keys(this.df1)[2]; // First name in df
        const defaultSelectedGgroupeCriteres: GroupeCriteres = { name: "Tous les criteres", data: null };
        this.selectedValues.selectedName = { name: defaultSelectedName, data: null };
        this.selectedValues.selectedGgroupeCriteres = defaultSelectedGgroupeCriteres
        this.updatePersonneTypeChart(this.selectedValues.selectedName.name, this.selectedValues.selectedGgroupeCriteres.name);
        this.updateChartMoyenne()



      },
      error: (error) => {
        console.error(error);
      }
    });


  }
  onDropdownChangeForNames(selectedValue: any) {
    this.selectedValues.selectedName = selectedValue
    this.updatePersonneTypeChart(this.selectedValues.selectedName.name, this.selectedValues.selectedGgroupeCriteres.name)


  }
  onDropdownChangeForGroupeCriteres(selectedValue: any) {
    this.selectedValues.selectedGgroupeCriteres = selectedValue
    this.updatePersonneTypeChart(this.selectedValues.selectedName.name, this.selectedValues.selectedGgroupeCriteres.name)

  }


  updatePersonneTypeChart(selectedName: any, selectedGroupeCriteres: any) {

    let dataForSelectedName: number[] = [];
    let criteres: string[] = [];
    if (selectedGroupeCriteres == "Tous les criteres") {
      criteres = Object.values(this.df1.critere);
      if (selectedName in this.df1) {
        dataForSelectedName = Object.values(this.df1[selectedName]);
      } else {
        console.error("Selected name not found in df1");
        return;
      }
    } else if (selectedGroupeCriteres == "Groupes") {


      criteres = Object.values(this.df2.type);
      if (selectedName in this.df2) {
        dataForSelectedName = Object.values(this.df2[selectedName]);
      } else {
        console.error("Selected name not found in df1");
        return;
      }
    }

    this.personneTypeChart = {
      series: [
        {
          name: selectedName,
          data: dataForSelectedName
        }
      ],
      chart: {
        type: "bar",
        height: 600
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      }, colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      dataLabels: {
        enabled: false,

        style: {
          colors: ["#fff"]
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: criteres
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      title: {
        text: "Personnalité- Comportements",
        align: "center",
        floating: true
      },
      tooltip: {
        theme: "dark",
        x: {
          show: true
        },
        y: {
          title: {
            formatter: function () {
              return "";
            }
          }
        }
      }
    };
  }

  updateChartMoyenne() {
    // Extracting the types/categories from df2
    const types: string[] = Object.values(this.df2.type);
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];

    // Initializing an empty series array
    const series = [];

    // Iterating over each entry in df2 (excluding 'type' and 'equipe')
    for (let index = 0; index < Object.entries(this.df2).length; index++) {
      const [name, scores] = Object.entries(this.df2)[index];
      if (name !== 'type' && name !== 'equipe') {
        // Constructing series object for each person
        series.push({
          name: name, // Using the person's name as series name
          data: Object.values(scores), // Using the scores as series data
          color: colors[index % colors.length] // Cycle through colors array
        });
      }
    }

    // Updating chartMoyenne with the constructed series
    this.chartMoyenne = {
      series: series, // Assigning the constructed series
      chart: {
        height: 600,
        type: "radar",
        dropShadow: {
          enabled: false,
          blur: 4,
          left: 10,
          top: 1
        }
      },
      title: {
        text: "Radar Chart - Multi Series"
      },
      stroke: {
        width: 4
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 4
      },
      xaxis: {
        categories: types,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#757575'
          }
        }
      }
    };
  }




  updateChartMoyenneDf1(): void {
    // Extracting the types (categories) and person names
    const types = Object.values(this.df2.type);
    const persons = Object.keys(this.df2).filter(person => person !== 'type' && person !== 'equipe');

    // Initializing series array
    const series = [];

    // Populating series with data for each person and assigning colors
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];

    persons.forEach((person, index) => {
      const data = Object.values(this.df2[person]);
      series.push({
        name: person,
        data: data,
        color: colors[index % colors.length] // Assigning colors from the colors array
      });
    });

    // Updating chartMoyennedf1 with the constructed series array and types as categories
    this.chartMoyennedf1 = {
      series: series,
      chart: {
        height: 500,
        type: "radar"
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: "Radar Tous les critéres"
      },

      colors: ["#FF4560"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 1
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: types,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#757575'
          }
        }
      },
    };
  }







  UpdateDataForChartMoyenneDf1() {

    this.dashService.fetchData().subscribe({
      next: (data) => {
        this.df2 = JSON.parse(data[0].df2);
        this.updateChartMoyenneDf1()



      },
      error: (error) => {
        console.error(error);
      }
    });


  }


  onEnvDropdownChangeForNames(selectedValue: any) {
    this.selectedValuesForEnv.selectedName = selectedValue
    this.updateEnvChart(this.selectedValuesForEnv.selectedName, this.selectedValuesForEnv.selectedGgroupeCriteres)



  }
  onEnvDropdownChangeForCritere(selectedValue: any) {
    this.selectedValuesForEnv.selectedGgroupeCriteres = selectedValue
    this.updateEnvChart(this.selectedValuesForEnv.selectedName, this.selectedValuesForEnv.selectedGgroupeCriteres)



  }

  updateEnvChart(selectedName: any, selectedGroupeCriteres: any) {

    // Find the keys in c1 where the value matches selectedGroupeCriteres
    const c1Keys = Object.keys(this.df4.c1).filter(key => this.df4.c1[key] === selectedGroupeCriteres.name);

    // Extract the corresponding values from c2 based on the keys found in c1
    const categories = c1Keys.map(key => this.df4.c2[key]);

    // Filter the selected names array to include only those present in the data

    const selectedNamesWithData = selectedName.filter(person => person.name in this.df4);

    // Initialize an empty array to store series data
    const seriesData = [];
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];

    // Loop through each selected name and extract the corresponding data
    selectedNamesWithData.forEach((selected, index) => {
      const personData = c1Keys.map(key => this.df4[selected.name][key]);
      // Push the selected name and data to the series
      seriesData.push({
        name: selected.name,
        data: personData,
        color: colors[index % colors.length] // Assigning colors from the colors array


      });
    });

    this.chartOptions13 = {
      series: seriesData,
      chart: {
        height: 500,
        type: "radar"
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: "Radar Talents de l’équipe"
      },

      colors: ["#FF4560"],
      markers: {
        size: 6,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 1
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#757575'
          }
        }
      },
    };
  }



  fetchDataForDf4() {
    this.dashService.fetchData().subscribe({
      next: (data: any) => {
        this.df4 = JSON.parse(data[0].df4);

        // Extract names from df4 excluding 'TOTAL' and 'Poids'
        const excludedColumns: string[] = ['TOTAL', 'c1', 'c2'];
        this.dropdownModuleForEnv.names = Object.keys(this.df4)
          .filter((key: string) => !excludedColumns.includes(key))
          .map((name: string) => ({ name, data: null }));


        // Extract default criteres from 'c1'
        this.dropdownModuleForEnv.criteres = Array.from(new Set(Object.values(this.df4.c1))).map((name: string) => ({ name, data: null }));

        // Setting default selected values
        const defaultSelectedName: string = Object.keys(this.df4)[3]; // First name in df4
        const defaultC1Criterion = Object.values(this.df4.c1)[0] as string;
        const defaultSelectedGroupeCriteres: GroupeCriteres = { name: defaultC1Criterion, data: null };
        this.selectedValuesForEnv.selectedGgroupeCriteres = defaultSelectedGroupeCriteres;
        this.selectedValuesForEnv.selectedName = [];
        this.selectedValuesForEnv.selectedName.push({ name: defaultSelectedName, data: null });




        this.namesForEnv = Object.keys(this.df4)
          .filter((key: string) => !excludedColumns.includes(key))
          .map((name: string) => ({ name, data: null }));
        this.selectedNamesForEnv = []
        this.selectedNamesForEnv.push({ name: defaultSelectedName, data: null })

        this.updateDataForChartOptionEnv(this.selectedNamesForEnv);

        // Update environment chart
        this.updateEnvChart(this.selectedValuesForEnv.selectedName, this.selectedValuesForEnv.selectedGgroupeCriteres);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  onNamesSelectionChange(SelectedNames: any) {

    this.updateDataForChartOptionEnv(SelectedNames);


  }
  updateDataForChartOptionEnv(selectedNames: City[]) {
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];
    const uniqueCategories = Array.from(new Set(Object.values(this.df4.c1)));

    const series = selectedNames.map((city, index) => {
      const data = uniqueCategories.map(category => {
        let sum = 0;
        Object.entries(this.df4[city.name]).forEach(([key, value]) => {
          if (this.df4.c1[key] === category) {
            sum += Number(value); // Cast value to number
          }
        });
        return sum;
      });

      return {
        name: city.name,
        data: data,
        color: colors[index % colors.length] // Assign color from the colors array
      };
    });

    this.chartOptions12 = {
      series: series,
      chart: {
        height: 500,
        type: "radar"
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: "Radar Talents de l’équipe"
      },

      markers: {
        size: 6,
        colors: ["#fff"],
        strokeWidth: 3
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: uniqueCategories,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#757575'
          }
        }
      },
    };
  }




  onNamesSelectionChangeForManagement(selectedNames: any) {
    this.updateRadarManagement(selectedNames)

  }

  updateRadarManagement(selectedNames: City[]) {
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];
    const criteria = Object.values(this.df7.critere); // Get criteria from df7
    const series = selectedNames.map((city, index) => {
      return {
        name: city.name,
        data: Object.values(this.df7[city.name]) as number[],// Cast data to number[]
        color: colors[index % colors.length] // Assign color from the colors array

      };
    });

    this.chartOptions15 = {
      series: series, // Cast series to ApexAxisChartSeries
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart - Multi Series"
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: criteria // Use criteria as categories
      }
    };
  }


  fetchDataFrame7ForManagement() {
    this.dashService.fetchData().subscribe({
      next: (data: any) => {
        this.df7 = JSON.parse(data[0].df7);
        const excludedColumns: string[] = ['critere'];
        this.namesForManagement = Object.keys(this.df7)
          .filter((key: string) => !excludedColumns.includes(key))
          .map((name: string) => ({ name, data: null }));
        this.selectedNamesForManagement = []
        const defaultSelectedName: string = Object.keys(this.df7)[1]; // First name in df4
        this.selectedNamesForManagement.push({ name: defaultSelectedName, data: null })
        this.onNamesSelectionChangeForManagement(this.selectedNamesForManagement)

      },
      error: (error) => {
        console.error(error);
      }
    });

  }



  onNamesSelectionChangeForMotivation(selectedNames: any) {
    this.updateChartForMotivation(selectedNames);

  }
  updateChartForMotivation(selectedNames: City[]) {
    const colors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
    ];
    const categories = Object.values(this.df6.critere);
    const series = selectedNames.map((city, index) => ({
      name: city.name,
      data: Object.values(this.df6[city.name]) as number[],
      color: colors[index % colors.length]
    }));

    console.log(categories);
    console.log(series);
    
    


    this.chartMotivationCritere = {
      series: series,
      chart: {
        height: 500,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454", "#645872"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Average High & Low Temperature",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: categories,
        title: {
          text: "Criteria"
        }
      },
      yaxis: {
        title: {
          text: "Rating"
        },
        min: 0,
        max: 10
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }




  fetchDataFrame6ForMotivation() {
    this.dashService.fetchData().subscribe({
      next: (data: any) => {
        this.df6 = JSON.parse(data[0].df6);
        const excludedColumns: string[] = ['critere', 'type'];
        this.namesForMotivation = Object.keys(this.df7)
          .filter((key: string) => !excludedColumns.includes(key))
          .map((name: string) => ({ name, data: null }));
        this.selectedNamesForMotivation = []
        const defaultSelectedName: string = Object.keys(this.df7)[2]; // First name in df4
        this.selectedNamesForMotivation.push({ name: defaultSelectedName, data: null })
        this.updateChartForMotivation(this.selectedNamesForMotivation)

      },
      error: (error) => {
        console.error(error);
      }
    });

  }




}

