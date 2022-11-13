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
        }
    ]
    }
])
export default router