import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../MainLayout/Main");
const { default: Homepage } = require("../Pages/Homepagae/Homepage");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
            index:true,
            element:<Homepage></Homepage>
        },
        {
            path: '/about'
            ,element:<About></About>
        },
        {
            path:'/appiointment',
            element:<Appointment></Appointment>
        }
    ]
    }
])
export default router