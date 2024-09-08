import {
  Button,
  Divider,
  Label,
  Radio,
  Tooltip,
  TooltipAction,
  TooltipContent,
} from "keep-react";
import { Info } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/shared/FormInput";
import { IOrder } from "../../interface/interface";
import { useAddOrderMutation } from "../../redux/api/orderApi";
import { useAppSelector } from "../../redux/hooks";

const Checkout = () => {
  const navigate = useNavigate();
  const [addNewOrder, { isSuccess, isLoading }] = useAddOrderMutation();
  const { cart } = useAppSelector((state) => state.product);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const orderedProduct = cart.map((product) => {
    return {
      _id: product._id,
      quantity: product.quantity,
    };
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const orderData: IOrder = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      payment: data.payment,
      orderedProduct,
    };
    addNewOrder(orderData);
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate("/success");
    }
  }, [isSuccess, reset, navigate]);

  return (
    <section>
      <div className="container py-12 space-y-10">
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-body-1 font-bold text-metal-600">
              Delivery Address
            </p>
            <form onSubmit={onSubmit} className="space-y-4 mt-4">
              <FormInput
                id="name"
                inputLabel="Name"
                placeholder="Enter your name"
                type="text"
                inputValidate={errors.name?.message}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <div className="flex items-center space-x-8 lg:flex-row flex-col">
                <FormInput
                  id="email"
                  inputLabel="Email"
                  placeholder="Enter your email"
                  type="email"
                  inputValidate={errors.email?.message}
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                <FormInput
                  id="phone"
                  inputLabel="Phone"
                  placeholder="Enter your phone"
                  type="text"
                  inputValidate={errors.phone?.message}
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                />
              </div>
              <FormInput
                id="address"
                inputLabel="Delivery Address"
                placeholder="Enter your address"
                type="text"
                inputValidate={errors.address?.message}
                {...register("address", {
                  required: "Delivery address is required",
                })}
              />
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-x-2">
                  Select Payment
                  <Tooltip>
                    <TooltipAction asChild>
                      <Info />
                    </TooltipAction>
                    <TooltipContent>
                      <p className="text-body-5 font-medium text-white">
                        Stripe is not supported. Please use cash on delivery. We
                        will add stripe support soon.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <fieldset className="space-x-2.5 flex items-center">
                  <div className="flex items-center gap-x-2.5">
                    <Radio
                      variant="rounded"
                      id="cash"
                      type="radio"
                      value={"cod"}
                      {...register("payment")}
                    />
                    <Label htmlFor="cash">Cash On Delivery</Label>
                  </div>
                  <div className="flex items-center gap-x-2.5">
                    <Radio
                      id="stripe"
                      variant="rounded"
                      disabled
                      value={"stripe"}
                      {...register("payment")}
                      type="radio"
                    />
                    <Label htmlFor="stripe">Stripe</Label>
                  </div>
                </fieldset>
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Loading..." : "Place Order"}
              </Button>
            </form>
          </div>
          <div className="lg:col-span-4 w-full col-span-12">
            <div className="p-5 border space-y-3">
              <p className="text-body-1 font-bold text-left">Total</p>
              <Divider />
              <p className="text-metal-600 flex items-center justify-between font-medium text-body-4">
                <span>Delivery Charge</span>
                <span>$5</span>
              </p>
              <p className="text-metal-600 flex items-center justify-between font-medium text-body-4">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-metal-600 flex items-center justify-between font-medium text-body-4">
                <span>SubTotal</span>
                <span>${(totalPrice + 5).toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
