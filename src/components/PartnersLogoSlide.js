import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import logo from '../assets/partner-logo.png';
const PartnersLogoSlide = () => {
  return (
    <div className="partners-logos flex justify-between  mx-auto w-[80vw] relative h-[40px] overflow-hidden">
      <button type="button" className="next right-0  bg-gray-600 hover:bg-blue">
        <AiOutlineArrowLeft className="bg-darkBlue text-lightBlue" />
      </button>
      <div className="w-[150px]  ">
        <img src={logo} alt="partner logo " />
      </div>
      <div className="w-[150px] ">
        <img src={logo} alt="partner logo " />
      </div>
      <div className="w-[150px]  ">
        <img src={logo} alt="partner logo " />
      </div>
      <div className="w-[150px]  ">
        <img src={logo} alt="partner logo " />
      </div>

      <button type="button" className="prev left-0 bg-gray-600 hover:bg-blue">
        <AiOutlineArrowRight className="bg-darkBlue text-lightBlue" />
      </button>
    </div>
  );
};
export default PartnersLogoSlide;
