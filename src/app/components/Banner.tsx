"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import BreadCrumbs from "./BreadCrumbs";
import Link from "next/link";
interface BannerInterface {
  bannerImage: string;
  mobileBannerImage: string;
  title: string;
  path: string;
}

const bannersHome: BannerInterface[] = [
  {
    bannerImage: "/page1/page-banner.png",
    mobileBannerImage: "/page1/page-banner-m.png",
    title: "TOP LIVE CASINO BANGLADESH",
    path: "",
  },
];

function getBannersByPath(pathname: string): BannerInterface[] {
  return bannersHome;
}

export default function Banner() {
  const pathname = usePathname();
  const hideBannerPaths = [
    "/login",
    "/payment",
    "/mobile",
    "/registration",
    "/bonuses",
    "/faqs",
  ];
  const shouldHideBanner = hideBannerPaths.includes(pathname);
  const showBreadcrumbs = pathname !== "/";

  const bannersToShow = getBannersByPath(pathname);
  return (
    <>
      {!shouldHideBanner && (
        <section className="banner">
          <Swiper
            loop={true}
            navigation={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {bannersToShow.map(
              ({ bannerImage, mobileBannerImage, title, path }) => (
                <SwiperSlide key={title}>
                  <Link href={path || pathname}>
                    <div className="overlay" />
                    <picture>
                      <source
                        srcSet={mobileBannerImage}
                        media="(max-width: 767px)"
                      />
                      <img
                        src={bannerImage}
                        alt={title}
                        className="banner-img"
                      />
                    </picture>
                  </Link>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </section>
      )}
      {showBreadcrumbs && <BreadCrumbs />}
    </>
  );
}
