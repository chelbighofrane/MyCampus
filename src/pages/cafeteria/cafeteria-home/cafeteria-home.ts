import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Observable } from '@firebase/util';
import { Product } from '../../../models/product.model';
import {  ProductListService} from '../../../servicesCafeteria/product-list/product-list.service';
import { SideMenuControllerService } from '../../../services/side-menu-controller.service';


@IonicPage()
@Component({
    selector: 'page-cafeteria-home',
    templateUrl: 'cafeteria-home.html',

})
export class CafeteriaHomePage {
  
    
    
 
    fab:boolean;
    sale:boolean;
    length: number;
    productList$ : Observable <Product[]>;
    products: Product[] = [];
    sortedProducts: any[]=[];
    moyennefeeds:any[]=[];
    names:any[]=[];
    @ViewChild('chartCanvas') chartCanvas;
    chartVar: any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public events: Events,
        private product:ProductListService,
        private side:SideMenuControllerService
    ) {
    this.side.setupCafeteriaSideMenuContent();
    
        //chartcomment
        
       
    }

    ngOnInit() {
        this.length = 0;
        
        this.product
            .getProductList()//db list
            .snapshotChanges()//key and value
            //foreach changes return an object 
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key, ...c.payload.val()
                }))
            }).subscribe(
            res => {
                this.products = res;
                console.log(this.length);
                for (let i = 0; i < this.products.length; i++) {
                    if ( this.products[i].feedbacks ==null) {
                        this.products.splice(i, 1);
                        i--;
                    } 
                }
                let sum : number;
          let i : number;
          for(let element of this.products)
          {
            sum=0;
            i=0;
            
            if(element.feedbacks != null)
            {
              for(let feed of element.feedbacks)
              {
                if(feed.userID!='cafeteria')
                {
                  sum+= feed.rate;
                  i++;
                }
              }
    
              if(i!=0)
              {
                element.moyennefeed= sum/i ;
                this.sortedProducts.push({name:element.name,moyennefeed:element.moyennefeed});
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
          }
                
                this.length = this.products.length;
                console.log(this.products);
                //2 tabs 1 pour les noms des top 5 produits (par moyennes feedback) 2 pour les moyennes feeds
                this.sortedProducts.sort(function(obj1, obj2) {
                    // Ascending: first age less than the previous
                    return obj2.moyennefeed - obj1.moyennefeed;
                  });
                 
                  for(i=0;i<this.sortedProducts.length;i++){
                  this.moyennefeeds.push(this.sortedProducts[i].moyennefeed);
                  if(i>=5){
                    break;
                  }
                  }
                  for(i=0;i<this.sortedProducts.length;i++){
                    this.names.push(this.sortedProducts[i].name);
                    if(i>=5){
                      break;
                    }
                    }
                  console.log('les feeds');
                  console.log(this.names);
                  this.showChart();
            },
            error => {
                console.log('error');
            });
    }
    

    ionViewDidLoad() {
        console.log('ionViewDidLoad CafeteriaHomePage');
    }

   

    showChart()
   {
   

    this.chartVar = new Chart(this.chartCanvas.nativeElement, {
 
        type: 'bar',
        data: {
            labels: this.names,
            datasets: [{
                label: '# Top Produits',
                data: this.moyennefeeds,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    //'rgba(75, 192, 192, 0.2)',
                    //'rgba(153, 102, 255, 0.2)',
                    /*'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'*/
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    /*'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'*/
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

}
