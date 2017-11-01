import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DownloadaudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloadaudio',
  templateUrl: 'downloadaudio.html',
})
export class DownloadaudioPage {

  titleitem : string;
  chapters : any;
  paramData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleitem = "全部下载";
    this.paramData = this.navParams.data;
    
  }

  rightbtn():void {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadaudioPage');
    this.chapters = this.paramData.chapters
  }

}
