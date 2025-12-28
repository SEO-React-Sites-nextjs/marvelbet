"use client";

import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BannerInterface {
  bannerImage: string;
  title: string;
  path: string;
}
const bannersHome: BannerInterface[] = [
  {
    bannerImage: "/page1/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/",
  },
  {
    bannerImage: "/page1/page-slide2.png",
    title: "CRICKET GAMES",
    path: "/",
  },
  {
    bannerImage: "/page1/page-slide3.png",
    title: "OFFER 100% BONUS",
    path: "/",
  },
  {
    bannerImage: "/page1/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/",
  },
  {
    bannerImage: "/page1/page-slide2.png",
    title: "CRICKET GAMES",
    path: "/",
  },
  {
    bannerImage: "/page1/page-slide3.png",
    title: "OFFER 100% BONUS",
    path: "/",
  },
];
const bannersPage2: BannerInterface[] = [
  {
    bannerImage: "/page2/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/login",
  },
  {
    bannerImage: "/page2/page-slide2.png",
    title: "SPORTS BONUS",
    path: "/login",
  },
  {
    bannerImage: "/page2/page-slide3.png",
    title: "SLOT & FISHING BONUS",
    path: "/login",
  },
  {
    bannerImage: "/page2/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/login",
  },
  {
    bannerImage: "/page2/page-slide2.png",
    title: "SPORTS BONUS",
    path: "/login",
  },
  {
    bannerImage: "/page2/page-slide3.png",
    title: "SLOT & FISHING BONUS",
    path: "/login",
  },
];
const bannerPage3: BannerInterface[] = [
  {
    bannerImage: "/page3/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/payment",
  },
  {
    bannerImage: "/page3/page-slide2.png",
    title: "SPORTS BONUS",
    path: "/payment",
  },
  {
    bannerImage: "/page3/page-slide3.png",
    title: "SLOT & FISHING BONUS",
    path: "/payment",
  },
  {
    bannerImage: "/page3/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/payment",
  },
  {
    bannerImage: "/page3/page-slide2.png",
    title: "SPORTS BONUS",
    path: "/payment",
  },
  {
    bannerImage: "/page3/page-slide3.png",
    title: "SLOT & FISHING BONUS",
    path: "/payment",
  },
];
const bannerPage4: BannerInterface[] = [
  {
    bannerImage: "/page4/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/mobile",
  },
  {
    bannerImage: "/page4/page-slide2.png",
    title: "SPORTS BONUS",
    path: "/mobile",
  },
  {
    bannerImage: "/page4/page-slide3.png",
    title: "SLOT & FISHING BONUS",
    path: "/mobile",
  },
  {
    bannerImage: "/page4/page-slide.png",
    title: "SLOT & FISHING BONUS",
    path: "/mobile",
  },
  {
    bannerImage: "/page4/page-slide2.png",
    title: "SPORTS BONUS",
    path: "/mobile",
  },
  {
    bannerImage: "/page4/page-slide3.png",
    title: "SLOT & FISHING BONUS",
    path: "/mobile",
  },
];
const bannerPage5: BannerInterface[] = [
  {
    bannerImage: "/page5/page-slide.png",
    title: "VIP POINTS",
    path: "/registration",
  },
  {
    bannerImage: "/page5/page-slide2.png",
    title: "50% BONUS",
    path: "/registration",
  },
  {
    bannerImage: "/page5/page-slide3.png",
    title: "DAILY GIFT",
    path: "/registration",
  },
  {
    bannerImage: "/page5/page-slide.png",
    title: "VIP POINTS",
    path: "/registration",
  },
  {
    bannerImage: "/page5/page-slide2.png",
    title: "50% BONUS",
    path: "/registration",
  },
  {
    bannerImage: "/page5/page-slide3.png",
    title: "DAILY GIFT",
    path: "/registration",
  },
];
const bannerPage6: BannerInterface[] = [
  {
    bannerImage: "/page6/page-slide.png",
    title: "VIP POINTS",
    path: "/bonuses",
  },
  {
    bannerImage: "/page6/page-slide2.png",
    title: "50% BONUS",
    path: "/bonuses",
  },
  {
    bannerImage: "/page6/page-slide3.png",
    title: "DAILY GIFT",
    path: "/bonuses",
  },
  {
    bannerImage: "/page6/page-slide.png",
    title: "VIP POINTS",
    path: "/bonuses",
  },
  {
    bannerImage: "/page6/page-slide2.png",
    title: "50% BONUS",
    path: "/bonuses",
  },
  {
    bannerImage: "/page6/page-slide3.png",
    title: "DAILY GIFT",
    path: "/bonuses",
  },
];
const bannerPage7: BannerInterface[] = [
  {
    bannerImage: "/page7/page-slide.png",
    title: "VIP POINTS",
    path: "/faqs",
  },
  {
    bannerImage: "/page7/page-slide2.png",
    title: "50% BONUS",
    path: "/faqs",
  },
  {
    bannerImage: "/page7/page-slide3.png",
    title: "DAILY GIFT",
    path: "/faqs",
  },
  {
    bannerImage: "/page7/page-slide.png",
    title: "VIP POINTS",
    path: "/faqs",
  },
  {
    bannerImage: "/page7/page-slide2.png",
    title: "50% BONUS",
    path: "/faqs",
  },
  {
    bannerImage: "/page7/page-slide3.png",
    title: "DAILY GIFT",
    path: "/faqs",
  },
];
function getBannersByPath(pathname: string): BannerInterface[] {
  if (pathname.startsWith("/login")) return bannersPage2;
  if (pathname.startsWith("/payment")) return bannerPage3;
  if (pathname.startsWith("/mobile")) return bannerPage4;
  if (pathname.startsWith("/registration")) return bannerPage5;
  if (pathname.startsWith("/bonuses")) return bannerPage6;
  if (pathname.startsWith("/faqs")) return bannerPage7;
  return bannersHome;
}

export default function Banner() {
  const pathname = usePathname();
  const bannersToShow = getBannersByPath(pathname);
  return (
    <section className="page-swiper">
      <div className="container">
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {bannersToShow.map(({ bannerImage, title, path }, index) => (
            <SwiperSlide key={index}>
              <img src={bannerImage} alt={title} className="banner-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
