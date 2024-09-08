import Advertisement from "../../components/home/Advertisement";
import FeaturedBrand from "../../components/home/FeaturedBrand";
import FeaturedProduct from "../../components/home/FeaturedProduct";
import Hero from "../../components/home/Hero";
import UserReview from "../../components/home/UserReview";
import WhyChoose from "../../components/home/WhyChoose";

const Home = () => {
  return (
    <section>
      <div className="container py-10">
        <Hero />
        <Advertisement />
        <FeaturedProduct />
        <FeaturedBrand />
        <WhyChoose />
        <UserReview />
      </div>
    </section>
  );
};

export default Home;
