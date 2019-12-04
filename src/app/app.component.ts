import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

/* Plugins */
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree,AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private admobFree: AdMobFree,


  ) {

    this.initializeApp();
    this.showBanner();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      //this.checkSession();
    });
  }

  showBanner(){
    if (this.platform.is('android')) {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      //isTesting: true,// Remove in production
      autoShow: true,
      bannerAtTop:true,
      id:'ca-app-pub-3000905870244951/4974601646'
  
  
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
      }
  
      else if (this.platform.is('ios')) {
        const bannerConfig: AdMobFreeBannerConfig = {
          // add your config here
          // for the sake of this example we will just use the test config
          //isTesting: true,// Remove in production
          autoShow: true,
          id:'ca-app-pub-3000905870244951/6867952022'
  
  
         };
         this.admobFree.banner.config(bannerConfig);
         
         this.admobFree.banner.prepare()
           .then(() => {
             // banner Ad is ready
             // if we set autoShow to false, then we will need to call the show method here
           })
           .catch(e => console.log(e));
       }  
  
  }//fin banner

}
