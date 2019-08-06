import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss']
})
export class PlayerModalComponent implements OnInit {
  @Input() videoID: string;
  fullURL: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const baseURL = 'https://www.youtube.com/embed/';
    const params = '?showinfo=0&modestbranding=1';
    this.fullURL = `${baseURL}${this.videoID}${params}`;
    console.log(this.fullURL);
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
