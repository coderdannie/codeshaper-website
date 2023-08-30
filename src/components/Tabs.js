import { useGlobalContext } from '../context';

const Tabs = () => {
  const { tabContent, currentItem, setCurrentItem } = useGlobalContext();
  return (
    <div
      className="tab-list flex flex-col md:flex-row gap-2 justify-center"
      aria-label="list"
    >
      {tabContent.map((_, index) => {
        return (
          <button
            key={index}
            className="tab-btn py-8  px-10 md:py-10 md:px-12 uppercase shadow-md font-semibold text-black text-lg bg-lightGray"
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
