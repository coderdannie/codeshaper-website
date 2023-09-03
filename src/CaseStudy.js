import carIcon from './assets/Icon metro-automobile.png';
const CaseStudy = () => {
  return (
    <section className="case-study bg-lightGray ">
      <div className="wrapper pb-[130px] pt-[94px]  md:mt-0">
        <div className="case-study-text pt-[80px] lg:pt-[94px]">
          <h2 className="uppercase text-center pb-5">new case studies</h2>
          <p className="text-[#8F8DA0] text-center font-bold md:text-lg">
            We help our clients renew their business
          </p>
        </div>
        <div className="grid gap-6 mt-[48px] md:mt-[54px] sm:grid-cols-2 md:grid-cols-3">
          <div className="card w-[100%] h-[450px] pb-[50px] px-6 justify-center md:h-[500px] bg-[#0F0D1D6B] uppercase text-white grid items-end ">
            <div className="px-[40px] lg:pb-[30px]">
              <img
                src={carIcon}
                className='className=" md:w-[70px] md:h-[55px]"'
                alt="metro-automobile "
              />
              <p className="text-sm font-bold mt-7">thought leadership</p>
              <h6 className="font-bold text-[1.5rem] lg:text-[1.875rem]">
                Business growth
              </h6>
            </div>
          </div>
          <div className="card w-[100%] h-[450px] pb-[50px] px-6 justify-center md:h-[500px] bg-[#0F0D1D6B] uppercase text-white grid items-end ">
            <div className="px-[40px] lg:pb-[30px]">
              <img
                src={carIcon}
                className='className=" md:w-[70px] md:h-[55px]"'
                alt="metro-automobile "
              />
              <p className="text-sm font-bold mt-7">thought leadership</p>
              <h6 className="font-bold text-[1.5rem] lg:text-[1.875rem]">
                Business growth
              </h6>
            </div>
          </div>
          <div className="card w-[100%] h-[450px] relative  pb-[50px] px-6 justify-center md:h-[500px] bg-[#0F0D1D6B] uppercase text-white grid items-end after:bg-lightBlue after:absolute after:bottom-0 after:left-0 after:right-[12%] after:top-[34%]">
            <div className="px-[40px] lg:pb-[30px]  relative z-10">
              <img
                src={carIcon}
                className='className=" md:w-[70px] md:h-[55px]"'
                alt="metro-automobile "
              />
              <p className="text-sm font-bold mt-7">thought leadership</p>
              <h6 className="font-bold text-[1.5rem] lg:text-[1.875rem]">
                Business growth
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudy;
