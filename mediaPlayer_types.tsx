import { $Values } from "utility-types";


import { Dispatch as _Dispatch, GetState as _GetState } from "redux";
import { NewsBrand } from "../../lib/brands/types";
import { MediaSeries } from "../mediaSection/types";
import { HydrationEnumType } from "./constants";
import { Media } from "../../classes/media/Media";
import { LinkableContents } from "../../classes/Linkable";
import { ContentTag } from "../../classes/story/Story";
import { Nullable } from "../../types/global";
import { PlayerTypeEnum, FETCH_LIVE_SCHEDULE_ERROR, FETCH_LIVE_SCHEDULE_SUCCESS, FETCH_MEDIA_ERROR, FETCH_MEDIA_START, FETCH_MEDIA_SUCCESS, FETCH_LIVE_TV_MEDIA_SUCCESS, MEDIA_CLOSE_ALL_MORE, MEDIA_COMPLETE, MEDIA_IS_INTERACTING, MEDIA_IS_MORE_OPEN, MEDIA_LOAD_START, MEDIA_LOAD, MEDIA_PAUSE, MEDIA_START, MEDIA_PLAYER_APP_STATE_CHANGE_HANDLE, MEDIA_PLAYER_CONFIG, MEDIA_PLAYER_LOAD, MEDIA_PLAYER_UNLOAD, MEDIA_PLAYER_MINIMIZE, MEDIA_PLAYER_MINIMIZE_NOW, MEDIA_PROGRESS, MEDIA_PROGRESS_COMPLETION, MEDIA_PLAYER_RECIRCULATE, MEDIA_SEEK_COMPLETE, MEDIA_SEEK_START, MEDIA_PLAYER_FORWARD, MEDIA_PLAYER_REWIND, MEDIA_FAIL, MEDIA_RETRY, MEDIA_VOLUME_CHANGE, MEDIA_PLAY_NEXT, MEDIA_PLAY_PREVIOUS, PREROLL_COMPLETE, PREROLL_FAIL, PREROLL_LOAD_START, PREROLL_LOAD, PREROLL_PROGRESS, TOGGLE_CLOSED_CAPTION, TOGGLE_CLOSED_CAPTION_GOOGLE_CAST, MEDIA_SET_VIDEO_TRACK_ENABLED, MEDIA_PLAYER_REDESIGN_CONFIG_FETCH_COMPLETE, MEDIA_PLAYER_FETCH_RELATED_ARTICLES_SUCCESS, MEDIA_PAUSE_GOOGLE_CAST, MEDIA_COMPLETE_GOOGLE_CAST, PLAYLIST_CARD_PRESS, FETCH_EXTRA_PLAYLIST_MEDIA_SUCCESS, PIP_VIDEO_PRESS, PIP_MEDIA_COMPLETE, PIP_MEDIA_PLAY_NEXT, PIP_PREROLL_LOAD_START, PIP_PREROLL_LOAD, PIP_PREROLL_COMPLETE, PIP_PREROLL_FAIL, PIP_MEDIA_PROGRESS, PIP_PREROLL_PROGRESS, PIP_HIDE, PIP_CLOSE, PIP_MEDIA_INITIAL } from "./constants";

export type PlayerType = $Values<typeof PlayerTypeEnum>;

export type MinimizeTitleStateEnumType = "minimize_allowed" | "minimize_will_be_allowed_after_ad";

export type DfpTarget = {
  guid?: string;
  kwl?: string;
  ni?: string;
  npa?: number;
  playerHeight?: number;
  playerWidth?: number;
  tagr?: string;
  tr?: string;
  url?: string;
  subscriber?: string;
  ptr?: number;
  location?: string;
  suid?: string;
  sites?: string;
};

export type PipState = {
  visible: boolean;
  maximized: boolean;
  isPrerollPlaying: boolean;
  prerollLastCurrentTime: number;
  isLive: boolean;
  lastTrackedInitialMediaID: Nullable<string>;
};

