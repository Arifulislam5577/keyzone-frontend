import {
  Button,
  Divider,
  Input,
  InputIcon,
  Label,
  Modal,
  ModalAction,
  ModalContent,
  Textarea,
} from "keep-react";

import { motion } from "framer-motion";

import { Envelope } from "phosphor-react";

const Contact = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: "60px" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        className="container py-24"
      >
        <div className="md:max-w-4xl w-full mx-auto md:bg-white p-10 rounded-xl">
          <div>
            <h1 className="lg:text-heading-3 text-heading-6 font-bold mb-4">
              We’re Here to Help
            </h1>
            <p className="text-body-4 text-metal-600 font-normal mb-4">
              At KeyZone, we value our customers and are committed to providing
              exceptional support. Whether you have a question about our
              products, need assistance with an order, or want to share
              feedback, our team is here to assist you. Please use the contact
              information below or fill out the contact form to get in touch
              with us.
            </p>
          </div>
          <div>
            <p className="text-metal-900 font-semibold">Customer Support</p>
            <Divider />
            <ul className="py-3 text-metal-4 font-normal text-metal-600">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: support@keyzone.com</li>
            </ul>
          </div>
          <div>
            <p className="text-metal-900 font-semibold">
              Our customer support team is available:
            </p>
            <Divider />
            <ul className="py-3 text-metal-4 font-normal text-metal-600">
              <li>Monday to Friday: 9:00 AM - 6:00 PM (EST)</li>
              <li>Saturday: 10:00 AM - 4:00 PM (EST)</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <p className="text-metal-900 font-semibold">Emergency Support</p>
            <Divider />
            <p className="text-metal-4 font-normal text-metal-600 my-2">
              If you prefer, you can also contact us by filling out the form
              below. We strive to respond to all inquiries within 24 hours.
            </p>
            <Modal>
              <ModalAction asChild>
                <Button>Contact Us</Button>
              </ModalAction>

              <ModalContent className="w-[25rem] p-6">
                <form className="space-y-2">
                  <fieldset className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <div className="relative">
                      <Input placeholder="Enter email" className="ps-11" />
                      <InputIcon>
                        <Envelope size={19} color="#AFBACA" />
                      </InputIcon>
                    </div>
                  </fieldset>
                  <fieldset className="space-y-1">
                    <Label htmlFor="password">Message</Label>
                    <Textarea cols={30} rows={10} placeholder="Enter message" />
                  </fieldset>
                  <Button className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
