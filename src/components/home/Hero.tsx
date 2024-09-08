import autoPlay from "embla-carousel-autoplay";
import {
  buttonVariants,
  Carousel,
  CarouselItem,
  CarouselSlides,
} from "keep-react";
import { Link } from "react-router-dom";
import Slide1 from "../../assets/slide/slide-1.jpg";
import Slide2 from "../../assets/slide/slide-2.jpg";
import Slide3 from "../../assets/slide/slide-3.jpg";
const Hero = () => {
  const slides = [
    {
      id: 1,
      src: Slide1,
    },
    {
      id: 2,
      src: Slide2,
    },
    {
      id: 3,
      src: Slide3,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:py-32 py-10">
      <div className="col-span-1">
        <div className="space-y-3">
          <h1 className="lg:text-heading-2 text-heading-4 font-bold">
            Discover Your Perfect Typing Experience
          </h1>
          <p className="text-body-3 font-medium text-metal-600">
            Unlock unparalleled precision and comfort with our expertly curated
            selection of mechanical keyboards. Whether you're a gamer, a writer,
            or a tech enthusiast, find the keyboard that matches your style and
            enhances your productivity.
          </p>
          <Link to="/products" className={buttonVariants({})}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className="col-span-1">
        <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
          <CarouselSlides>
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="h-96">
                <img
                  src={slide.src}
                  alt="slide"
                  className="h-full w-full rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselSlides>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