export type MediaState = {
  id: Nullable<string>; // the id of the media
  resourceId?: string;
  playback: {url: string;mediaType?: string;cdnName?: string;} | null | typeof undefined; // contains url and connection type for playback
  isActive: boolean; // is the media currently playing
  needsPreroll: boolean; // does this media need a preroll?
  isPreroll: boolean; // is this media playing a preroll
  isFailed: boolean;
  didPreroll: boolean; // did this media already play a preroll?
  didPassPreroll: boolean; // has this media played the minimum preroll threshold?
  isAudio: boolean;
  hasBeenActive: boolean;
  isSeeking: boolean;
  lastCurrentTime: number;
  totalTime: number;
  published: number;
  updatedAt?: number;
  duration: number;
  title: string;
  description: string;
  isInteracting: boolean;
  isPrerollLoading: boolean;
  isMediaLoading: boolean;
  isPaused: boolean;
  image?: string;
  imageURL: Nullable<string>;
  isMoreOpen: boolean;
  interactionTimeout: Nullable<number>;
  closedCaptionAvailable: boolean;
  correlator?: number;
  isLive: boolean;
  isTextToSpeech?: boolean;
  adParams?: {
    adUnitId: string;
    dfpTarget: DfpTarget;
  };
  adTagURL?: string;
  adTagURLParams?: any;
  start: number;
  end: number;
  longUrl?: Nullable<string>;
  primarySite?: Nullable<NewsBrand>;
  links: LinkableContents | null | typeof undefined;
  hasRelatedArticles: Nullable<boolean>;
  contentTags?: Array<ContentTag>;
  series?: Array<MediaSeries>;
  suid?: string;
  resourceType: string;
  mediaType?: string;
  startPosition?: number;
};

export type MediaStateSubstitute = {
  title?: Nullable<string>;
  imageURL?: Nullable<string>;
  hydration: HydrationEnumType;
  id: Nullable<string>;
  links: Nullable<{self?: {href: Nullable<string>;};}>;
  isPreroll?: boolean;
};

export type MediaPlayerMedia = {
  id: Nullable<string>; // the id of the media
  playback: any; // contains url and connection type for playback
  isActive: boolean; // is the media currently playing
  needsPreroll: boolean; // does this media need a preroll?
  isPreroll: boolean; // is this media playing a preroll
  didPreroll: boolean; // did this media already play a preroll?
  didPassPreroll: boolean; // has this media played the minimum preroll threshold?
  hasBeenActive: boolean;
  isSeeking: boolean;
  lastCurrentTime: number;
  totalTime: number;
  title: string;
  description: string;
  isInteracting: boolean;
  isPrerollLoading: boolean;
  isMediaLoading: boolean;
  isPaused: boolean;
  imageURL: Nullable<string>;
  isMoreOpen: boolean;
  interactionTimeout: Nullable<number>;
};

export type DaiConfig = {
  vodDfpCmsId: string;
  liveDfpKAssetKey: {
    [key: string]: {
      [key: string]: string;
    };
  };
};

export type MediaPlayerState = {
  config: {
    mediaPlayerRedesignChannels: boolean;
    mediaPlayerRedesignPIP: boolean;
  };
  minimizeTitleState: MinimizeTitleStateEnumType;
  useTextForMinimizeIcon: boolean;
  correlator: Nullable<number>;
  allowedSecondsOfPlayback: number;
  maxAllowedSecondsOfPlayback: number;
  mediaStates: Array<MediaState>;
  playingMediaID: Nullable<string>;
  completedMediaIndex: number;
  recirculatedMediaIndex: number;
  playerType: Nullable<PlayerType>;
  volume: number;
  closedCaptionEnabled: boolean;
  trigr: string;
  completionMarkerLast: number;
  completionMarkerSet?: {};
  isOpenedFromAutoplay: boolean;
  mediaTypeOverride?: string;
  dimMinimize: boolean;
  showMinimize: boolean;
  daiConfig: Nullable<DaiConfig>;
  adTestNameValuePair?: Object;
  pip: PipState;
};

type FetchLiveScheduleError = {
  type: typeof FETCH_LIVE_SCHEDULE_ERROR;
  error: Error;
  now: number;
};

type FetchLiveScheduleSuccess = {
  type: typeof FETCH_LIVE_SCHEDULE_SUCCESS;
  result: Object;
  now: number;
};

type FetchMediaError = {
  type: typeof FETCH_MEDIA_ERROR;
};

type FetchMediaStart = {
  type: typeof FETCH_MEDIA_START;
  mediaID: Nullable<string>;
};

type FetchMediaSuccess = {
  type: typeof FETCH_MEDIA_SUCCESS;
  result: Object;
  mediaID: Nullable<string>;
  random: number;
  connection: string;
  now: number;
};

type FetchLiveTVMediaSuccess = {
  type: typeof FETCH_LIVE_TV_MEDIA_SUCCESS;
  result: Object;
  mediaID: Nullable<string>;
  random: number;
  connection: string;
  now: number;
};

