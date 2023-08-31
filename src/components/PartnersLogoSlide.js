import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const PartnersLogoSlide = () => {
  return (
    <div className="partners-logos pt-12 pb-8 flex justify-between  mx-auto  relative h-[40px] overflow-hidden">
      <button
        type="button"
        className="next flex items-center right-0  bg-gray-600  border-lightBlue border-2 p-3"
      >
        <AiOutlineArrowLeft className=" text-lightBlue" />
      </button>
      <button
        type="button"
        className="prev flex items-center border-lightBlue border-2 left-0 bg-gray-600  p-3"
      >
        <AiOutlineArrowRight className=" text-lightBlue" />
      </button>
    </div>
  );
};
export default PartnersLogoSlide;
