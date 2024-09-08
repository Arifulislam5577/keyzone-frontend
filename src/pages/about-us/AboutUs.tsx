import FaQ from "../../components/about-us/FaQ";
import Hero from "../../components/about-us/Hero";
import Mission from "../../components/about-us/Mission";
import Vision from "../../components/about-us/Vision";

const AboutUs = () => {
  return (
    <section>
      <div className="container py-12">
        <Hero />
        <Mission />
        <Vision />
        <FaQ />
      </div>
    </section>
  );
};

export default AboutUs;
