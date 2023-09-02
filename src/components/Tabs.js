import { useGlobalContext } from '../context';

const Tabs = () => {
  const { tabContent, currentItem, setCurrentItem } = useGlobalContext();
  return (
    <div
      className="tab-list flex flex-col md:flex-row  justify-center"
      aria-label="list"
    >
      {tabContent.map((_, index) => {
        return (
          <button
            key={index}
            className={`${
              currentItem === index
                ? 'tab-btn py-8  px-10 md:py-10 md:px-[60px] lg:py-[72px] lg:px-[100px] uppercase shadow-md font-semibold text-lightBlue text-xl bg-[#F2F4F8]'
                : 'tab-btn py-8  px-10 md:py-10 md:px-[60px] lg:py-[72px] lg:px-[100px] uppercase shadow-md font-semibold text-black text-xl bg-[#F2F4F8]'
            }`}
            type="button"
            aria-selected={currentItem === index ? 'true' : 'false'}
            role="tab"
            onClick={() => setCurrentItem(index)}
          >
            business growth
          </button>
        );
      })}
    </div>
  );
};
export default Tabs;