type MediaCloseAllMore = {
  type: typeof MEDIA_CLOSE_ALL_MORE;
};

type MediaComplete = {
  type: typeof MEDIA_COMPLETE;
  mediaID: Nullable<string>;
  playingMediaID: Nullable<string>;
  recirculatedMediaIndex: number;
  completed: boolean;
  eventData: Object;
  isConnectedToGoogleCast: boolean;
};

type MediaIsInteracting = {
  type: typeof MEDIA_IS_INTERACTING;
  mediaID: Nullable<string>;
  isInteracting: boolean;
  interactionTimeout: Nullable<number>;
};

type MediaIsMoreOpen = {
  type: typeof MEDIA_IS_MORE_OPEN;
  mediaID: Nullable<string>;
  isMoreOpen: boolean;
};

type MediaLoadStart = {
  type: typeof MEDIA_LOAD_START;
  mediaID: Nullable<string>;
};

type MediaLoad = {
  type: typeof MEDIA_LOAD;
  mediaID: Nullable<string>;
};

type MediaPause = {
  type: typeof MEDIA_PAUSE;
  mediaID: Nullable<string>;
  isPaused: boolean;
  eventData?: {currentTime?: number;};
};

type MediaPauseGoogleCast = {
  type: typeof MEDIA_PAUSE_GOOGLE_CAST;
  mediaID: Nullable<string>;
  isPaused: boolean;
  eventData?: {currentTime?: number;};
};

type MediaStart = {
  type: typeof MEDIA_START;
  mediaID: Nullable<string>;
  eventData: {duration?: number;};
};

type MediaPlayerAppStateChangeHandle = {
  type: typeof MEDIA_PLAYER_APP_STATE_CHANGE_HANDLE;
  playingMediaID: Nullable<string>;
  isPaused: boolean;
};

type MediaPlayerConfig = {
  type: typeof MEDIA_PLAYER_CONFIG;
  config: {
    useTextForMinimizeIcon: boolean;
    maxAllowedSecondsOfPlayback: number | string;
    daiConfig: Nullable<DaiConfig>;
  };
  showMinimize: boolean;
};

type MediaPlayerLoad = {
  type: typeof MEDIA_PLAYER_LOAD;
  media: MediaState;
  playlist: Array<Media | string>;
  randoms: Array<number>;
  correlator: number;
  connection: string;
  showMinimize: boolean;
  isRestored: boolean;
  mediaTypeOverride?: string;
  autoplay?: boolean;
};

type MediaPlayerUnload = {
  type: typeof MEDIA_PLAYER_UNLOAD;
};

export type MediaPlayerMinimize = {
  type: typeof MEDIA_PLAYER_MINIMIZE;
  dimMinimize: boolean;
  minimizeTitleState: MinimizeTitleStateEnumType;
};

type MediaPlayerMinimizeNow = {
  type: typeof MEDIA_PLAYER_MINIMIZE_NOW;
  isLive: boolean;
  lastTrackedInitialMediaID: Nullable<string>;
  updatedMediaPlayerWithAdTags: MediaPlayerState;
};

type MediaProgress = {
  type: typeof MEDIA_PROGRESS;
  mediaID: Nullable<string>;
  currentTime: number;
};

type MediaProgressCompletion = {
  type: typeof MEDIA_PROGRESS_COMPLETION;
  percentage: number;
};

type MediaPlayerRecirculate = {
  type: typeof MEDIA_PLAYER_RECIRCULATE;
  mediaIndex: number;
};

type MediaSeekComplete = {
  type: typeof MEDIA_SEEK_COMPLETE;
  mediaID: Nullable<string>;
  currentTime: number;
};

type MediaSeekStart = {
  type: typeof MEDIA_SEEK_START;
  mediaID: Nullable<string>;
  currentTime: number;
};

type MediaPlayerForward = {
  type: typeof MEDIA_PLAYER_FORWARD;
  mediaID: Nullable<string>;
  currentTime: number;
};

type MediaPlayerRewind = {
  type: typeof MEDIA_PLAYER_REWIND;
  mediaID: Nullable<string>;
  currentTime: number;
};

type MediaFail = {
  type: typeof MEDIA_FAIL;
  mediaID: Nullable<string>;
  eventData: {buffering: boolean;};
};

type MediaRetry = {
  type: typeof MEDIA_RETRY;
  mediaID: Nullable<string>;
};

type MediaVolumeChange = {
  type: typeof MEDIA_VOLUME_CHANGE;
  eventData: {volume?: number;};
};

