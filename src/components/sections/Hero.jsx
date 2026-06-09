import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@/components/common/Button';
import { Icon } from '@/utils/icons.jsx';
import { heroSlides } from '@/data/images';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: heroSlides[0],
    subtitle: 'Welcome To Dustrix Industry',
    title: 'We Provide Industrial & Construction Solutions',
    text: 'Reliable engineering services delivered by certified experts and modern equipment — built to last.',
  },
  {
    image: heroSlides[1],
    subtitle: 'The Most Successful Contractor',
    title: 'Building Excellence For A Better Future',
    text: 'From factories to high-rise towers, we turn complex challenges into safe, durable structures.',
  },
  {
    image: heroSlides[2],
    subtitle: 'Trusted Since 1998',
    title: 'Engineering Excellence In Every Project',
    text: 'A safety-first culture and decades of experience behind every project we deliver.',
  },
];

/**
 * Full-width home hero slider built on Swiper with a fading background and
 * animated content.
 */
export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        className="h-[600px] md:h-[720px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex h-full items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-hero-overlay" />
              <div className="container relative z-10">
                <div className="max-w-2xl">
                  <span className="subtitle text-accent">
                    <span className="h-px w-8 bg-accent" />
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl font-bold leading-tight text-white text-shadow md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-xl text-lg text-white/80">
                    {slide.text}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button to="/contact">Get A Quote</Button>
                    <Button to="/services" variant="light" icon="FaPlay">
                      Our Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <button
        className="hero-prev absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur transition-colors hover:bg-accent lg:flex"
        aria-label="Previous slide"
      >
        <Icon name="FaArrowRight" className="rotate-180" />
      </button>
      <button
        className="hero-next absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur transition-colors hover:bg-accent lg:flex"
        aria-label="Next slide"
      >
        <Icon name="FaArrowRight" />
      </button>
    </section>
  );
}
