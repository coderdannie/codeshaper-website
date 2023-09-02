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
          <span className="block text-lightBlue font-bold text-lg pr-4">
            {id}.
          </span>{' '}
          <h5 className="text-left uppercase font-bold text-[#0F0D1D]">
            {title}
          </h5>
        </div>
        <button
          aria-expanded={showInfo}
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <AiOutlineMinus className="text-[#707070]" />
          ) : (
            <AiOutlinePlus className="text-lightBlue" />
          )}
        </button>
      </div>
      {showInfo && (
        <p className="font-medium pr-2 pt-2 md:pr-6 text-[#726F84] text-base">
          {info}
        </p>
      )}
    </article>
  );
};
export default SingleQuestion;
