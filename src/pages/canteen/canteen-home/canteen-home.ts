import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ToastService } from '../../../servicesCafeteria/toast.service';
import { ReserverService } from '../../../services_canteen/reserver.service';
import { MealService } from '../../../services_canteen/meal.service';

let fromMonday = [],
i = -6;
for (i; i <= 0; i++) 
{
  fromMonday.push(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + i));
}

let fromCommentdates = [],
j = -30;
for (j; j <= 0; j++) 
{
  fromCommentdates.push(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + j));
}

@IonicPage()
@Component({
    selector: 'page-canteen-home',
    templateUrl: 'canteen-home.html',
})
export class CanteenHomePage {

    sideMenuContent: {name: string, path: string}[] = [
        {name: 'Menu', path: 'MenuCanteenPage'},
        {name: 'Feedback', path: 'FeedbackCanteenPage'},
        {name: 'Mon compte', path: 'AccountPage'},
        {name: 'Reservation', path: 'ReservationPage'},
        {name: 'MenuEtudiant', path: 'EtudiantMenuPage'}
        
    ];


    demo: Array < Date > = fromMonday;
    rateChart:any;
    dates:string[];
    datesreserve: any[];
    comentdate: Array < Date > = fromCommentdates;
    mealList$:any;
    meals: any;
    meal:any[];
    commentnbr : number[];

    
    @ViewChild('barCanvas') barCanvas;
 
