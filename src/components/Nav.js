import { links } from '../utils/links';
import { icons } from '../utils/SocialIcons';
import { AiOutlineSearch } from 'react-icons/ai';

const nav = () => {
  return (
    <nav className="nav  h-full w-full">
      <div className="desktop-nav flex items-center justify-between  h-full">
        <ul className="nav-links  h-full border-l-[1px] border-white flex items-center">
          {links.map((link) => {
            return (
              <li key={link.id} className="px-4">
                <a href="/" className="font-sans  font-medium  uppercase">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center h-full">
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
          <div className="search px-[20px] h-full border-x-[1px] border-white flex items-center">
            <button type="button">
              <AiOutlineSearch className="w-[27px] h-[27px]" />
            </button>
          </div>
          <div className="pl-6">
            <p className="text-base lg:text-base font-semibold">
              Need help? <br />
              +92 666 888 0000
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default nav;
