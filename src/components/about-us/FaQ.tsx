import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-react";

const FaQ = () => {
  return (
    <div className="py-24">
      <div className="space-y-4 mb-20">
        <h4 className="text-heading-5 font-bold">Frequently Asked Questions</h4>
        <p className="text-metal-600 text-body-3 max-w-xl">
          At KeyZone, we believe that a keyboard is more than just a tool—it's
          an extension of your personality, a gateway to your digital world, and
          a critical component of your daily productivity.
        </p>
      </div>
      <div className="border">
        <Accordion flush={true}>
          <AccordionPanel>
            <AccordionContainer>
              <AccordionTitle>
                Q. What types of keyboards does KeyZone offer?
              </AccordionTitle>
              <AccordionIcon />
            </AccordionContainer>
            <AccordionContent>
              KeyZone offers a diverse range of keyboards to cater to different
              needs and preferences. Our product line includes mechanical
              keyboards, gaming keyboards, wireless keyboards, and ergonomic
              keyboards. Each type is designed with specific features to enhance
              your typing, gaming, or work experience.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionContainer>
              <AccordionTitle>
                Q. How do I choose the right mechanical switch for my keyboard?
              </AccordionTitle>
              <AccordionIcon />
            </AccordionContainer>
            <AccordionContent>
              Choosing the right mechanical switch depends on your typing style
              and preferences. KeyZone offers keyboards with various switch
              types, including linear, tactile, and clicky switches. Linear
              switches provide smooth keystrokes, tactile switches offer a bump
              at the actuation point, and clicky switches produce an audible
              click. Visit our Switch Guide for detailed information on each
              type to help you make an informed decision.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionContainer>
              <AccordionTitle>
                Q. What is the warranty on KeyZone keyboards?
              </AccordionTitle>
              <AccordionIcon />
            </AccordionContainer>
            <AccordionContent>
              All KeyZone keyboards come with a standard one-year warranty that
              covers manufacturing defects. We are committed to providing
              high-quality products and excellent customer service. If you
              encounter any issues with your keyboard, please contact our
              support team for assistance. Extended warranty options may also be
              available at the time of purchase.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionContainer>
              <AccordionTitle>
                Q. Can I customize the RGB lighting on my KeyZone keyboard?
              </AccordionTitle>
              <AccordionIcon />
            </AccordionContainer>
            <AccordionContent>
              Yes, many of our keyboards feature customizable RGB lighting. You
              can use our dedicated software to adjust the lighting effects,
              colors, and brightness to match your personal style or gaming
              setup. Detailed instructions and the software download link are
              available on our Support Page.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionContainer>
              <AccordionTitle>
                Q. Does KeyZone offer international shipping?
              </AccordionTitle>
              <AccordionIcon />
            </AccordionContainer>
            <AccordionContent>
              Yes, KeyZone ships products internationally. Shipping costs and
              delivery times may vary depending on your location. Please visit
              our Shipping Information page for details on available shipping
              options, estimated delivery times, and any potential customs fees.
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  );
};

export default FaQ;
