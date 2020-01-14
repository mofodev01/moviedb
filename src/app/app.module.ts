/* Core */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Modules */
import { AppRoutingModule } from './app-routing.module';

/* Plugins */
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { Market } from '@ionic-native/market/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/* Components */
import { AppComponent } from './app.component';

/* Helpers */
import { CustomHttpInterceptor } from './core/custom-http.interceptor';
import { CustomErrorHandler } from './core/custom-error-handler';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen,
    SafariViewController,
    SocialSharing,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AdMobFree,
    Market,
    YoutubeVideoPlayer,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
