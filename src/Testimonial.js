import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useGlobalContext } from './context';
import { testimonials } from './utils/testimonial';
import TestimonialContent from './components/TestimonialContent';
const Testimonial = () => {
  const {
    currentTestimonialIndex,
    testimonialsPerSlide,
    prevSlide,
    nextSlide,
  } = useGlobalContext();

  return (
    <section className="about bg-[#F2F4F8] ">
      <div className="wrapper py-[20px] md:pb-[60px] pb-[150px] lg:py-[80px] ">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-[40%]">
            <div className="about-text">
              <h3 className="pb-4 text-[1.6rem] md:text-[3rem]  lg:text-[4.0625rem] font-bold leading-tight">
                WHAT THEY ARE TALKING ABOUT?
              </h3>
              <p className="text-[#726F84] pb-4 text-lg font-medium">
                Trusted by more than 4,200 customers
              </p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="prev rounded-[50%] w-10 aspect-square hover:bg-lightBlue transition-colors duration-300 bg-white hover:bg-blue grid items-center  justify-center"
                onClick={prevSlide}
              >
                <AiOutlineArrowLeft className="text-lg" />
              </button>
              <button
                type="button"
                className="prev rounded-[50%] w-10 aspect-square bg-white hover:bg-lightBlue hover:bg-blue transition-colors duration-300 grid items-center  justify-center"
                onClick={nextSlide}
              >
                <AiOutlineArrowRight className="text-lg" />
              </button>
            </div>
          </div>
          <div className="carousel  overflow-hidden  relative grid md:grid-cols-2 gap-6 md:w-[70%]">
            {testimonials
              .slice(
                currentTestimonialIndex,
                currentTestimonialIndex + testimonialsPerSlide
              )
              .map((testimonial, index) => {
                return <TestimonialContent key={index} {...testimonial} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
