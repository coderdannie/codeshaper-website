const TestimonialContent = (testimonial) => {
  const { name, text, title } = testimonial;
  return (
    <div className="testimonial text-[#726F84] bg-white pt-[45px] pb-[40px] px-[40px] font-medium">
      <p>{text}</p>
      <h5 className="uppercase font-semibold text-lightBlue pt-[22px]">
        {name}
      </h5>
      <p className="pt-[2px] font-medium">{title}</p>
    </div>
  );
};
export default TestimonialContent;
