import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import MovieDetail from "../pages/MovieDetail";
import Cast from "../pages/Cast";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/movie/:id',
        element: <MovieDetail/>
      },
      {
        path: '/cast/:id',
        element: <Cast/>
      },
      {
        path: '/search',
        element: <Search/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router;