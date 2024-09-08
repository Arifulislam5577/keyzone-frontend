import { buttonVariants, Divider } from "keep-react";
import { cn } from "keep-react/utils";
import { ArrowLeft, Minus, Plus, X } from "phosphor-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  quantityManage,
  removeFromCart,
} from "../../redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (!cart.length) {
      navigate("/products");
    }
  }, [cart.length, navigate]);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <section>
      <div className="container py-12 space-y-10">
        <div>
          <Link
            to="/products"
            className="flex items-center gap-2 text-metal-600 font-medium hover:text-metal-900"
          >
            <ArrowLeft size={20} />
            Go back
          </Link>
          <div className="text-center space-y-2.5">
            <p className="text-metal-900 font-bold text-heading-5">Cart</p>
            <p className="text-metal-300">Home/Cart</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-5 gap-y-5">
          <div className="lg:col-span-8 w-full col-span-12 space-y-4">
            {cart.map((product) => (
              <div
                key={product._id}
                className="border px-6 py-5 flex items-center gap-5"
              >
                <div className="w-32">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded"
                  />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="text-body-4 font-medium text-metal-900">
                      {product.name}
                    </p>
                    <p className="text-body-5 font-medium text-metal-300">
                      {product.brand}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <button
                      onClick={() =>
                        dispatch(
                          quantityManage({
                            type: "dec",
                            _id: product._id,
                          })
                        )
                      }
                    >
                      <Minus />
                    </button>
                    <p className="size-10 flex items-center justify-center text-body-4 text-metal-900 font-medium border">
                      {product.quantity}
                    </p>
                    <button
                      disabled={product.quantity === product.available_quantity}
                      onClick={() =>
                        dispatch(
                          quantityManage({
                            type: "inc",
                            _id: product._id,
                          })
                        )
                      }
                    >
                      <Plus />
                    </button>
                  </div>

                  <div>
                    <p className="text-body-4 font-medium text-metal-900">
                      ${product.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-body-4 font-medium text-metal-900">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() =>
                        dispatch(removeFromCart({ _id: product._id }))
                      }
                    >
                      <X />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

              <Link to="/checkout" className={cn(buttonVariants(), "w-full")}>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
