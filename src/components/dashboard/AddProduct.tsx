import {
  Button,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  toast,
} from "keep-react";

import { Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/api/productApi";
import FormInput from "../shared/FormInput";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addProduct, { isLoading, isSuccess, isError }] =
    useAddProductMutation();
  const [files, setFiles] = useState<string>("");

  const handleFile = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString() ?? "";
      setFiles(base64String);
    };
    reader.readAsDataURL(file);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    handleFile(data.poster);
    const productData = {
      name: data.name,
      price: +data.price,
      description: data.desc,
      available_quantity: +data.qty,
      brand: data.brand,
      image: files,
      rating: +data.rating,
    };
    addProduct(productData);
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success("Product added successfully");
      setIsOpen(false);
    }
    if (isError) {
      toast.error("Product could not be added");
      setIsOpen(true);
    }
  }, [isSuccess, isError, reset]);

  return (
    <div>
      <Modal key="modal" isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalAction asChild>
          <Button variant="outline" className="flex gap-1.5">
            <Plus className="size-4 fill-metal-900 dark:fill-white" />
            Add Product
          </Button>
        </ModalAction>

        <ModalContent className="lg:w-[32rem] p-8">
          <ModalClose className="absolute right-4 top-4" />
          <form onSubmit={onSubmit} className="space-y-2">
            <FormInput
              id="name"
              inputLabel="Name"
              placeholder="Product name"
              type="text"
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
              inputValidate={errors.desc?.message}
              {...register("desc", { required: "Description is required" })}
            />
            <FormInput
              inputLabel="Poster"
              id="poster"
              type="file"
              accept="image/png, image/jpeg"
              inputValidate={errors.poster?.message}
              {...register("poster", {
                required: "Poster is required",
              })}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "Add Product"}
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddProduct;
