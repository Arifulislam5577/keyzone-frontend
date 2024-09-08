import {
  Alert,
  AlertContainer,
  AlertIcon,
  AlertTitle,
  buttonVariants,
  Skeleton,
  SkeletonLine,
} from "keep-react";

import { cn } from "keep-react/utils";
import { Plus } from "phosphor-react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/interface";
import { useGetProductsQuery } from "../../redux/api/productApi";
import ProductCard from "../shared/ProductCard";

const FeaturedProduct = () => {
  const { isError, data, isLoading } = useGetProductsQuery({
    isFeatured: true,
  });

  return (
    <div className="py-12 space-y-8">
      <div className="grid xl:grid-cols-4 lg:col-span-3 grid-row-2 sm:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="lg:col-span-1 h-full lg:block hidden row-span-2 w-full space-y-8 bg-white p-6 rounded-xl">
          <div className="space-y-5">
            <p className="text-heading-6 font-semibold text-metal-900">
              Featured Products
            </p>
            <p className="text-body-4 font-normal text-metal-600 mt-2">
              Discover our extensive collection of top-selling brands, each
              renowned for their exceptional quality, innovative designs, and
              customer satisfaction
            </p>

            <Link to="/products" className={cn(buttonVariants(), "w-full")}>
              View All Products
            </Link>
          </div>
          <div className="space-y-5 divide-y divide-metal-100">
            <div className="flex items-center justify-between py-3">
              <p className="text-metal-600 font-medium text-body-3 cursor-pointer">
                Category
              </p>
              <span>
                <Plus />
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-metal-600 font-medium text-body-3 cursor-pointer">
                Color
              </p>
              <span>
                <Plus />
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-metal-600 font-medium text-body-3 cursor-pointer">
                Size
              </p>
              <span>
                <Plus />
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-metal-600 font-medium text-body-3 cursor-pointer">
                Brand
              </p>
              <span>
                <Plus />
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="text-metal-600 font-medium text-body-3 cursor-pointer">
                Rating
              </p>
              <span>
                <Plus />
              </span>
            </div>
          </div>
        </div>

        {isLoading ? (
          [1, 2, 3, 4, 5, 6].map((c) => (
            <Skeleton key={c} className="w-full space-y-2.5 xl:max-w-md">
              <SkeletonLine className="h-52 w-full" />
              <SkeletonLine className="h-4 w-full" />
              <SkeletonLine className="h-4 w-3/5" />
              <SkeletonLine className="h-4 w-4/5" />
              <SkeletonLine className="h-10 w-2/5" />
            </Skeleton>
          ))
        ) : isError ? (
          <Alert color="error">
            <AlertContainer>
              <AlertIcon />
              <AlertTitle>Failed to fetch products</AlertTitle>
            </AlertContainer>
          </Alert>
        ) : (
          data?.data?.map((product: IProduct) => (
            <ProductCard product={product} key={product._id} />
          ))
        )}
      </div>
      <div className="flex items-center justify-end">
        <Link to="/products" className={buttonVariants()}>
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
