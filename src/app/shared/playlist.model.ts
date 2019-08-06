export interface Playlist {
  kind: any;
  etag: string;
  id: string;
  snippet: {
    publishedAt: any;
    channelId: string;
    title: string;
    description: string;
    thumbnails: any;
    channelTitle: string;
    tags: [string];
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
  };
  status: {
    privacyStatus: string;
  };
  contentDetails: {
    itemCount: number;
  };
  player: {
    embedHtml: string;
  };
  localizations: any;
}
