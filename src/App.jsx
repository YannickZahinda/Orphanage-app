import { RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import router from './routes';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}; 

const routerWithLayout = {
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: router.routes[0].children,
  // }
  ...router,
  element: <Layout />,
}

function App() {
  return < RouterProvider router={routerWithLayout} />
}


export default App
