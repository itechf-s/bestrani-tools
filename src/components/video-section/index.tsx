import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';
import YouTube from 'react-youtube';

const opts = {
  width: '100%',
  playerVars: {
   // https://developers.google.com/youtube/player_parameters
   autoplay: 0,
   color : 'red'
  },
 };

const PlayButton = () => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
    )}
    aria-label="play video"
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>Watch the video (5 min)</span>
  </button>
);

const VideoSection = ({id} : any) => (
  <section className={tw(`mt-1 m-auto max-w-2xl`)}>
        <YouTube videoId={id} opts={opts} className={tw(`rounded-2xl`)} />
  </section>
);

export default VideoSection;
