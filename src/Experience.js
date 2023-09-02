import bitBucket from './assets/Icon awesome-bitbucket.svg';
import leadingImg from './assets/leading.jpg';
import playIcon from './assets/Icon awesome-play.png';
import avionImg from './assets/AIVONS.png';
import { BiPhoneCall } from 'react-icons/bi';
import PartnersLogoSlide from './components/PartnersLogoSlide';

const Experience = () => {
  return (
    <>
      <section className="experience text-white bg-darkBlue text-center py-[80px] md:pt-[100px] lg:pb-[150px]">
        <div className="wrapper">
          <h2 className="pb-2 font-bold ">REAL-WORLD EXPERIENCE</h2>
          <p className=" font-bold md:text-lg text-[#726F84]">
            The best business consulting firm you can count on!
          </p>
          <div className="cards flex justify-center flex-wrap mt-[4rem] mb-[4.5rem] lg:mb-[9.125rem]">
            <div className="card flex justify-between items-center gap-8 bg-black pt-[78px]  pl-[50px] pb-[57px] pr-[50px] text-left">
              <div>
                <p className="pb-6  md:text-2xl ">
                  WEALTH <br /> MANAGEMENT
                </p>
                <a className="text-sm font-semibold  text-[#8F8DA0] " href="/">
                  READ MORE
                </a>
              </div>
              <div className=" self-end w-[60px]">
                <img src={bitBucket} alt="bitbucket icon" />
              </div>
            </div>
            <div className="card flex justify-between items-center gap-8 bg-black pt-[78px]  pl-[50px] pb-[57px] pr-[50px] text-left">
              <div>
                <p className="pb-6  md:text-2xl ">
                  WEALTH <br /> MANAGEMENT
                </p>
                <a
                  className="text-[0.75rem] font-semibold  text-[#8F8DA0] "
                  href="/"
                >
                  READ MORE
                </a>
              </div>
              <div className=" self-end w-[60px]">
                <img src={bitBucket} alt="bitbucket icon" />
              </div>
            </div>
            <div className="card flex justify-between items-center gap-8 bg-black pt-[78px]  pl-[50px] pb-[57px] pr-[50px] text-left">
              <div>
                <p className="pb-6  md:text-2xl ">
                  WEALTH <br /> MANAGEMENT
                </p>
                <a
                  className="text-[0.75rem] font-semibold  text-[#8F8DA0] "
                  href="/"
                >
                  READ MORE
                </a>
              </div>
              <div className=" self-end w-[60px]">
                <img src={bitBucket} alt="bitbucket icon" />
              </div>
            </div>
          </div>
          <div className="grid partners items-center ">
            <div className=" bg-[#32303D] h-[1px]"></div>
            <p className="uppercase font-semibold text-base ">
              meet the partners
            </p>
            <div className=" bg-[#32303D] h-[1px]"></div>
          </div>
          <PartnersLogoSlide />
        </div>
      </section>
      <section className="experience-section mt-2 md:mt-6  relative text-center md:text-left ">
        <div className="wrapper relative translate-y-[6%] md:translate-y-[10%]">
          <div className="flex flex-col gap-8 justify-between md:flex-row mb-6">
            <div className="md:w-[45%] relative">
              <button className="w-[100px] md:w-[124px] absolute top-6 flex justify-center items-center bg-lightBlue aspect-square cursor-pointer">
                <img src={playIcon} alt="play icon" />
              </button>
              <img
                className="md:h-[400px] w-[90%] ml-auto object-cover"
                src={leadingImg}
                alt="leading the modern finance"
              />
            </div>
            <div className="md:w-[45%] relative">
              <div>
                <div className="max-w-[50ch] mx-auto lg:mx-0">
                  <h2 className="uppercase pt-10 md:p-0">
                    {' '}
                    we're leading in the market
                  </h2>
                  <p className="pb-6 pt-6 lg:pt-[40px] text-[#726F84] text-base md:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus, esse numquam. Perferendis aspernatur.
                  </p>
                  <p className="text-lightBlue text-lg lg:text-2xl mb-10 ">
                    We have 35+ years of experience. We offer marketing and
                    consulting services
                  </p>
                </div>
                <div>
                  <div className="progressbar-container relative">
                    <div className="progress-bar bg-lightGray h-4 rounded-lg after:absolute after:block after:bg-lightBlue after:top-[0] after:right-[16%] after:bottom-0 after:left-0 after:rounded-lg"></div>
                  </div>
                  <div className="flex items-center justify-between w-[80%]">
                    <h4 className="font-bold uppercase mt-2">consulting</h4>
                    <span className="block text-gray font-normal">88%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="progressbar-container relative">
                    <div className="progress-bar bg-lightGray h-4 rounded-lg after:absolute after:block after:bg-lightBlue after:top-[0] after:right-[38%] after:bottom-0 after:left-0 after:rounded-lg"></div>
                  </div>
                  <div className="flex items-center justify-between w-[60%]">
                    <h4 className="font-bold uppercase mt-2">advices</h4>
                    <span className="block text-gray font-normal">68%</span>
                  </div>
                </div>
                <div className="enquiries flex items-center gap-4 mt-8">
                  <div className="w-[70px] aspect-square bg-[#EBF1FF] flex justify-center items-center">
                    <BiPhoneCall className="text-lightBlue text-4xl" />
                  </div>
                  <div>
                    <p className="text-[#726F84]">
                      Have any question? Give us a call{' '}
                      <span className="block font-medium text-[#0F0D1D] ">
                        +92 666 888 0000
                      </span>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block h-[178px]">
              <img src={avionImg} alt="avion img" />
            </div>
          </div>
          <div className="professional flex flex-col text-left md:flex-row translate-y-2">
            <div className=" flex items-center bg-white gap-4 mt-8 shadow-2xl p-[30px] md:p-[60px] lg:p-[90px]">
              <div className="w-[70px] p-6 aspect-square bg-lightGray flex justify-center items-center text-lightBlue text-xl font-bold">
                01
              </div>
              <div>
                <div>
                  <h4 className="uppercase font-bold pb-[20px]">
                    get professional advice
                  </h4>
                  <p className="max-w-[50ch] text-[#726F84] font-medium">
                    There are many variations of available but the majority have
                    suffered alteration.
                  </p>{' '}
                </div>
              </div>
            </div>
            <div className=" flex items-center bg-white gap-4 mt-8 shadow-2xl p-[30px] md:p-[60px] lg:p-[90px]">
              <div className="w-[70px] p-6 aspect-square bg-lightGray flex justify-center items-center text-lightBlue text-xl font-bold">
                02
              </div>
              <div>
                <div>
                  <h4 className="uppercase font-bold pb-[20px]">
                    TRUSTED & PROFESSIONAL
                  </h4>
                  <p className="max-w-[50ch] text-[#726F84] font-medium">
                    There are many variations of available but the majority have
                    suffered alteration.
                  </p>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
