import { buttonVariants } from "keep-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { resetCart } from "../../redux/features/products/productSlice";
import { useAppDispatch } from "../../redux/hooks";

const Success = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);
  return (
    <section>
      <div className="py-20 container">
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-metal-900 sm:text-5xl">
            Order Successfully Placed!
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Thank you for your order. We will contact you shortly.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-3">
            <Link to="/" className={buttonVariants()}>
              Go back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
