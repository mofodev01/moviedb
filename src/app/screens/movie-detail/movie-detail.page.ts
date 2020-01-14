
/* Core */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController,Platform } from '@ionic/angular';

/* Models */
import { Movie } from 'src/app/models/movie';
import { Cast } from 'src/app/models/cast';

/* Services */
import { MovieService } from 'src/app/services/movie/movie.service';

//import { CoreService } from 'src/app/services/core/core.service';

/* Components */
/* Plugins */
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree,AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';





@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss']
})
export class MovieDetailPage implements OnInit {

  private movieID: string = "";
  private trailerURL: any = null;
  movie: Movie;
  castList: Cast[] = [];
  similarMovies: Movie[] = [];
  rate: number = 0;

  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private socialSharing: SocialSharing,
    //private coreService: CoreService,
    private admobFree: AdMobFree,
    private youtube:YoutubeVideoPlayer,
    public Platform : Platform,
    private iab: InAppBrowser,
    private safariViewController: SafariViewController,) { }


  ngOnInit() {
    this.launchInterstitial();
    this.movieID = this.activatedRoute.snapshot.paramMap.get('movieID');
    setTimeout(() => {
      this.getMovieDetail();
      this.getMovieCast();
      this.getSimilarMovies();
      this.getMovieTrailer();
     
    }, 500);
  }

//////////////////  admob


launchInterstitial() {
  if (this.Platform.is('android')) {
  const interstitialConfig: AdMobFreeInterstitialConfig = {
          //isTesting: true,// Remove in production
          autoShow: true,
      //id: Your Ad Unit ID goes here
     id:'ca-app-pub-3000905870244951/4513251426'
  };

  this.admobFree.interstitial.config(interstitialConfig);

  
  this.admobFree.interstitial.prepare().then(() => {
      // success
      //console.log('admob inter is lunched here.')
  });

  }else if (this.Platform.is('ios')) {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      //isTesting: true,// Remove in production
      autoShow: true,
  //id: Your Ad Unit ID goes here
 id:'ca-app-pub-3000905870244951/8303472562'
};

this.admobFree.interstitial.config(interstitialConfig);


this.admobFree.interstitial.prepare().then(() => {
  // success
  
});

  } 

}






//////////////////  admob

openWebpage() {


  this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {

        this.safariViewController.show({
          url: 'http://appmofix.com/',
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#ff0000'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') console.log('Closed');
          },
          (error: any) => console.error(error)
        );

      } else {
        //-----------------
        const options: InAppBrowserOptions = {
          zoom: 'yes',
          shouldPauseOnSuspend: 'yes',
          location: 'yes'
    
        }
      
        this.iab.create('http://appmofix.com/', '_system', options);
        //-----------------
      }
    }
  );

}


  navigateBack() {
    this.navCtrl.pop();
  }

  showMovieTrailer() {
    //this.coreService.showBrowser(this.trailerURL).subscribe(result => { });
    this.youtube.openVideo(this.trailerURL);
  }

  shareMovie() {
    let url = `https://www.themoviedb.org/movie/${this.movie.id}`;
    this.socialSharing.share(this.movie.title, this.movie.overview, null, url).then((d) => {
    }).catch((err) => {
    });
  }

  getMovieDetail() {
    this.movieService.getMovieDetail(this.movieID).subscribe(d => {
      this.movie = d;
    });
  }


  getMovieCast() {
    this.movieService.getMovieCast(this.movieID).subscribe(d => {
      let tmpCastList = d;
      this.castList = tmpCastList.length > 10 ? tmpCastList.slice(0, 10) : tmpCastList;
    });
  }

  getMovieTrailer() {
    this.movieService.getMovieTrailerURL(this.movieID).subscribe(d => {
      this.trailerURL = d;
    });
  }


  getSimilarMovies() {
    this.movieService.getSimilarMovies(this.movieID).subscribe(d => {
      this.similarMovies = d;
    });
  }

}
