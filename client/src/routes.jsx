import { Navigate, useRoutes } from "react-router";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import InitialLayout from "./layouts/initial/InitialLayout";
import LoginPage from "./pages/LoginPage";
import MyEventsPage from "./pages/MyEventsPage";
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
        {
            path: '/app/',
            element: <DashboardLayout />,
            children:[
                { path:'', element:<Navigate to="/app/myevents" /> },
                { path:'myevents', element: <MyEventsPage /> },
                { path:'community', element: <RegisterPage /> }
            ]
        },
    ])
}