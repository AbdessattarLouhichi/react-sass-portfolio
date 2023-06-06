import { Suspense , lazy } from "react";
import { routes } from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './scss/main.scss'


const Layout = lazy(() => import('./layout/Layout'))

const routing = routes.map((route) => {
  return (
    route.element && {
      path: route.path,
      element: <route.element />,
      exact: route.exact,
      name: route.name
    }
  )
})

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: routing
  }
])

const Loading = 
  <div className="d-flex justify-content-center vh-100 align-items-center">
    <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>

function App() {
  return (
    <Suspense fallback={Loading} >
      <RouterProvider router={router} fallbackElement={Loading} />
    </Suspense>
  );
}

export default App;
