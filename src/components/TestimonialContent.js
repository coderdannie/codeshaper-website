const TestimonialContent = (testimonial) => {
  const { name, text, title } = testimonial;
  return (
    <div className="testimonial text-gray bg-white pt-4 pb-8 px-6">
      <p>{text}</p>
      <h5 className="uppercase font-semibold text-lightBlue pt-4">{name}</h5>
      <p>{title}</p>
    </div>
  );
};
export default TestimonialContent;
