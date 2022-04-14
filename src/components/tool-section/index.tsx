import { tw } from 'twind';
import Button from '@/components/button';

const ToolSection = () => (
  <div>
    <h2 className="text-center-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 rounded-xl">
      Ideal Body Weight Calculator
    </h2>
    <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0 items-center`)}>
      <div className={tw(`border border-red-400 rounded py-5 px-4`)}>
        <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Gender</h4>
        <div className={tw(`flex w-full`)}>
          <input
            aria-label="ages"
            type="radio"
            className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
            placeholder="Ages 2 - 80"
          />
        </div>
        <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Age</h4>
        <div className={tw(`flex w-full`)}>
          <input
            aria-label="ages"
            type="text"
            className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
            placeholder="Ages 2 - 80"
          />
        </div>
        <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Height</h4>
        <div className={tw(`flex w-full`)}>
          <input
            aria-label="height"
            type="text"
            className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
            placeholder="Enter your height in Cms"
          />
        </div>
        <div className={tw(`flex w-full`)}>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  </div>
);

export default ToolSection;
