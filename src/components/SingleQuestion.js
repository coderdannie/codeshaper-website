import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ title, info, id }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article
      className={
        showInfo
          ? 'accordion grid items-center bg-white shadow-xl font-semibold px-6 py-6'
          : 'accordion  grid items-center bg-[#F2F4F8] font-semibold px-6 py-4'
      }
    >
      <div className="accordion-question flex justify-between">
        <div className=" flex ">
          <span className="block text-lightBlue pr-4">{id}.</span>{' '}
          <h5 className="text-left uppercase">{title}</h5>
        </div>
        <button
          aria-expanded={showInfo}
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <AiOutlineMinus className="text-lightBlue" />
          ) : (
            <AiOutlinePlus className="text-lightBlue" />
          )}
        </button>
      </div>
      {showInfo && (
        <p className="font-normal pt-2 text-sm md:text-base">{info}</p>
      )}
    </article>
  );
};
export default SingleQuestion;
