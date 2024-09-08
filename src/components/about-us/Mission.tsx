import { motion } from "framer-motion";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";
import Slide1 from "../../assets/slide/slide-1.jpg";

const Mission = () => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
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
          <img src={Slide1} alt="keyboard" className="rounded-xl" />
        </motion.div>
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
            <h2 className="text-heading-5 font-bold">Our Mission</h2>
            <p className="text-metal-600 text-body-3">
              Our mission is to enhance your typing experience by offering a
              diverse range of keyboards that combine cutting-edge technology
              with ergonomic design. We aim to provide our customers with
              products that not only meet but exceed their expectations in terms
              of functionality, durability, and style.
            </p>
            <Timeline>
              <TimelineItem>
                <TimelinePoint className="bg-gradient-20" />
                <TimelineContent>
                  <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                    September 23,2022
                  </p>
                  <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                    Mechanical Keyboards
                  </h1>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Experience the satisfying tactile feedback and durability of
                    our mechanical keyboards, available in various switch types
                    to match your typing style.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelinePoint className="bg-gradient-20" />
                <TimelineContent>
                  <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                    September 23,2022
                  </p>
                  <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                    Gaming Keyboards
                  </h1>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Elevate your gaming setup with our high-performance gaming
                    keyboards, featuring fast response times, customizable
                    macros, and vibrant RGB lighting.
                  </p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
