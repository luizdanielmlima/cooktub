import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { YoutubePipe } from './youtube.pipe';
import { PlayerModalComponent } from '../component/player-modal/player-modal.component';

@NgModule({
  declarations: [YoutubePipe, PlayerModalComponent],
  imports: [CommonModule, IonicModule],
  entryComponents: [PlayerModalComponent]
})
export class SharedModule {}
