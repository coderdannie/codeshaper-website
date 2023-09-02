import { BsDashLg } from 'react-icons/bs';
import { useGlobalContext } from '../context';
import icon from '../assets/Icon feather-check-circle.svg';
const TabContents = () => {
  const { tabContent, currentItem } = useGlobalContext();
  const { title, text, paragraph, list } = tabContent[currentItem];

  return (
    <article className=" pt-[50px] md:pt-[70px]">
      <div className="tab-contents grid  gap-4 md:grid-cols-3">
        <div className="border-lightGray pb-4 pr-4 border-b-2 md:border-b-0 md:border-r-2 ">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}
            className="gap-5 mb-[38px]"
          >
            <div className=" bg-[#EBF1FF] h-[70px] w-[70px] p-5 flex items-center ">
              <img src={icon} alt="feater-check-circle" />
            </div>

            <div>
              <h3 className="uppercase font-semibold pb-2 text-base md:text-xl">
                {title}
              </h3>
              <p className="text-[#726F84] font-medium">{text}</p>
            </div>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}
            className="gap-5"
          >
            <div className=" bg-[#EBF1FF] h-[70px] w-[70px] p-5 flex items-center ">
              <img src={icon} alt="feater-check-circle" />
            </div>
            <div>
              <h3 className="uppercase font-semibold text-base md:text-xl">
                {title}
              </h3>
              <p className="text-[#726F84] font-medium">{text}</p>
            </div>
          </div>
        </div>
        <div className="border-lightGray pb-4  px-6 border-b-2 md:border-b-0 md:border-r-2 text-[#726F84] font-medium">
          <div className="flex flex-col gap-4">
            {paragraph}
            <div>
              <div className="pt-6">
                {list.map((list, index) => {
                  return (
                    <p key={index}>
                      <BsDashLg className="text-lightBlue text-2xl inline pr-2" />
                      {list}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="border-lightGray pb-4  px-6 border-b-2 md:border-b-0  text-[#726F84] font-medium">
          <div className="flex flex-col gap-4">
            {paragraph}
            <div>
              <div className="pt-6">
                {list.map((list, index) => {
                  return (
                    <p key={index}>
                      <BsDashLg className="text-lightBlue text-2xl inline pr-2" />
                      {list}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default TabContents;
