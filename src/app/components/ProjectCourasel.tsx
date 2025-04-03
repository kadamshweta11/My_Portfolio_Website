'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectCard from './card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsCarousel({ projects }: { projects: any[] }) {
  return (
    <div className="w-full max-w-7xl mx-auto relative px-12"> {/* Increased max-width and added padding */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="py-4"> {/* Added vertical padding */}
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows - Positioned Outside */}
      <button 
        className="swiper-button-prev absolute left-[-40px] top-1/2 z-10 -translate-y-1/2 bg-black text-white p-3   transition-all shadow-lg"
        aria-label="Previous projects"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        className="swiper-button-next absolute right-[-40px] top-1/2 z-10 -translate-y-1/2 bg-black text-white p-3   transition-all shadow-lg"
        aria-label="Next projects"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}