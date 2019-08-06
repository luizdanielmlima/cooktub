import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'channels',
    pathMatch: 'full'
  },
  {
    path: 'channels',
    children: [
      {
        path: '',
        loadChildren: './channels/channels.module#ChannelsPageModule'
      },
      {
        path: ':channelID',
        children: [
          {
            path: '',
            loadChildren:
              './channel-detail/channel-detail.module#ChannelDetailPageModule'
          },
          {
            path: 'playlist/:playlistID',
            loadChildren:
              './playlist-detail/playlist-detail.module#PlaylistDetailPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
