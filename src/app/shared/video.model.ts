export interface Video {
  kind: string;
  id: string;
  snippet?: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: any;
    channelTitle: string;
    tags: any;
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
  contentDetails?: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: any;
    contentRating: any;
    projection: string;
    hasCustomThumbnail: boolean;
  };
  statistics?: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
  topicDetails?: {
    topicIds: [string];
    relevantTopicIds: [string];
    topicCategories: [string];
  };
  fileDetails?: {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    videoStreams: any;
    audioStreams: any;
    durationMs: number;
    bitrateBps: number;
    creationTime: string;
  };
  suggestions?: any;
  liveStreamingDetails?: any;
  localizations?: any;
}
