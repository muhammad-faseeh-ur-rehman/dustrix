import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import SectionTitle from '@/components/common/SectionTitle';
import { testimonials } from '@/data/testimonials';
import { Icon } from '@/utils/icons.jsx';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Client testimonials slider over a dark background.
 */
export default function TestimonialSection() {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <SectionTitle
          light
          subtitle="Testimonials"
          title="What Our Clients Say"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            className="pb-14"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="rounded-lg bg-white/5 p-8 text-center">
                  <Icon
                    name="FaQuoteLeft"
                    className="mx-auto text-4xl text-accent"
                  />
                  <p className="mt-6 text-lg italic text-white/80">
                    “{item.quote}”
                  </p>
                  <div className="mt-6 flex justify-center gap-1 text-accent">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Icon key={i} name="FaStar" />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <span className="text-sm text-accent">{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
