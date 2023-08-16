import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import Topbar from './components/topbar/Topbar';
import About from './components/about.jsx/About';
import Footer from './components/footer/Footer';

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <About />,
    },
    {
      path: '/user',
      element: <PrivateRoute/>,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard/>
        }
      ], 
    },
  ]);

function App() {
  return (

    <div className="App">
      <Topbar/>
      <RouterProvider router={router} >
        </RouterProvider>
      <Footer/>
    </div>
  );
}

export default App;