type MediaPlayNext = {
  type: typeof MEDIA_PLAY_NEXT;
  playingMediaID: Nullable<string>;
  recirculatedMediaIndex: number;
  completed: boolean;
  mediaID: Nullable<string>;
  isConnectedToGoogleCast: boolean;
};

type MediaPlayPrevious = {
  type: typeof MEDIA_PLAY_PREVIOUS;
  playingMediaID: Nullable<string>;
  recirculatedMediaIndex: number;
  completed: boolean;
  mediaID: Nullable<string>;
  isConnectedToGoogleCast: boolean;
};

type PrerollComplete = {
  type: typeof PREROLL_COMPLETE;
  mediaID: Nullable<string>;
  eventData: Object;
};

type PrerollFail = {
  type: typeof PREROLL_FAIL;
  mediaID: Nullable<string>;
  eventData: Object;
};

type PrerollLoadStart = {
  type: typeof PREROLL_LOAD_START;
  mediaID: Nullable<string>;
};

type PrerollLoad = {
  type: typeof PREROLL_LOAD;
  mediaID: Nullable<string>;
};

type PrerollProgress = {
  type: typeof PREROLL_PROGRESS;
  mediaID: Nullable<string>;
  currentTime: number;
  totalTime: number;
};

type ToggleClosedCaption = {
  type: typeof TOGGLE_CLOSED_CAPTION;
  eventData: {closedCaptionEnabled: boolean;};
};

type ToggleClosedCaptionGoogleCast = {
  type: typeof TOGGLE_CLOSED_CAPTION_GOOGLE_CAST;
  eventData: {closedCaptionEnabled: boolean;};
};

type MediaSetVideotrackEnabled = {
  type: typeof MEDIA_SET_VIDEO_TRACK_ENABLED;
  enabled: boolean;
};

type MediaPlayerRedesignConfigFetchComplete = {
  type: typeof MEDIA_PLAYER_REDESIGN_CONFIG_FETCH_COMPLETE;
  config: {
    mediaPlayerRedesignChannels: boolean;
    mediaPlayerRedesignPIP: boolean;
  };
};

type MediaPlayerFetchRelatedArticlesSuccess = {
  type: typeof MEDIA_PLAYER_FETCH_RELATED_ARTICLES_SUCCESS;
  mediaID: Nullable<string>;
  hasRelatedArticles: boolean;
};

type MediaCompleteGoogleCast = {
  type: typeof MEDIA_COMPLETE_GOOGLE_CAST;
  mediaID: Nullable<string>;
  eventData: Object;
};

type PlaylistCardPress = {
  type: typeof PLAYLIST_CARD_PRESS;
  playingMediaID: Nullable<string>;
  recirculatedMediaIndex: number;
  completed: boolean;
  mediaID: Nullable<string>;
  isConnectedToGoogleCast: boolean;
};

type FetchExtraPlaylistMediaSuccess = {
  type: typeof FETCH_EXTRA_PLAYLIST_MEDIA_SUCCESS;
  result: Array<Media | string>;
  mediaCards: Array<Media | string>;
  randoms: Array<number>;
  connection: string;
};

type PipVideoPress = {
  type: typeof PIP_VIDEO_PRESS;
};

type PipMediaComplete = {
  type: typeof PIP_MEDIA_COMPLETE;
  mediaID: Nullable<string>;
  eventData: Object;
};

type PipMediaPlayNext = {
  type: typeof PIP_MEDIA_PLAY_NEXT;
  mediaIndex: number;
  mediaID: Nullable<string>;
  isPreroll: boolean;
  isConnectedToGoogleCast: boolean;
};

type PipPrerollLoadStart = {
  type: typeof PIP_PREROLL_LOAD_START;
  mediaID: Nullable<string>;
};

type PipPrerollLoad = {
  type: typeof PIP_PREROLL_LOAD;
  mediaID: Nullable<string>;
};

type PipPrerollComplete = {
  type: typeof PIP_PREROLL_COMPLETE;
  mediaID: Nullable<string>;
  eventData: Object;
};

type PipPrerollFail = {
  type: typeof PIP_PREROLL_FAIL;
  mediaID: Nullable<string>;
  eventData: Object;
};

type PipMediaProgress = {
  type: typeof PIP_MEDIA_PROGRESS;
  mediaID: Nullable<string>;
  currentTime: number;
  totalTime: number;
  completionMarkerSet: Object;
  completionMarkerLast: number;
};

