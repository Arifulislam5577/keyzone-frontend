import {
  Badge,
  buttonVariants,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Rating,
  RatingStar,
} from "keep-react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/interface";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card
      key={product._id}
      className="md:col-span-1 max-w-full hover:scale-95 transition-all duration-300"
    >
      <Link to={`/productDetails/${product._id}`}>
        <CardHeader>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[200px]"
          />
        </CardHeader>
      </Link>
      <CardContent className="space-y-3">
        <Link to={`/productDetails/${product._id}`}>
          <CardTitle className="text-body-2">{product.name}</CardTitle>
        </Link>
        <div className="flex items-center gap-2">
          <Badge>{product.brand}</Badge>
          {product.available_quantity ? (
            <Badge color="success">In Stock</Badge>
          ) : (
            <Badge color="error" variant="base">
              Out of Stock
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Rating>
            {[...Array(Math.floor(product.rating)).keys()].map((item) => (
              <RatingStar
                key={item}
                value={item + 1}
                className="text-warning-300"
              />
            ))}
          </Rating>
          <p className="text-body-4 font-medium text-metal-600">
            ({product.rating}) Star
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-body-3 font-semibold">${product.price}</p>
          <Link
            to={`/productDetails/${product._id}`}
            className={buttonVariants()}
          >
            Details
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
