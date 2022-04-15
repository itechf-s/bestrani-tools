import { tw } from 'twind';
import Button from '@/components/button';

const ToolSection = () => (
  <div className={tw(`container`)}>
    <h2 className={tw(`text-center pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 rounded-xl`)}>
      Ideal Body Weight Calculator
    </h2>
      <div className={tw(`flex flex-col max-w-7xl py-6 sm:px-6 lg:px-8 border-1 border-red-200`)}>
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
);

export default ToolSection;