type PipPrerollProgress = {
  type: typeof PIP_PREROLL_PROGRESS;
  mediaID: Nullable<string>;
  currentTime: number;
  totalTime: number;
};

type PipHide = {
  type: typeof PIP_HIDE;
  mediaID: Nullable<string>;
};

type PipClose = {
  type: typeof PIP_CLOSE;
  mediaID: Nullable<string>;
};

type PipMediaInitial = {
  type: typeof PIP_MEDIA_INITIAL;
  mediaID: Nullable<string>;
  eventData: Object;
};

export type Action = FetchLiveScheduleError | FetchLiveScheduleSuccess | FetchMediaError | FetchMediaStart | FetchMediaSuccess | FetchLiveTVMediaSuccess | MediaCloseAllMore | MediaComplete | MediaIsInteracting | MediaIsMoreOpen | MediaLoadStart | MediaLoad | MediaPause | MediaPauseGoogleCast | MediaStart | MediaPlayerAppStateChangeHandle | MediaPlayerConfig | MediaPlayerLoad | MediaPlayerUnload | MediaPlayerMinimize | MediaPlayerMinimizeNow | MediaProgress | MediaProgressCompletion | MediaPlayerRecirculate | MediaSeekComplete | MediaSeekStart | MediaPlayerForward | MediaPlayerRewind | MediaFail | MediaRetry | MediaVolumeChange | MediaPlayNext | MediaPlayPrevious | PrerollComplete | PrerollFail | PrerollLoadStart | PrerollLoad | PrerollProgress | ToggleClosedCaption | ToggleClosedCaptionGoogleCast | MediaSetVideotrackEnabled | MediaPlayerRedesignConfigFetchComplete | MediaPlayerFetchRelatedArticlesSuccess | MediaCompleteGoogleCast | PlaylistCardPress | FetchExtraPlaylistMediaSuccess | PipVideoPress | PipMediaComplete | PipMediaPlayNext | PipPrerollLoadStart | PipPrerollLoad | PipPrerollComplete | PipPrerollFail | PipMediaProgress | PipPrerollProgress | PipHide | PipClose | PipMediaInitial;

export type Dispatch = _Dispatch<Action>;

export type GetState = _GetState<MediaPlayerState>;

export type StateCompositionMediaID = Nullable<string> | (() => boolean);

export type StateComposition = {} | ((arg0: MediaState) => {});

export type MediaAction = {
  type: string;
};

export type EventParam = {
  autoplay: boolean;
  isOpenedFromAutoplay: boolean;
  isLiveEvent?: Nullable<boolean>;
  liveTVRegion?: string;
  radioRegion?: string;
  continuousPlay?: Nullable<boolean>;
  isIOS?: Nullable<boolean>;
  isCast?: Nullable<boolean>;
  mediaState?: Nullable<MediaState>;
  pipVisible?: boolean;
  appBackgrounded?: boolean;
  screenURL?: string;
  mediaTypeOverride?: string;
};

// TODO conflate this with dimensions reducer
export type SizeParams = {
  portraitWidth: number;
  portraitHeight: number;
  height: number;
  width: number;
  contentHeight: number;
  tabletContentWidth: number;
  isLandscape: boolean;
  isLargeTabletMode: boolean;
};

// Subset of the targeting parameters for the stream request:
// https://support.google.com/admanager/answer/7320899
// Check the URL above or IMAStreamRequest.adTagParameters (or its Android equivalent)
// before adding other parameters.
// Don't encode anything for 'cust_params' (see the URL above)
export const DaiAdTagParametersKeys = Object.freeze({
  CUST_PARAMS: 'cust_params',
  DESCRIPTION_URL: 'description_url',
  NPA: 'npa',
  US_PRIVACY: 'us_privacy'
});

type DaiAdTagParametersKey = $Values<typeof DaiAdTagParametersKeys>;

export type DaiAdTagParameters = {
  [key: DaiAdTagParametersKey]: string;
};
export type DaiLive = {
  daiLive: {
    dfpKAssetKey: string;
    adParams?: Nullable<DaiAdTagParameters>;
  };
};
export type DaiVod = {
  daiVod: {
    contentSourceId: string;
    vodGuid?: Nullable<string>;
    adParams?: Nullable<DaiAdTagParameters>;
  };
};
export type DaiInfo = DaiLive | DaiVod;

export type PlayListInfo = {
  mediaIDs: Array<any>;
  playingMediaID: Nullable<string>;
  nextMediaIndex: number;
  previousMediaIndex: number;
};
