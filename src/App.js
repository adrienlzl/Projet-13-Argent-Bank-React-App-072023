import { RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,} from 'react-router-dom'
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Sign from "./Pages/SIngIn";
import "../src/css/normalizer.scss"
import "../src/css/General.scss"
import User from "./Pages/User";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />} errorElement={<Error/>}>
          <Route exact index  element={<Home />}/>
            <Route path="/Sign" element={<Sign/>}/>
            <Route path="/User" element={<User  />}/>
        </Route>
    ));

function App() {
    return <RouterProvider router={router}/>
}

export default App;

