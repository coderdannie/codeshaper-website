import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const PartnersLogoSlide = () => {
  return (
    <div className="partners-logos mt-12 lg-[86px] pb-6 flex justify-between  mx-auto  relative  overflow-hidden">
      <button
        type="button"
        className="prev-btn flex justify-center items-center h-[40px] w-[40px] md:h-[47px] md:w-[47px]  bg-gray-600  border-lightBlue border-2 w "
      >
        <AiOutlineArrowLeft className=" text-lightBlue text-base md:text-2xl" />
      </button>
      <button
        type="button"
        className="next-btn  flex justify-center items-center h-[40px] w-[40px] md:h-[47px] md:w-[47px]  bg-gray-600  border-lightBlue border-2 w "
      >
        <AiOutlineArrowRight className=" text-lightBlue  text-base md:text-2xl" />
      </button>
    </div>
  );
};
export default PartnersLogoSlide;
