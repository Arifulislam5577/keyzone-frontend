import {
  Alert,
  AlertContainer,
  AlertIcon,
  AlertTitle,
  Badge,
  Button,
  Divider,
  Rating,
  RatingStar,
  Skeleton,
  SkeletonLine,
} from "keep-react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/productApi";
import { addToCart } from "../../redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.product);

  const { id } = useParams();
  const { isError, isLoading, data } = useGetProductQuery(id);

  const isProductInCart = cart.some((item) => item._id === id);

  if (isError) {
    return (
      <section>
        <div className="container py-24">
          <Alert color="error">
            <AlertContainer>
              <AlertIcon />
              <AlertTitle>Something went wrong</AlertTitle>
            </AlertContainer>
          </Alert>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section>
        <div className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
            <div className="lg:col-span-1 w-full">
              <Skeleton>
                <SkeletonLine className="h-96 w-full" />
              </Skeleton>
            </div>
            <div className="lg:col-span-1 w-full">
              <Skeleton className="grid gap-5">
                <SkeletonLine className="h-8 w-full" />
                <SkeletonLine className="h-8 w-3/4" />
                <SkeletonLine className="h-4 w-2/4" />
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-2/4" />
                <SkeletonLine className="h-4 w-2/4" />
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-full" />
              </Skeleton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="lg:col-span-1 w-full">
            <img
              src={data?.data?.image}
              alt={data?.data?.name}
              className="rounded-xl"
            />
          </div>
          <div className="lg:col-span-1 w-full space-y-3">
            <h1 className="text-heading-4 font-bold text-metal-900">
              {data?.data?.name}
            </h1>

            <h2 className="text-heading-4 font-bold text-metal-900">
              ${data?.data?.price}
            </h2>

            <div className="flex items-center gap-2">
              <Rating>
                {[...Array(Math.floor(data?.data?.rating)).keys()].map(
                  (item) => (
                    <RatingStar
                      key={item}
                      value={item + 1}
                      className="text-warning-300"
                    />
                  )
                )}
              </Rating>
              <p>({data?.data?.rating}) Star</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-bold text-body-4 text-metal-600">
                In Stock :{" "}
              </p>
              <Badge>{data?.data?.available_quantity}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-body-4 text-metal-600">Brand : </p>
              <Badge>{data?.data?.brand}</Badge>
            </div>
            <div>
              <Divider />
              <p className="text-body-4 font-normal text-metal-600 py-3">
                <span className="font-bold">Description</span> :
                <span> {data?.data?.description}</span>
              </p>
              <Divider />
            </div>

            <div>
              <Button
                disabled={
                  data?.data?.available_quantity === 0 || isProductInCart
                }
                onClick={() => dispatch(addToCart(data?.data))}
              >
                {isProductInCart ? "Already In Cart" : " Add To Cart"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
