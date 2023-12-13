import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  ForgetPassword,
  Home,
  Inventory,
  MyProperties,
  Pricing,
  PropertyDetails,
  PropertySetup,
  Resources,
  SignIn,
  SignUp,
  Solutions,
} from "../page";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/properties", element: <MyProperties /> },
      { path: "/property/:id", element: <PropertyDetails /> },
      { path: "/forgetPassword", element: <ForgetPassword /> },
      { path: "/setup", element: <PropertySetup /> },
      { path: "/inventory/:id", element: <Inventory /> },
      { path: "/resources", element: <Resources /> },
    ],
  },
]);
