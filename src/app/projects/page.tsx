"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Project from '@/components/Project';
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  return(
    <main className="md:mx-10">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-2xl font-bold m-4">Mes projets</h1>
        <div className="w-full flex justify-center">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full "
          >
            {projectsData.map((project) => {
                return (
                  <SwiperSlide key={project.id}>
                    <div className="flex justify-center items-center h-full">
                      <Project  title={project.title} description={project.description} stacks={project.stack}  variant={"large"} showStacks={true}/>
                    </div>
                  </SwiperSlide>
                )
            })}
          
        </Swiper>
        </div>
        <a href="/contact" className="border-solid border-2 p-3 m-2 rounded-full hover:bg-[var(--main-text)] hover:text-[var(--bg-box)] duration-300 ease-in">Contactez-moi pour plus d'informations</a>
      </div>
    </main>
  );
}