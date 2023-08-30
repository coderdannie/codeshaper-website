import { useState, createContext, useContext } from 'react';
import { data } from './utils/TabData';
import { testimonials } from './utils/testimonial';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tabContent, setTabContent] = useState(data);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
  const testimonialsPerSlide = 2; // Number of testimonials per slide

  const prevSlide = () => {
    setCurrentTestimonialIndex((prev) =>
      Math.max(0, prev - testimonialsPerSlide)
    );
  };
  const nextSlide = () => {
    setCurrentTestimonialIndex((prev) =>
      Math.min(
        testimonials.length - testimonialsPerSlide,
        prev + testimonialsPerSlide
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        tabContent,
        currentItem,
        setCurrentItem,
        isOpen,
        setIsOpen,
        currentTestimonialIndex,
        testimonialsPerSlide,
        prevSlide,
        nextSlide,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
