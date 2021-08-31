import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { forkJoin, from, merge, zip } from 'rxjs';
import { mergeAll, mergeMap, take, toArray } from 'rxjs/operators';

declare let Chart: any;

@Component({
  selector: 'app-externallib',
  templateUrl: './externallib.component.html',
  styleUrls: ['./externallib.component.css']
})
export class ExternallibComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  mernesource:any=[]

  ngOnInit(): void {

    const source1=[0, 10, 5, 2, 20, 30, 45]
    const source2=[10, 11, 20, 30, 20, 50, 60]

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'july'
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: source1,
      }]
    };
    const data2 = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: source2,
      }]
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    const config2 = {
      type: 'line',
      data: data2,
      options: {}
    };
    var myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    var myChart2 = new Chart(
      document.getElementById('myChart2'),
      config2
    );

    


    const obs1=from(source1)
    const obs2=from(source2)

    //eg using merge

    merge(obs1,obs2).subscribe(res=>{

      this.mernesource.push(res)
      // console.log(res)
    })

    console.log(this.mernesource)

    const labels2 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'july',
      'aug',
      'sept',
      'oct',
      'nov',
      'dec'
    ];
     const data3 = {
        labels: labels2,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.mernesource,
        }]
      };
      const config3 = {
        type: 'line',
        data: data3,
        options: {}
      };
      var myChart3 = new Chart(
        document.getElementById('myChart3'),
        config3
      );

      //eg using fork join

      forkJoin(obs1,obs2).subscribe(res=>{

       
        // console.log(res)
        const labels2 = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'july',
          'aug',
          'sept',
          'oct',
          'nov',
          'dec'
        ];
         const data3 = {
            labels: labels2,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: res,
            }]
          };
          const config3 = {
            type: 'line',
            data: data3,
            options: {}
          };
          var myChart3 = new Chart(
            document.getElementById('myChart4'),
            config3
          );
      })

  }




}
