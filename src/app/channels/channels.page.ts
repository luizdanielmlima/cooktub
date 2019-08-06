import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Channel } from '../shared/channel.model';

@Component({
  selector: 'app-channels',
  templateUrl: 'channels.page.html',
  styleUrls: ['channels.page.scss']
})
export class ChannelsPage implements OnInit {
  public channelsRef = [
    {
      id: 'UCemXyN0MvApSEEtGvAsdo3g',
      title: 'Home Cooking Adventure'
    },
    {
      id: 'UCNbngWUqL2eqRw12yAwcICg',
      title: 'Laura in the Kitchen'
    },
    {
      id: 'UCJFp8uSYCjXOMnkUyb3CQ3Q',
      title: 'Tasty'
    },
    {
      id: 'UC0lG3Ihe4LGV851lODRIS5g',
      title: 'French Cooking Academy'
    },
    {
      id: 'UCr_RedQch0OK-fSKy80C3iQ',
      title: 'Oh Yum with Anna Olson'
    },
    {
      id: 'UCFjd060Z3nTHv0UyO8M43mQ',
      title: 'Joy of Baking'
    }
  ];

  public channels: Channel[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getChannelsInfo();
  }

  getChannelsInfo() {
    this.dataService.getChannels().subscribe(data => {
      this.channels = data;
      this.dataService.saveChannelsData(this.channels);
      // console.log(this.channels);
    });
  }
}
