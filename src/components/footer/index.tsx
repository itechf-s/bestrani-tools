import { tw } from 'twind';
import Button from '@/components/button';

const quickLinks = {
  name: `Quick Links`,
  links: [
    { title: `Home`, url: `/` },
    { title: `About`, url: `/about` },
    { title: `Contact`, url: `/contact` },
  ],
};
const otherLinks = {
  name: `Others Links`,
  links: [
    { title: `Privacy Policy`, url: `/privacy-policy` },
    { title: `Copy Right`, url: `/copy-right` },
    { title: `Terms and Conditions`, url: `/terms-and-conditions` },
    { title: `Amazon Affiliate Disclosure`, url: `/amazon-affiliate-disclosure` },
  ],
};
const favoriteSites = {
  name: `Favorite Sites`,

  links: [
    { title: `Theislah`, url: `https://theislah.com` },
    { title: `Fincz`, url: `https://fincz.com` },
    { title: `Itechf`, url: `https://itechf.com` },
    { title: `Dqote`, url: `https://dqote.com` },
  ],
};

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-2 pb-2`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap pb-2`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-10 w-auto mr-4`)} src="https://bestrani.com/images/Bestrani-logo.webp" alt="logo" width={213} height={47} />
        <p className={tw(`text-4xl text-indigo-500 font-bold`)}>FASHION</p>
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>{quickLinks.name}</h4>
              <ul>
                {quickLinks.links.map(({ title, url }) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={title}>
                    <a className={tw(`hover:underline hover:text-red-500`)} href={url}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>{otherLinks.name}</h4>
              <ul>
                {otherLinks.links.map(({ title, url }) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={title}>
                    <a className={tw(`hover:underline hover:text-red-500`)} href={url}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>{favoriteSites.name}</h4>
              <ul>
                {favoriteSites.links.map(({ title, url }) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={title}>
                    <a className={tw(`hover:underline hover:text-red-500`)} href={url}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
    <div className={tw(`bg-white border-t border-gray-400 pt-1 text-center font-serif`)}>Copyright © 2020-2022 Bestrani. All Rights Reserved.</div>
  </footer>
);

export default Footer;
