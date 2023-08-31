import heroImg from '../assets/undraw_programming_re_kg9v (1).svg';
const Hero = () => {
  return (
    <div className="hero wrapper grid gap-6 md:gap-8 md:grid-cols-2 items-center place-items-center text-center md:text-left">
      <div className="hero-text  mt-6  ">
        <p className="hero-heading bg-[#434B4D] inline px-2 py-1 lg:text-xl uppercase ">
          Welcome to Codeshaper
        </p>
        <h1 className="mt-8">Consulting For Every Business</h1>
        <a href="/" className="px-4 py-2 bg-lightBlue mt-4 inline-block">
          Discover More
        </a>
      </div>
      <div className="hero-img w-[70%] md:w-full">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};
export default Hero;
