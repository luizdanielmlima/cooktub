import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import apiData from '../../assets/youtube-api-key.json';
import { Channel } from './channel.model';
import { Playlist } from './playlist.model';

export interface ApiInfo {
  type: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey: string;
  extData: ApiInfo = apiData;
  public channelsIDs =
    'UC0lG3Ihe4LGV851lODRIS5g, UCemXyN0MvApSEEtGvAsdo3g,UCNbngWUqL2eqRw12yAwcICg,UCJFp8uSYCjXOMnkUyb3CQ3Q,UCr_RedQch0OK-fSKy80C3iQ,UCFjd060Z3nTHv0UyO8M43mQ';
  public channelsData: Channel[] = [];
  public currentPlaylist: Playlist;

  constructor(public http: HttpClient) {
    this.apiKey = this.extData.key;
  }

  getChannels(): Observable<any> {
    // console.log('getChannels');
    const baseURL = 'https://www.googleapis.com/youtube/v3/channels';
    const partParams = 'brandingSettings,snippet,statistics';
    const url = `${baseURL}?part=${partParams}&id=${
      this.channelsIDs
    }&maxResults=12&key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.items;
      })
    );
  }

  checkChannelsHaveData(): boolean {
    if (this.channelsData.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  saveChannelsData(data: Channel[]) {
    this.channelsData = data;
  }

  saveCurrentPlaylist(playlist: Playlist) {
    this.currentPlaylist = playlist;
  }

  getCurrentPlaylist(): Playlist {
    return this.currentPlaylist;
  }

  getChannelInfo(channelID: string): Channel {
    return {
      ...this.channelsData.find(channel => {
        return channel.id === channelID;
      })
    };
  }

  getChannelPlaylists(channelID: string): Observable<any> {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=16&channelId=${channelID}&key=${
      this.apiKey
    }`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    );
  }

  getVideosFromPlaylistID(playlistID: string): Observable<any> {
    // console.log('getVideosFromPlaylistID');
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=${playlistID}&key=${
      this.apiKey
    }`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}
