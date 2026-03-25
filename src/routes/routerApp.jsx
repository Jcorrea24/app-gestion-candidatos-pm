import App from '../App.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Dashboard from '../pages/Dashboard.jsx'



let routerApp = [
    {
        path: "/",
        element:<App />
    },
        {
        path: "/login",
        element: <Login />
    },
     {
        path: "/register",
        element: <Register />
    },
     {
        path: "/dashboard",
        element: <Dashboard />
    },
]

export default routerApp;