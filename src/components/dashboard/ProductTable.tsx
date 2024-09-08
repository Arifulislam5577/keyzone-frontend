import {
  Badge,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownList,
  dropdownVariant,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
  Skeleton,
  SkeletonLine,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  toast,
} from "keep-react";
import { cn } from "keep-react/utils";
import {
  CaretLeft,
  CaretRight,
  DotsThreeOutlineVertical,
  Warning,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { IProduct } from "../../interface/interface";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/api/productApi";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const ProductTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const { isError, isLoading, data } = useGetProductsQuery({ page });
  const [deleteProduct, { isLoading: loading, isSuccess }] =
    useDeleteProductMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product deleted successfully");
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <Skeleton className="w-full space-y-2.5">
        <SkeletonLine className="h-20 w-full" />
        <SkeletonLine className="h-20 w-full" />
        <SkeletonLine className="h-20 w-full" />
        <SkeletonLine className="h-20 w-full" />
        <SkeletonLine className="h-20 w-full" />
      </Skeleton>
    );
  }

  if (isError) {
    return toast.error("Something went wrong");
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableCaption>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">
                Total Product
              </h2>
              <Badge
                color="secondary"
                className="dark:bg-metal-800 dark:text-white"
              >
                {data?.metadata?.totalDocuments} Product
              </Badge>
            </div>
            <div className="flex items-center gap-5">
              <AddProduct />
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="w-[320px]">Product Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[65px]">Price</div>
            </TableHead>
            <TableHead>
              <div className="w-[100px]">Category</div>
            </TableHead>
            <TableHead>
              <div className="w-[60px]">Rating</div>
            </TableHead>
            <TableHead>
              <div className="w-[60px]">Stock</div>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: IProduct) => (
            <TableRow key={item._id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>{item.available_quantity}</TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button>
                      <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                    </button>
                  </DropdownAction>
                  <DropdownContent className="max-w-[200px] p-3">
                    <DropdownList>
                      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
                        <ModalAction asChild>
                          <button
                            className={cn(
                              dropdownVariant("item"),
                              "w-full outline-none"
                            )}
                          >
                            Edit
                          </button>
                        </ModalAction>
                        <ModalContent className="lg:w-[32rem] p-0 overflow-hidden">
                          <ModalClose className="absolute right-4 top-4 bg-white rounded-full p-1.5 z-50" />
                          <EditProduct
                            product={item}
                            setIsModalOpen={setIsModalOpen}
                          />
                        </ModalContent>
                      </Modal>
                      <Modal>
                        <ModalAction asChild>
                          <button
                            className={cn(
                              dropdownVariant("item"),
                              "w-full outline-none"
                            )}
                          >
                            Delete
                          </button>
                        </ModalAction>
                        <ModalContent className="w-[20rem] lg:w-[26rem]">
                          <ModalClose className="absolute right-4 top-4" />
                          <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-error-50 text-metal-600 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
                              <Warning size={52} color="red" />
                            </div>
                            <div className="space-y-1 text-center">
                              <ModalTitle>Do you want to delete?</ModalTitle>
                            </div>
                          </ModalHeader>
                          <ModalFooter className="justify-center">
                            <Button
                              color="error"
                              disabled={loading}
                              onClick={() => {
                                deleteProduct(item._id);
                              }}
                            >
                              {loading ? "Deleting..." : "Confirm"}
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </DropdownList>
                  </DropdownContent>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {data?.metadata && (
        <Pagination shape="circle" className="flex justify-end">
          <PaginationNavigator
            disabled={page === 1}
            shape="circle"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <CaretLeft size={18} />
          </PaginationNavigator>
          <PaginationList>
            {[...Array(data?.metadata?.totalPages).keys()].map((item) => (
              <PaginationItem
                active={page === item + 1}
                onClick={() => setPage(item + 1)}
                key={item}
              >
                {item + 1}
              </PaginationItem>
            ))}
          </PaginationList>
          <PaginationNavigator
            disabled={data?.metadata?.totalPages === page}
            shape="circle"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <CaretRight size={18} />
          </PaginationNavigator>
        </Pagination>
      )}
    </div>
  );
};

export default ProductTable;
