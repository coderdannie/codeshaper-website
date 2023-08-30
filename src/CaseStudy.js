import carIcon from './assets/Icon metro-automobile.png';
const CaseStudy = () => {
  return (
    <section className="case-study bg-lightGray ">
      <div className="wrapper py-[100px]  md:mt-0">
        <div className="case-study-text pt-[80px]">
          <h2 className="uppercase text-center pb-2">new case studies</h2>
          <p className="text-gray text-center text-sm md:text-base">
            We help our clients renew their business
          </p>
        </div>
        <div className="cards grid gap-6 mt-8 lg:mt-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="card h-[270px] bg-gray uppercase text-white px-8 py-8 grid items-end ">
            <div>
              <img src={carIcon} alt="metro-automobile" />
              <p className="text-sm">thought leadership</p>
              <h6 className="font-bold">Business growth</h6>
            </div>
          </div>
          <div className="card h-[270px] bg-gray uppercase text-white px-8 py-8 grid items-end ">
            <div>
              <img src={carIcon} alt="metro-automobile" />
              <p className="text-sm">thought leadership</p>
              <h6 className="font-bold">Business growth</h6>
            </div>
          </div>
          <div className="card h-[270px] bg-gray uppercase text-white pr-8 grid items-end ">
            <div className="bg-lightBlue pl-8 py-8">
              <img src={carIcon} alt="metro-automobile" />
              <p className="text-sm">thought leadership</p>
              <h6 className="font-bold">Business growth</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudy;
