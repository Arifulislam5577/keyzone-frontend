import { Button, toast } from "keep-react";
import { UploadSimple } from "phosphor-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../interface/interface";
import { useUpdateProductMutation } from "../../redux/api/productApi";
import FormInput from "../shared/FormInput";

const EditProduct = ({
  product,
  setIsModalOpen,
}: {
  product: IProduct;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [upload, setUpload] = useState(false);
  const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [files, setFiles] = useState<string>("");
  const [formValues] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    available_quantity: product.available_quantity,
    brand: product.brand,
    image: product.image,
    rating: product.rating,
  });

  const handleFile = (acceptedFiles: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString() ?? "";
      setFiles(base64String);
    };
    reader.readAsDataURL(acceptedFiles);
  };

  const onSubmit = handleSubmit((data) => {
    const productData = {
      name: data.name,
      price: +data.price,
      description: data.desc,
      available_quantity: +data.qty,
      brand: data.brand,
      image: files,
      rating: +data.rating,
    };

    updateProduct({ _id: product._id, ...productData });
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully");
      setIsModalOpen(false);
    }
  }, [isSuccess, setIsModalOpen]);

  return (
    <div className="space-y-4 relative">
      <div className="group">
        <img
          src={files || formValues.image}
          alt={formValues.name}
          className="rounded-t-xl h-[200px] w-full object-cover relative "
        />

        <button
          onClick={() => setUpload(!upload)}
          className="absolute group-hover:opacity-100 opacity-0 top-20 left-1/2 -translate-x-1/2 bg-white size-14 rounded-full flex items-center justify-center border-2 border-metal-100 transition-all duration-300"
        >
          <UploadSimple size={24} className="text-metal-300" />
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-2 px-8 pb-8">
        <FormInput
          id="name"
          inputLabel="Name"
          placeholder="Product name"
          type="text"
          defaultValue={formValues?.name}
          {...register("name", {
            required: "Name is required",
          })}
          inputValidate={errors.name?.message}
        />

        <div className="flex gap-3 items-center">
          <FormInput
            id="price"
            inputLabel="Price"
            placeholder="$100"
            type="number"
            defaultValue={formValues?.price}
            inputValidate={errors.price?.message}
            {...register("price", {
              required: "Price is required",
            })}
          />
          <FormInput
            id="qty"
            inputLabel="Quantity"
            placeholder="100"
            type="number"
            min={1}
            defaultValue={formValues?.available_quantity}
            inputValidate={errors.qty?.message}
            {...register("qty", {
              required: "Quantity is required",
            })}
          />
          <FormInput
            inputLabel="Rating"
            id="rating"
            placeholder="4.7"
            type="number"
            defaultValue={formValues?.rating}
            inputValidate={errors.rating?.message}
            {...register("rating", {
              required: "Rating is required",
              min: {
                value: 0,
                message: "Rating must be greater than 0",
              },
              max: {
                value: 5,
                message: "Rating must be less than 5",
              },
            })}
          />
        </div>

        <FormInput
          inputLabel="Brand"
          id="brand"
          defaultValue={formValues?.brand}
          inputValidate={errors.brand?.message}
          placeholder="samsung, hp, dell, a4tech"
          type="text"
          {...register("brand", {
            required: "Brand is required",
          })}
        />

        <FormInput
          inputLabel="Description"
          id="description"
          type="text"
          placeholder="description"
          defaultValue={formValues?.description}
          inputValidate={errors.desc?.message}
          {...register("desc", { required: "Description is required" })}
        />

        {upload && (
          <FormInput
            inputLabel="Poster"
            id="poster"
            type="file"
            accept="image/png, image/jpeg"
            inputValidate={errors.poster?.message}
            {...register("poster", {
              required: false,
              onChange: (e: Event) => {
                const input = e.target as HTMLInputElement;
                if (!input.files?.length) {
                  return;
                }
                const file = input.files[0];
                handleFile(file);
              },
            })}
          />
        )}
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading ? "Updating..." : "Update Product"}
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
