import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';

import { DataService } from '../shared/data.service';
import { Video } from '../shared/video.model';
import { Playlist } from '../shared/playlist.model';
import { PlayerModalComponent } from '../component/player-modal/player-modal.component';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.page.html',
  styleUrls: ['./playlist-detail.page.scss']
})
export class PlaylistDetailPage implements OnInit {
  channelID: string;
  playlistID: string;
  playlistData: Playlist;
  videos: Video[];
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('channelID')) {
        // redirect
        return;
      }
      this.channelID = paramMap.get('channelID');
      this.playlistID = paramMap.get('playlistID');
      this.playlistData = this.dataService.getCurrentPlaylist(); // TODO: treats condition where user access url directly (no previous data)
      this.getPlaylistVideos();
    });
  }

  scrollToTop() {
    this.content.scrollToTop(1000);
  }

  getPlaylistVideos() {
    this.dataService
      .getVideosFromPlaylistID(this.playlistID)
      .subscribe(data => {
        this.videos = data.items;
        // console.log(this.videos);
      });
  }

  openVideoPlayerModal(id: string) {
    this.modalCtrl
      .create({
        component: PlayerModalComponent,
        componentProps: {
          videoID: id
        }
      })
      .then(modalEl => {
        modalEl.present();
      });
  }
}
