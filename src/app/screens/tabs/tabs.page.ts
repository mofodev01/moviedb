/* Core */
import { Component } from '@angular/core';
import { Platform,ActionSheetController  } from '@ionic/angular';

/* plugins */
import { Market } from '@ionic-native/market/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

constructor(
  private market: Market
    
  ,public platform: Platform
  ,private socialSharing: SocialSharing
  ,public actionSheetController: ActionSheetController

) { }

rateApp(){
  if (this.platform.is('android')) {
  
 
    this.market.open('com.appmofix.movies');
  }else if(this.platform.is('ios')){
 
  
    this.market.open('com.appmofix.movies');
  }
  }
////share app

async shareapp() {
  if (this.platform.is('android')) {
  /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
    let actionSheet = await  this.actionSheetController.create({
      header: 'Share App',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Facebook',
          role: 'destructive',
          icon: 'logo-facebook',
         // cssClass: 'action-red',
          handler: () => {
           
              this.socialSharing.shareViaFacebook("", "", "https://play.google.com/store/apps/details?id=com.appmofix.movies").then(() => {
                console.log("shareViaFacebook: Success");
              }).catch(() => {
                console.error("shareViaFacebook: failed");
              });
           
          }
        },
     
      
        {
          text: 'Whatsapp',
          role: 'destructive',
          icon: 'logo-whatsapp',
       
          handler: () => {
            this.socialSharing.shareViaWhatsApp("", "https://image.prntscr.com/image/G9jvyUxlT7qoNyaFcLfACw.png" ,"https://play.google.com/store/apps/details?id=com.appmofix.movies").then(() => {
              console.log("shareViaWhatsApp: Success");
            }).catch(() => {
              console.error("shareViaWhatsApp: failed");
            });
          }
        },
        {
          text: 'Twitter',
          role: 'destructive',
          icon: 'logo-twitter',
       
          handler: () => {
            this.socialSharing.shareViaTwitter("", "https://image.prntscr.com/image/G9jvyUxlT7qoNyaFcLfACw.png" ,"https://play.google.com/store/apps/details?id=com.appmofix.movies").then(() => {
              console.log("shareViatwitter: Success");
            }).catch(() => {
              console.error("shareViatwitter: failed");
            });
          }
        },
        {
          text: 'Other',
          role: 'destructive',
          icon: 'paper-plane',
        
          handler: () => {
            this.socialSharing.share("","", "https://image.prntscr.com/image/G9jvyUxlT7qoNyaFcLfACw.png" ,"https://play.google.com/store/apps/details?id=com.appmofix.movies").then(() => {
              console.log("shareViatwitter: Success");
            }).catch(() => {
              console.error("shareViatwitter: failed");
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close' ,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
}
 else if (this.platform.is('ios')) {
    ///  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);
      let actionSheet = await this.actionSheetController.create({
        header: 'Share App',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Facebook',
            role: 'destructive',
            icon: 'logo-facebook',
           // cssClass: 'action-red',
            handler: () => {
             
                this.socialSharing.shareViaFacebook("", "", "https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                  console.log("shareViaFacebook: Success");
                }).catch(() => {
                  console.error("shareViaFacebook: failed");
                });
             
            }
          },
       
        
          {
            text: 'Whatsapp',
            role: 'destructive',
            icon: 'logo-whatsapp',
         
            handler: () => {
              this.socialSharing.shareViaWhatsApp("", "https://image.prntscr.com/image/G9jvyUxlT7qoNyaFcLfACw.png" ,"https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                console.log("shareViaWhatsApp: Success");
              }).catch(() => {
                console.error("shareViaWhatsApp: failed");
              });
            }
          },
          {
            text: 'Twitter',
            role: 'destructive',
            icon: 'logo-twitter',
         
            handler: () => {
              this.socialSharing.shareViaTwitter("", "https://image.prntscr.com/image/G9jvyUxlT7qoNyaFcLfACw.png" ,"https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                console.log("shareViatwitter: Success");
              }).catch(() => {
                console.error("shareViatwitter: failed");
              });
            }
          },
          {
            text: 'Other',
            role: 'destructive',
            icon: 'paper-plane',
          
            handler: () => {
              this.socialSharing.share("","", "https://image.prntscr.com/image/G9jvyUxlT7qoNyaFcLfACw.png" ,"https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                console.log("shareViatwitter: Success");
              }).catch(() => {
                console.error("shareViatwitter: failed");
              });
            }
          },
          {
            text: 'cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: 'close' ,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
      }

  }

/////share app
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