import { motion } from "framer-motion";
import { Button } from "keep-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center py-24">
      <motion.div
        initial={{ opacity: 0, y: "20px" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        className="text-center max-w-lg space-y-4"
      >
        <h1 className="text-heading-3 font-bold">About KeyZone</h1>
        <p className="text-metal-600 text-body-3">
          At KeyZone, we believe that a keyboard is more than just a tool—it's
          an extension of your personality, a gateway to your digital world, and
          a critical component of your daily productivity.
        </p>
        <Button>Learn More</Button>
      </motion.div>
    </div>
  );
};

export default Hero;
