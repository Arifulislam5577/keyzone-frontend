import { motion } from "framer-motion";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";
import Slide2 from "../../assets/slide/slide-2.jpg";

const Vision = () => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              delay: 0.6,
            },
          }}
          className="lg:col-span-1 w-full  flex flex-col items-center justify-center"
        >
          <div className="space-y-4">
            <h2 className="text-heading-5 font-bold">Our Vision</h2>
            <p className="text-metal-600 text-body-3">
              Founded with a passion for innovation and a commitment to quality,
              KeyZone has grown into a leading provider of high-performance
              keyboards that cater to the needs of professionals, gamers, and
              enthusiasts alike.
            </p>
            <Timeline>
              <TimelineItem>
                <TimelinePoint className="bg-gradient-21" />
                <TimelineContent>
                  <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                    April 23,2025
                  </p>
                  <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                    Wireless Keyboards
                  </h1>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Enjoy the convenience and flexibility of our wireless
                    keyboards, designed for seamless connectivity and extended
                    battery life.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelinePoint className="bg-gradient-21" />
                <TimelineContent>
                  <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                    March 19,2024
                  </p>
                  <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                    Ergonomic Keyboards:
                  </h1>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Reduce strain and improve comfort with our ergonomically
                    designed keyboards, perfect for long hours of typing.
                  </p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              delay: 0.4,
            },
          }}
          className="lg:col-span-1 w-full"
        >
          <img src={Slide2} alt="keyboard" className="rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
