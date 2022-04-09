import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';

const VideoSection = () => (
  <div>
    <h3 className="p-6 max-w-sm mx-auto bg-red-400">line one</h3>
    <h1 className={tw(`p-6 max-w-sm mx-auto bg-red-400 rounded-xl`)}>my tool</h1>
    <input type="text" className={tw(`p-6 max-w-sm mx-auto bg-blue-100 flex rounded-xl items-center space-x-4`)} />
    <input
      type="date"
      name="today"
      id="today"
      className={tw(`p-6 max-w-sm mx-auto bg-blue-100	flex rounded-xl items-center space-x-4`)}
    />
  </div>
);

export default VideoSection;
