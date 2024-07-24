import { useState } from "react";
import "./App.css";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import necessary components
import Username from "./Register_components/Username";
import Password from "./Register_components/Password";
import Register from "./Register_components/Register";
import Profile from "./Register_components/Profile";
import Recovery from "./Register_components/Recovery";
import Reset from "./Register_components/Reset";
import PageNotFound from "./Register_components/PageNotFound";

// Root Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
