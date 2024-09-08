import { Card, CardContent, CardDescription, CardTitle } from "keep-react";
import { ArrowsCounterClockwise, Headset, Truck } from "phosphor-react";

const Advertisement = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-between">
      <div className="w-full lg:col-span-1">
        <Card className="max-w-full shadow-none border-0 bg-white">
          <CardContent>
            <div className="mb-2 size-14 bg-metal-50 flex items-center justify-center rounded-full">
              <Truck size={28} />
            </div>
            <CardTitle>Free Shipping</CardTitle>
            <CardDescription>
              Enjoy the convenience of free shipping on all orders, ensuring
              your keyboards arrive at your doorstep without any extra cost.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="w-full lg:col-span-1">
        <Card className="max-w-full shadow-none border-0 bg-white">
          <CardContent>
            <div className="mb-2 size-14 bg-metal-50 flex items-center justify-center rounded-full">
              <ArrowsCounterClockwise size={28} />
            </div>
            <CardTitle>Refund Available</CardTitle>
            <CardDescription>
              Shop worry-free with our hassle-free refund policy. If you're not
              completely satisfied with your purchase, simply return it for a
              full refund.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="w-full lg:col-span-1">
        <Card className="max-w-full shadow-none border-0 bg-white">
          <CardContent>
            <div className="mb-2 size-14 bg-metal-50 flex items-center justify-center rounded-full">
              <Headset size={28} />
            </div>
            <CardTitle>24/7 Support</CardTitle>
            <CardDescription>
              Get the help you need, whenever you need it. Our dedicated support
              team is available 24/7 to assist you with any questions .
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Advertisement;
