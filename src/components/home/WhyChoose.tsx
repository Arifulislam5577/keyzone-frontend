import {
  TabContent,
  TabItem,
  TabList,
  Tabs,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";

import Slide1 from "../../assets/slide/slide-1.jpg";
import Slide2 from "../../assets/slide/slide-2.jpg";
import Slide3 from "../../assets/slide/slide-3.jpg";

const WhyChoose = () => {
  return (
    <div className="py-12">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-heading-5 font-semibold text-metal-900">
          Why Mechanical Keyboards?
        </h3>
        <p className="text-body-4 font-normal text-metal-600 mt-2">
          Discover the unparalleled benefits of mechanical keyboards, including
          enhanced typing experiences with tactile feedback.
        </p>
      </div>
      <Tabs
        defaultActive="Experience"
        className="max-w-6xl mx-auto my-10 bg-transparent p-0 rounded-none"
      >
        <TabList className="justify-center">
          <TabItem value="Experience">Experience</TabItem>
          <TabItem value="Durable">Durable</TabItem>
          <TabItem value="Response">Response</TabItem>
        </TabList>
        <TabContent value="Experience">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            <div className="col-span-1">
              <Timeline className="border-dashed">
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Experience
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Enhanced Typing Experience
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards offer a superior typing experience
                      with tactile feedback and audible clicks, making typing
                      more satisfying and efficient.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Durable
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Durability
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards are built to last, often outlasting
                      traditional membrane keyboards by millions of keystrokes.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Response
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Faster Response Time
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards provide faster and more accurate
                      keystrokes, which is essential for gaming and fast typing.
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className="col-span-1">
              <img
                src={Slide2}
                alt="slide"
                className="w-full h-full shrink-0 object-cover rounded-xl"
              />
            </div>
          </div>
        </TabContent>
        <TabContent value="Durable">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            <div className="col-span-1">
              <Timeline className="border-dashed">
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Durable
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Durability
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards are built to last, often outlasting
                      traditional membrane keyboards by millions of keystrokes.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Experience
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Enhanced Typing Experience
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards offer a superior typing experience
                      with tactile feedback and audible clicks, making typing
                      more satisfying and efficient.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Response
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Faster Response Time
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards provide faster and more accurate
                      keystrokes, which is essential for gaming and fast typing.
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className="col-span-1">
              <img
                src={Slide1}
                alt="slide"
                className="w-full h-full shrink-0 object-cover rounded-xl"
              />
            </div>
          </div>
        </TabContent>
        <TabContent value="Response">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            <div className="col-span-1">
              <Timeline className="border-dashed">
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Response
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Faster Response Time
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards provide faster and more accurate
                      keystrokes, which is essential for gaming and fast typing.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Durable
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Durability
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards are built to last, often outlasting
                      traditional membrane keyboards by millions of keystrokes.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelinePoint />
                  <TimelineContent>
                    <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
                      Experience
                    </p>
                    <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
                      Enhanced Typing Experience
                    </h1>
                    <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Mechanical keyboards offer a superior typing experience
                      with tactile feedback and audible clicks, making typing
                      more satisfying and efficient.
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className="col-span-1">
              <img
                src={Slide3}
                alt="slide"
                className="w-full h-full shrink-0 object-cover rounded-xl"
              />
            </div>
          </div>
        </TabContent>
      </Tabs>
    </div>
  );
};

export default WhyChoose;
