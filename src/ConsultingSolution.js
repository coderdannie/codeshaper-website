import img from './assets/brainstorming.svg';
import TabContents from './components/TabContents';
import Tabs from './components/Tabs';
import { data } from './utils/TabData';
const ConsultingSolution = () => {
  return (
    <section>
      <div className="bg-[#07122D] pb-12">
        <div className="wrapper py-[80px]">
          <div className="grid justify-center gap-6 sm:grid-cols-2  lg:grid-cols-4 text-center ">
            <div className="text-white px-4 flex flex-col justify-center  md:border-r-2 lg:border-gray">
              <div className="flex justify-center items-center mx-auto p-2 bg-black w-max">
                <img src={img} alt="brainstorming icon" />
              </div>
              <h6 className="font-bold text-lg lg:text-4xl">420</h6>
              <p className="uppercase text-sm pt-4">consulting solutions</p>
            </div>
            <div className="text-white px-4 flex flex-col justify-center lg:border-r-2 lg:border-gray">
              <div className="flex justify-center items-center mx-auto p-2 bg-black w-max">
                <img src={img} alt="brainstorming icon" />
              </div>
              <h6 className="font-bold text-lg lg:text-4xl">420</h6>
              <p className="uppercase text-sm pt-4">consulting solutions</p>
            </div>
            <div className="text-white px-4 flex flex-col justify-center md:border-r-2 lg:border-gray">
              <div className="flex justify-center items-center mx-auto p-2 bg-black w-max">
                <img src={img} alt="brainstorming icon" />
              </div>
              <h6 className="font-bold text-lg lg:text-4xl">420</h6>
              <p className="uppercase text-sm pt-4">consulting solutions</p>
            </div>
            <div className="text-white px-4 flex flex-col justify-center">
              <div className="flex justify-center items-center mx-auto p-2 bg-black w-max">
                <img src={img} alt="brainstorming icon" />
              </div>
              <h6 className="font-bold text-lg lg:text-4xl">420</h6>
              <p className="uppercase text-sm pt-4">consulting solutions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper py-[40px] tab-container">
        <Tabs />
        <TabContents />
      </div>
    </section>
  );
};
export default ConsultingSolution;
