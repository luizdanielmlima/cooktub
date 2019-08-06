export interface Channel {
  kind: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: Date;
    thumbnails: any;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      favorites: string;
      uploads: string;
      watchHistory: string;
      watchLater: string;
    };
  };
  statistics: {
    viewCount: number;
    commentCount: number;
    subscriberCount: number;
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
  topicDetails: {
    topicIds: [string];
    topicCategories: [string];
  };
  status: {
    privacyStatus: string;
    isLinked: boolean;
    longUploadsStatus: string;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      defaultTab: string;
      trackingAnalyticsAccountId: string;
      moderateComments: boolean;
      showRelatedChannels: boolean;
      showBrowseView: boolean;
      featuredChannelsTitle: string;
      featuredChannelsUrls: [string];
      unsubscribedTrailer: string;
      profileColor: string;
      defaultLanguage: string;
      country: string;
    };
    watch: {
      textColor: string;
      backgroundColor: string;
      featuredPlaylistId: string;
    };
    image: {
      bannerImageUrl: string;
      bannerMobileImageUrl: string;
      watchIconImageUrl: string;
      trackingImageUrl: string;
      bannerTabletLowImageUrl: string;
      bannerTabletImageUrl: string;
      bannerTabletHdImageUrl: string;
      bannerTabletExtraHdImageUrl: string;
      bannerMobileLowImageUrl: string;
      bannerMobileMediumHdImageUrl: string;
      bannerMobileHdImageUrl: string;
      bannerMobileExtraHdImageUrl: string;
      bannerTvImageUrl: string;
      bannerTvLowImageUrl: string;
      bannerTvMediumImageUrl: string;
      bannerTvHighImageUrl: string;
      bannerExternalUrl: string;
    };
    hints: [
      {
        property: string;
        value: string;
      }
    ];
  };
  contentOwnerDetails: {
    contentOwner: string;
    timeLinked: Date;
  };
  localizations: any;
}
