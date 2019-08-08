import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { DataService } from '../shared/data.service';
import { Channel } from '../shared/channel.model';
import { Playlist } from '../shared/playlist.model';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.page.html',
  styleUrls: ['./channel-detail.page.scss']
})
export class ChannelDetailPage implements OnInit {
  channelID: string;
  channelData: Channel;
  playlists: Playlist[];
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('channelID')) {
        // redirect
        return;
      }
      this.channelID = paramMap.get('channelID');
      this.checkDataStatus();
    });
  }

  scrollToTop() {
    this.content.scrollToTop(1000);
  }

  checkDataStatus() {
    if (this.dataService.checkChannelsHaveData()) {
      // navigated from channels page, so the data is already loaded
      this.getChannelData();
    } else {
      // user accessed channel url directly, no previous data
      this.dataService.getChannels().subscribe(data => {
        this.dataService.saveChannelsData(data);
        this.getChannelData();
      });
    }
  }

  getChannelData() {
    this.channelData = this.dataService.getChannelInfo(this.channelID);
    // console.log(this.channelData);
    this.getChannelPlaylists();
  }

  getChannelPlaylists() {
    this.dataService.getChannelPlaylists(this.channelID).subscribe(data => {
      this.playlists = data.items;
    });
  }

  goToPlaylistPage(playlist: Playlist) {
    this.dataService.saveCurrentPlaylist(playlist);
    this.router.navigate([
      '/channels',
      this.channelID,
      'playlist',
      playlist.id
    ]);
  }
}
