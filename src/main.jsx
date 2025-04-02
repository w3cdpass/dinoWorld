// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS file
import { RouterProvider } from "react-router-dom";
import AppRouter from "./App";
import { Provider } from "react-redux";
import AddTodo from "./Components/common/AddTodo";
import Todos from "./Components/common/Todos";
import { store } from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
  // <>
  //   <Provider store={store}>

  //  <AddTodo />
  //  <Todos/>
  //   </Provider>
  // </>
);
