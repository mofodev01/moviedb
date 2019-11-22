/* Core */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

/* plugins */
import { Market } from '@ionic-native/market/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

constructor(
  private market: Market
    
  ,public platform: Platform
) { }

rateApp(){
  if (this.platform.is('android')) {
  
 
    this.market.open('com.appmofix.movies');
  }else if(this.platform.is('ios')){
 
  
    this.market.open('com.appmofix.movies');
  }
  }

  /*
  rateApp(){
  if (this.platform.is('android')) {
  
  let alert = this.alertCtrl.create({
    title: "Open Play store",
    subTitle: "",
    buttons: [{

    text: ("Ok")
    }]
    });
    alert.present();
    this.market.open('com.appmofix.movies');
  }else if(this.platform.is('ios')){
 
  let alert = this.alertCtrl.create({
    title: "Open Apple store",
    subTitle: "",
    buttons: [{

    text: ("Ok")
    }]
    });
    alert.present();
    this.market.open('com.appmofix.movies');
  }
  }
  */


}