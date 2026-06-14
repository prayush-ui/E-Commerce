import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import React from "react";
import SearchProduct from "../user/SearchProduct";
import Ordersingle from "../user/Ordersingle";
import Sorting from "../user/Sorting";
const Userlist = React.lazy(() => import("../admin/Userlist"));
const AdminProfile = React.lazy(() => import("../admin/AdminProfile"));
const HotProducts = React.lazy(() => import("../admin/HotProducts"));
const UserSettings = React.lazy(() => import("../user/settings/UserSettings"));
const UserProfile = React.lazy(() => import("../user/UserProfile/UserProfile"));
const Dashboard = React.lazy(() => import("../user/dashboard/Dashboard"));
const Details = React.lazy(() => import("../user/Details"));
const Ordernow = React.lazy(() => import("../user/Ordernow"));
const AuthLayout = React.lazy(() => import("../layout/AuthLayout"));
const App = React.lazy(() => import("../../App"));
const PageMissing = React.lazy(() => import("../PageMissing"));
const UserLayout = React.lazy(() => import("../layout/UserLayout"));
const AdminLayout = React.lazy(() => import("../layout/AdminLayout"));
const AdminDashboard = React.lazy(() => import("../admin/AdminDashboard"));
const Sgnup = React.lazy(() => import("../user/signup/Sgnup"));
const Login = React.lazy(() => import("../user/login/Login"));
export const MainRouter = createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="ordernow" element={<Ordernow />} />
                <Route path="ordersingle/:id" element={<Ordersingle />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="settings" element={<UserSettings />} />
                <Route path="details/:id" element={<Details />} />
                <Route path="searchproduct/:id" element={<SearchProduct />} />
                <Route path="sorting" element={<Sorting />} />

            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="userlist" element={<Userlist />} />
                <Route path="profile" element={<AdminProfile />} />
                <Route path="hotproduct" element={<HotProducts />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signup" element={<Sgnup />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<PageMissing />} />
            <Route path="/app" element={<App />} />

        </Route>
    )
)
