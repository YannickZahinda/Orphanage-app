import { RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import router from './routes';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  )
}; 

const routerWithLayout = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: router.routes[0].children,
  }
]);

function App() {
  return < RouterProvider router={routerWithLayout} />
}


export default App