    barChart: any;
    reserveliste$:any;
    reservations:any;
    constructor( 
        public navCtrl: NavController,
        public navParams: NavParams,
        public events: Events,public reservationservice:ReserverService
        ,public toast: ToastService,public loadingCtrl:LoadingController,private mealservice:MealService
    ) {
        this.setupSideMenuContent();
        //console.log(this.demo);

        this.commentnbr = [];

        //loading 
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        
          loading.present();


        this.reserveliste$ = this.reservationservice.getAllreservation()
    .snapshotChanges().map( changes=>{
      return changes.map( c=>({
        key: c.payload.key, ...c.payload.val(),
      }));
    });

    this.reserveliste$.subscribe((value)=>{
        this.reservations=value;
        let dayte:string;
        this.dates=[];
        let compteur=0;
        this.datesreserve=[];
        console.log(this.demo);
        
        for(let element of this.demo )
        {
            if(element.toString().startsWith("Sun",0)==false)
            {
                
                this.datesreserve[compteur]=0;
                dayte= element.getDate()+"/"+(element.getMonth()+1)+"/"+element.getFullYear();
                this.dates.push(dayte);
                for(let elem of this.reservations )
                {
                    if((new Date(elem.meal).getFullYear()==element.getFullYear())
                     &&(new Date(elem.meal).getMonth()==element.getMonth())
                     &&(new Date(elem.meal).getDate()==element.getDate()))
                    {
                        this.datesreserve[compteur]++;
                    }
                }
                compteur++;
            }
            

        }

        
        //console.log(this.datesreserve);
        //console.log(this.dates);
        //barchart
        

        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: this.dates,
                datasets: [{
                    label: '# Reservtion par jour',
                    data: this.datesreserve,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
 
    });
    //console.log(this.datesreserve);
    //console.log(this.comentdate);

    //partie comment
    let i,km : number;
    for(km=0;km<4;km++)
    {
        this.commentnbr[km]=0;
    }
    //console.log(this.commentnbr);
    this.mealList$ = this.mealservice.getAllmeal()
    .snapshotChanges().map( changes=>{
      return changes.map( c=>({
        key: c.payload.key, ...c.payload.val(),
      }));
    });
    //console.log(this.mealList$);
    
    this.mealList$.subscribe((value)=>{
      this.meals=value;
      //console.log(this.meals);
      this.meal=this.meals.reverse();
      //console.log(this.meal);
      let sum,cont : number;
      cont=0;
      for(km=0;km<30;km++)
        {
            //console.log(((km / 7) - (( km % 7 ) / 7)));
            if(this.comentdate[km].toString().startsWith("Sun",0)==false)
            {
                for(let element of this.meals)
                {
                    if((new Date(element.date).getFullYear()==this.comentdate[km].getFullYear())
                &&(new Date(element.date).getMonth()==this.comentdate[km].getMonth())
                &&(new Date(element.date).getDate()==this.comentdate[km].getDate()))
                 {

      
                    sum=0;
                    i=0;
        
                    if(element.feedbacks != null)
                    {
                        for(let feed of element.feedbacks)
                        {
                            if(feed.userID!='canteen')
                            {
                                sum+= feed.rate;
                                i++;
                            }
                        }

                        if(i!=0)
                        {
                            element.moyennefeed= sum/i ;
                            cont++;
                        }
                        else
                        {
                             element.moyennefeed=0;
                        }
          
        
                    }
                    else
                    {
                        element.moyennefeed=0;
                    }
                    if(km==12)
                    {
                        this.commentnbr[1]+=element.moyennefeed;
                    }
                    else
                    {
                        if(km==17)
                        {
                            this.commentnbr[2]+=element.moyennefeed;
                        }
                        else
                        {
                            this.commentnbr[((km / 7) - (( km % 7 ) / 7))]+=element.moyennefeed;
                        }
                    }
                    
                    
                }

    
            }
            }
        if(cont!=0)
        {

        
            if(km==6)
            {
                this.commentnbr[0]=this.commentnbr[0]/cont;
                cont=0;
            }
            if(km==13)
            {
                this.commentnbr[1]=this.commentnbr[1]/cont;
                cont=0;
            }
            if(km==20)
            {
                this.commentnbr[2]=this.commentnbr[2]/cont;
                cont=0;
            }
            if(km==27)
            {
                this.commentnbr[3]=this.commentnbr[3]/cont;
                cont=0;
            }
        }
            
        }

        for(km=0;km<4;km++)
        {
            this.commentnbr[km]=this.commentnbr[km];
        }
        console.log(this.commentnbr);

        this.commentchart();



    })
    loading.dismiss();
    
        
    }


    commentchart()
    {
        let rateChartCanvas = <HTMLCanvasElement>document.getElementById('rate-chart');

        let rateChartCanvasCtx = rateChartCanvas.getContext('2d');


        var gradientFill = rateChartCanvasCtx.createLinearGradient(0, 0, 0, 150);

        gradientFill.addColorStop(0, "rgba(255, 171, 0, 0.6)");

        gradientFill.addColorStop(1, "rgba(255, 171, 0, 0)");


        this.rateChart = new Chart(rateChartCanvasCtx, {

            type: 'line',

            data: {

                labels: ["Semaine1", "Semaine2", "Semaine3", "Semaine4"],

                datasets: [

                    {

                        label: "moyenne comments",
                        data: this.commentnbr,

                        borderColor: '#FFAB00',

                        borderWidth: 3,

                        pointRadius: 3,

                        fill: true,

                        backgroundColor: gradientFill,
                        
                    }

                ]

            },

           /* options: {

                legend: {

                    display: false

                },
            
                scales: {

                    yAxes: [{

                        ticks: {

                            maxTicksLimit: 5,

                            max: 5,

                            min: 0,

                            stepSize: 1,

                            beginAtZero: true,

                            fontColor: "#FFFFFF",

                            fontStyle: "bold",

                            padding: 10

                        },

                        gridLines: {

                            drawTicks: false,

                            display: false

                        }


                    }],

                    xAxes: [{

                        gridLines: {

                            zeroLineColor: "transparent"

                        },

                        ticks: {

                            fontColor: "#FFFFFF",

                            fontStyle: "bold"

                        }

                    }]

                }

            }*/

        });
    }


    ionViewDidLoad() {
        console.log(this.reservations);
        console.log('ionViewDidLoad CanteenHomePage');
        /*let rateChartCanvas = <HTMLCanvasElement>document.getElementById('rate-chart');

        let rateChartCanvasCtx = rateChartCanvas.getContext('2d');


        var gradientFill = rateChartCanvasCtx.createLinearGradient(0, 0, 0, 150);

        gradientFill.addColorStop(0, "rgba(255, 171, 0, 0.6)");

        gradientFill.addColorStop(1, "rgba(255, 171, 0, 0)");


        this.rateChart = new Chart(rateChartCanvasCtx, {

            type: 'line',

            data: {

                labels: ["firas", "nader", "ghofrane", "haythem", "chayma"],

                datasets: [

                    {

                        data: [4.6, 2.8, 3.1, 4.8, 3.8],

                        borderColor: '#FFAB00',

                        borderWidth: 3,

                        pointRadius: 3,

                        fill: true,

                        backgroundColor: gradientFill,

                    }

                ]

            },

            options: {

                legend: {

                    display: false

                },

                scales: {

                    yAxes: [{

                        ticks: {

                            maxTicksLimit: 5,

                            max: 5,

                            min: 0,

                            stepSize: 1,

                            beginAtZero: true,

                            fontColor: "#FFFFFF",

                            fontStyle: "bold",

                            padding: 10

                        },

                        gridLines: {

                            drawTicks: false,

                            display: false

                        }


                    }],

                    xAxes: [{

                        gridLines: {

                            zeroLineColor: "transparent"

                        },

                        ticks: {

                            fontColor: "#FFFFFF",

                            fontStyle: "bold"

                        }

                    }]

                }

            }

        });
*/
        //barchart
        

        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: this.dates,
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
 
    }

    setupSideMenuContent() {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    }

}
