import { useState } from 'react';
import SingleQuestion from './components/SingleQuestion';
import { questions } from './utils/questions';
import { GiCheckMark } from 'react-icons/gi';
import img from './assets/Best-Question-and-Answer-Sites.jpg';
const Questions = () => {
  return (
    <section>
      <div className="wrapper py-[80] md:py-[100px]">
        <div className="question-text text-center">
          <h2 className="uppercase">Question Answers</h2>
          <p className="text-gray text-lg font-bold">
            We help our clients renew their business
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="grid gap-4 ">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </div>
          <div>
            <div className="h-[283px] overflow-hidden mb-6">
              <img src={img} alt="Best-Question-and-Answer image" />
            </div>
            <div className="flex justify-between flex-wrap items-center  md:text-lg">
              <div className="text-gray mb-6">
                <div className="flex items-center pb-2 text-lg">
                  <GiCheckMark className="text-lightBlue pr-2 text-2xl font-bold" />
                  <p>Nsectetur cing elit.</p>
                </div>
                <div className="flex items-center pb-2">
                  <GiCheckMark className="text-lightBlue pr-2 text-2xl font-bold" />
                  <p>Suspe ndisse suscipit sagittis leo.</p>
                </div>
                <div className="flex items-center pb-2">
                  <GiCheckMark className="text-lightBlue pr-2 text-2xl font-bold" />
                  <p>Entum estibulum dignissim posuere.</p>
                </div>
                <div className="flex items-center pb-2">
                  <GiCheckMark className="text-lightBlue pr-2 text-2xl font-bold" />
                  <p>If you are going to use a passage.</p>
                </div>
                <div className="flex items-center pb-2">
                  <GiCheckMark className="text-lightBlue pr-2 text-2xl font-bold" />
                  <p>If you are going to use a passage test data.</p>
                </div>
              </div>
              <div className="text-white bg-lightBlue max-w-[224px] aspect-square text-center flex justify-center items-center px-6">
                <p className="capitalize font-bold text-base">
                  <span className="block font-bold text-4xl">30</span> years of{' '}
                  <br />
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Questions;
