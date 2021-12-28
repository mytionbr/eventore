import { Navigate, useRoutes } from "react-router";
import InitialLayout from "./layouts/initial/InitialLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function Router(){
    return useRoutes([
        {
            path: '/',
            element: <InitialLayout />,
            children:[
                { path:'', element:<Navigate to="/login" /> },
                { path:'login', element: <LoginPage /> },
                { path:'register', element: <RegisterPage /> }
            ]
        },
    ])
}