export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  available_quantity: number;
  image: string;
  rating: number;
}

export interface IPlayLoadProduct extends Omit<IProduct, "_id"> {
  _id?: string;
}

export type ErrorResponse = {
  success: boolean;
  message: string;
  statusCode: number;
};

export interface OrderedProduct {
  _id: string;
  quantity: number;
}

export interface IOrder {
  name: string;
  email: string;
  phone: string;
  address: string;
  payment: string;
  orderedProduct: OrderedProduct[];
}
