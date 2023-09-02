import heroImg from '../assets/undraw_programming_re_kg9v (1).svg';
const Hero = () => {
  return (
    <div className="hero wrapper grid gap-6 md:gap-8 md:grid-cols-2 items-center place-items-center text-center md:text-left">
      <div className="hero-text  mt-6  ">
        <p className="hero-heading font-medium inline px-[22px] py-3 lg:text-xl uppercase ">
          Welcome to Codeshaper
        </p>
        <h1 className="mt-8 lg:max-w-[10ch]">Consulting For Every Business</h1>
        <a
          href="/"
          className="text-lg font-bold px-4 py-3 lg:px-11 md:py-6 uppercase bg-lightBlue mt-6 lg:mt-10 inline-block"
        >
          Discover More
        </a>
      </div>
      <div className="hero-img md:w-full">
        <img src={heroImg} alt="illustration" />
      </div>
    </div>
  );
};
export default Hero;
