import {
  Button,
  buttonVariants,
  Drawer,
  DrawerAction,
  DrawerContent,
  Navbar,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
  toast,
} from "keep-react";
import { Command, Minus, Plus, ShoppingCart, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  quantityManage,
  removeFromCart,
} from "../../redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { cart } = useAppSelector((state) => state.product);

  const navLinks = [
    {
      id: 1,
      href: "/",
      title: "Home",
      active: false,
    },
    {
      id: 2,
      href: "/products",
      title: "Products",
      active: false,
    },
    {
      id: 3,
      href: "/about-us",
      title: "About Us",
      active: false,
    },
    {
      id: 4,
      href: "/contact-us",
      title: "Contact Us",
      active: false,
    },
    {
      id: 5,
      href: "/dashboard",
      title: "Dashboard",
      active: false,
    },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Navbar className="dark:bg-[#242424]">
      <NavbarContainer>
        <NavLink
          to="/"
          className="dark:text-white text-metal-900 text-heading-6 font-bold flex items-center gap-1"
        >
          <span className="h-10 w-10 flex items-center justify-center text-white bg-metal-900 rounded">
            <Command size={24} />
          </span>
          KeyZone
        </NavLink>
        <NavbarList>
          {navLinks.map((link) => (
            <NavbarItem asChild key={link.id}>
              <NavLink
                to={link.href}
                className={`cursor-pointer rounded-md bg-transparent px-4 py-2 text-body-4 font-medium transition-all duration-300 active:scale-95 text-metal-700 hover:bg-metal-100 hover:text-metal-900 dark:text-white dark:hover:bg-white dark:hover:text-metal-900 ${
                  pathname === link.href
                    ? "!bg-metal-900 text-white hover:text-white"
                    : ""
                }`}
              >
                {link.title}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarList>
        <div className="flex items-center gap-2">
          <Drawer isOpen={open} onOpenChange={setOpen} position="right">
            <DrawerAction asChild>
              <button
                onClick={() => setOpen(!open)}
                className="relative flex items-center gap-1 text-body-4 font-medium cursor-pointer rounded-md bg-transparent px-4 py-2 transition-all duration-300 active:scale-95 text-metal-700 hover:bg-metal-100 hover:text-metal-900 dark:text-white dark:hover:bg-white dark:hover:text-metal-900"
              >
                <ShoppingCart size={20} />
                <span>Cart({cart.length})</span>
              </button>
            </DrawerAction>

            <DrawerContent className="rounded-none p-5 flex flex-col justify-between">
              {cart.length <= 0 && (
                <div className="text-left bg-metal-100 p-6 rounded-lg">
                  <p className="text-body-1 font-medium text-metal-900">
                    Your cart is empty
                  </p>
                </div>
              )}
              {cart.length > 0 && (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item._id} className="relative">
                      <div className="w-full flex items-start gap-3 p-4">
                        <div className="flex-1 max-w-max">
                          <div className="object-cover h-20 w-20">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="object-cover h-full w-full rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="flex-auto space-y-0.5">
                          <div className="flex items-center justify-between">
                            <p className="text-body-4 font-semibold text-metal-900">
                              {item.name}
                            </p>
                            <p className="text-body-4 text-metal-600 font-normal">
                              ${item.price}
                            </p>
                          </div>
                          <div>
                            <p className="text-body-4 text-metal-600 font-normal">
                              Quantity: {item.quantity}
                            </p>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() =>
                                  dispatch(
                                    quantityManage({
                                      type: "dec",
                                      _id: item._id,
                                    })
                                  )
                                }
                                className="size-6 bg-white flex items-center justify-center"
                              >
                                <Minus size={12} />
                              </button>
                              <p className="text-body-4 text-metal-600">
                                {item.quantity}
                              </p>
                              <button
                                disabled={
                                  item.quantity === item.available_quantity
                                }
                                onClick={() =>
                                  dispatch(
                                    quantityManage({
                                      type: "inc",
                                      _id: item._id,
                                    })
                                  )
                                }
                                className="size-6 bg-white flex items-center justify-center"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ _id: item._id }))
                        }
                        className="absolute -top-2.5 -left-2.5 bg-error-500 size-6 rounded-full flex items-center justify-center text-white"
                      >
                        <X />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                <p className="text-metal-900 flex items-center justify-between font-semibold py-3 bg-metal-100 p-5 rounded-lg">
                  <span>SubTotal</span>
                  <span>
                    $
                    {cart
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    to="/products"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Continue Shopping
                  </Link>
                  {cart.length <= 0 ? (
                    <Button
                      color="error"
                      onClick={() => toast.error("Your Cart is empty!")}
                    >
                      View Cart
                    </Button>
                  ) : (
                    <Link to="/cart" className={buttonVariants()}>
                      View Cart
                    </Link>
                  )}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
          <NavbarCollapseBtn />
        </div>
        <NavbarCollapse>
          {navLinks.map((link) => (
            <NavbarItem asChild key={link.id}>
              <NavLink
                to={link.href}
                className={`cursor-pointer rounded-md bg-transparent px-4 py-2 text-body-4 font-medium transition-all duration-300 active:scale-95 text-metal-700 hover:bg-metal-100 hover:text-metal-900 dark:text-white dark:hover:bg-white dark:hover:text-metal-900 ${
                  pathname === link.href
                    ? "!bg-metal-900 text-white hover:text-white"
                    : ""
                }`}
              >
                {link.title}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;
