import { FaPhoneSquareAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import logo from './assets/logo.png';
import { icons } from './utils/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-[#8F8DA0]">
      <div className="wrapper  ">
        <div className="grid gap-10 sm:grid-cols-2 pt-[80px] pb-[60px] lg:grid-cols-3 border-gray border-b-2">
          <div>
            <div className="logo mb-4">
              <img className="w-[150px] " src={logo} alt="Codeshaper logo" />
            </div>
            <p className="border-b-2 border-[#8F8DA0] pb-6">
              Welcome to our consultancy agency. Lore ipsum simply text amet
              cing elit simply text amet cing elit.
            </p>
            <div className="icons pt-6">
              <div className="flex items-center ">
                <FaPhoneSquareAlt className="text-lightBlue pl-2 text-4xl  mr-4" />
                +92 666 888 0000
              </div>
              <div className="flex items-center ">
                <MdEmail className="text-lightBlue pl-2 text-4xl  mr-4" />
                needhelp@company.com
              </div>
              <div className="flex items-center ">
                <ImLocation2 className="text-lightBlue pl-2 text-4xl  mr-4" />
                66 Broklyn Street New York, USA
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <div className="footer-links flex justify-between">
              <div>
                <a href="/">About</a>
                <a href="/">Meet our Team</a>
                <a href="/">Case studies</a>
                <a href="/">Latest News</a>
                <a href="/">Contact</a>
              </div>
              <div>
                <a href="/">Support</a>
                <a href="/">Terms of use</a>
                <a href="/">Privacy & Policy</a>
                <a href="/">Help</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <form className="bg-black py-6 px-8">
              <p className="pb-2">
                Subscribe for latest articles and resources
              </p>
              <div className="bg-white px-4 py-2 flex justify-between">
                <input
                  className="w-[70%]"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="px-2 py-1 bg-lightBlue text-white"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between pt-6 pb-8">
          <div>© Copyright 2021 by Company</div>
          <div className="flex ">
            {icons.map((icons, i) => {
              const { icon } = icons;
              return (
                <a className="px-2 text-white" key={i} href="www.facebook.com">
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
