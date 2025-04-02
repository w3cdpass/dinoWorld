import { createBrowserRouter, Outlet } from "react-router";
import Login from "./Components/auth/Login";
import Navbar from "./Components/common/Navbar";
import Body from "./Components/common/Body";
import Register from "./Components/auth/Register";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
     
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default AppRouter;
