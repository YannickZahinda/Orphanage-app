import { RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import router from './routes';

const Layout = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
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
