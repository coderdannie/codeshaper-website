import { links } from '../utils/links';
import { icons } from '../utils/SocialIcons';
import { AiOutlineSearch } from 'react-icons/ai';
const MobileNav = () => {
  return (
    <div className="mobile-nav fixed bg-black left-0 right-0 py-10 bottom-0 top-20">
      <div>
        <div className=" flex flex-col items-center justify-between  h-full">
          <ul className="nav-links  flex-col items-center  text-center">
            {links.map((link) => {
              return (
                <li key={link.id} className="px-4 pb-5">
                  <a href="/" className="font-sans uppercase ">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col items-center pt-6">
            <div className="social-icons flex pr-2">
              {icons.map((icons, i) => {
                const { icon } = icons;
                return (
                  <a className="px-2" key={i} href="www.facebook.com">
                    {icon}
                  </a>
                );
              })}
            </div>
            <div className="search px-4 h-full flex items-center">
              <button type="button">
                <AiOutlineSearch className="w-[27px] mt-6 text-2xl" />
              </button>
            </div>
            <div className=" text-center pt-10">
              <p>
                Need help? <br />
                +92 666 888 0000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
