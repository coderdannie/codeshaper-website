import { BsDashLg } from 'react-icons/bs';
import { useGlobalContext } from '../context';
import icon from '../assets/Icon feather-check-circle.svg';
const TabContents = () => {
  const { tabContent, currentItem } = useGlobalContext();
  const { title, text, paragraph, list } = tabContent[currentItem];

  return (
    <article className="pt-12">
      <div className="tab-contents grid  gap-4 md:grid-cols-3">
        <div className="border-lightGray pb-4 pr-4 border-b-2 md:border-b-0 md:border-r-2 ">
          <div className="flex gap-4">
            <div className=" bg-lightGray flex items-center px-2">
              <img src={icon} alt="feater-check-circle" />
            </div>

            <div>
              <h3 className="uppercase font-semibold pb-2">{title}</h3>
              <p className="text-gray">{text}</p>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <div className=" bg-lightGray flex items-center px-2">
              <img src={icon} alt="feater-check-circle" />
            </div>

            <div>
              <h3 className="uppercase font-semibold">{title}</h3>
              <p className="text-gray">{text}</p>
            </div>
          </div>
        </div>
        <div className="border-lightGray pb-4  px-6 border-b-2 md:border-b-0 md:border-r-2 text-gray">
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
        <div className="border-lightGray pb-4  px-6 border-b-2 md:border-b-0  text-gray">
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
