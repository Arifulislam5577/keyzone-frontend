import {
  Alert,
  AlertContainer,
  AlertIcon,
  AlertTitle,
  Button,
  Input,
  InputIcon,
  Skeleton,
  SkeletonLine,
  Slider,
} from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import ProductCard from "../../components/shared/ProductCard";
import useDebounce from "../../hooks/useDebounce";
import { IProduct } from "../../interface/interface";
import { useGetProductsQuery } from "../../redux/api/productApi";

const Products = () => {
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState<number[]>([0, 10000]);

  const debouncedQuery = useDebounce(query, 500);

  const { isError, isLoading, data } = useGetProductsQuery({
    isFeatured: false,
    keyword: debouncedQuery,
    value: price,
    sort,
  });

  const handleReset = () => {
    setPrice([0, 10000]);
    setQuery("");
    setSort("");
  };

  return (
    <section>
      <div className="container py-20">
        <div className="grid lg:grid-cols-4 grid-cols-1 items-start gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="bg-metal-25 border rounded-xl shadow-sm space-y-4 p-6">
              <div className="space-y-2">
                <h3 className="text-body-3 font-medium text-metal-600">
                  Search Products
                </h3>
                <div>
                  <form>
                    <fieldset className="relative">
                      <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products"
                        className="ps-11"
                      />
                      <InputIcon>
                        <MagnifyingGlass size={19} color="#AFBACA" />
                      </InputIcon>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-body-3 font-medium text-metal-600">
                  Filter Price
                </h3>
                <div className="flex items-center gap-x-3">
                  <p className="text-metal-3 font-medium text-metal-600">
                    ${price[0]}
                  </p>
                  <Slider
                    min={0}
                    max={data?.metadata?.highestPrice}
                    value={price}
                    defaultValue={[0, data?.metadata?.highestPrice]}
                    onValueChange={(value: number[]) => setPrice(value)}
                  ></Slider>
                  <p className="text-metal-3 font-medium text-metal-600">
                    ${price[1]}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-body-3 font-medium text-metal-600">
                  Sort Product
                </h3>
                <div>
                  <fieldset>
                    <select
                      onChange={(e) => setSort(e.target.value)}
                      value={sort}
                      className="w-full p-2 rounded"
                    >
                      <option>Select Options</option>
                      <option value="asc">Higher To Low</option>
                      <option value="dsc">Lower To High</option>
                    </select>
                  </fieldset>
                </div>
              </div>
              <Button onClick={handleReset} className="w-full">
                Reset Filter
              </Button>
            </div>
          </div>
          <div className="lg:col-span-3 w-full grid xl:grid-cols-3 grid-cols-1 gap-5">
            {isLoading ? (
              [...Array(9).keys()].map((c) => (
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
                  <AlertTitle>Field To Fetch</AlertTitle>
                </AlertContainer>
              </Alert>
            ) : data?.data?.length === 0 ? (
              <div className="text-center text-metal-600 font-medium">
                No Product Found
              </div>
            ) : (
              data?.data?.map((product: IProduct) => (
                <ProductCard product={product} key={product._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
