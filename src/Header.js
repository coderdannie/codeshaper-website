import Nav from './components/Nav';
import Hero from './components/Hero';
import logo from './assets/logo2.png';
import MobileNav from './components/MobileNav';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from './context';
const Header = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  return (
    <header className="header text-white h-screen">
      <div className="flex header-container px-8 p mx-auto items-center border-b-2 border-white h-[100px]">
        <div className="logo w-[250px]  lg:w-[150px] pr-2">
          <img src={logo} alt="chodeshaper logo" />
        </div>
        <Nav />
        <button
          className="toggle-bar "
          aria-expanded={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
      {isOpen && <MobileNav />}

      <Hero />
    </header>
  );
};
export default Header;
