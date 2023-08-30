import bitBucket from './assets/Icon awesome-bitbucket.svg';
import leadingImg from './assets/leading.jpg';
import playIcon from './assets/Icon awesome-play.png';

import { BiPhoneCall } from 'react-icons/bi';
import PartnersLogoSlide from './components/PartnersLogoSlide';

const Experience = () => {
  return (
    <>
      <section className="experience text-white bg-darkBlue text-center py-[80px]">
        <div className="wrapper">
          <h2 className="pb-2">REAL-WORLD EXPERIENCE</h2>
          <p className=" text-sm md:text-lg text-gray">
            The best business consulting firm you can count on!
          </p>
          <div className="cards grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] mb-[4.5rem]">
            <div className="card bg-black p-12 text-left flex justify-between">
              <div>
                <p className="pb-6">
                  WEALTH <br /> MANAGEMENT
                </p>
                <a className="text-sm text-gray " href="/">
                  READ MORE
                </a>
              </div>
              <div className=" self-end w-[60px]">
                <img src={bitBucket} alt="bitbucket icon" />
              </div>
            </div>
            <div className="card bg-black p-12 text-left flex justify-between">
              <div>
                <p className="pb-6">
                  WEALTH <br /> MANAGEMENT
                </p>
                <a className="text-sm text-gray " href="/">
                  READ MORE
                </a>
              </div>
              <div className=" self-end w-[60px]">
                <img
                  className="w-[100px]"
                  src={bitBucket}
                  alt="bitbucket icon"
                />
              </div>
            </div>
            <div className="card bg-black p-12 text-left flex justify-between">
              <div>
                <p className="pb-6">
                  WEALTH <br /> MANAGEMENT
                </p>
                <a className="text-sm text-gray " href="/">
                  READ MORE
                </a>
              </div>
              <div className=" self-end w-[60px]">
                <img
                  className="w-[100px]"
                  src={bitBucket}
                  alt="bitbucket icon"
                />
              </div>
            </div>
          </div>
          <div className="grid partners items-center ">
            <div className=" bg-gray h-[1px]"></div>
            <p className="uppercase ">meet the partners</p>
            <div className=" bg-gray h-[1px]"></div>
          </div>

          <PartnersLogoSlide />
        </div>
      </section>
      <section className=" mt-2 md:mt-6  relative text-center md:text-left ">
        <div className="wrapper translate-y-[6%] md:translate-y-[10%]">
          <div className="flex flex-col justify-between md:flex-row mb-6">
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
            <div className="md:w-[45%]">
              <div className="max-w-[50ch] mx-auto lg:mx-0">
                <h2 className="uppercase pt-10 md:p-0">
                  {' '}
                  we're leading in the market
                </h2>
                <p className="pb-6">
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
                <div className="w-[70px] aspect-square bg-lightGray flex justify-center items-center">
                  <BiPhoneCall className="text-lightBlue text-xl" />
                </div>
                <div>
                  <p>
                    Have any question? Give us a call{' '}
                    <span className="block font-bold">+92 666 888 0000</span>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="professional flex flex-col text-left md:flex-row translate-y-2">
            <div className=" flex items-center bg-white gap-4 mt-8 shadow-2xl p-10">
              <div className="w-[70px] aspect-square bg-lightGray flex justify-center items-center text-lightBlue text-xl font-bold">
                01
              </div>
              <div>
                <div>
                  <h4 className="uppercase font-bold pb-2">
                    get professional advice
                  </h4>
                  <p className="max-w-[50ch]">
                    There are many variations of available but the majority have
                    suffered alteration.
                  </p>{' '}
                </div>
              </div>
            </div>
            <div className=" flex items-center bg-white gap-4 mt-8 shadow-2xl p-10">
              <div className="w-[70px] aspect-square bg-lightGray flex justify-center items-center text-lightBlue text-xl font-bold">
                02
              </div>
              <div>
                <div>
                  <h4 className="uppercase font-bold pb-2">
                    trusted & professional
                  </h4>
                  <p className="max-w-[50ch]">
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
