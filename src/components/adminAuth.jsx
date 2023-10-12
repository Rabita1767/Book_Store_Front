import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const AdminAuth = () => {
    const role = localStorage.getItem("role");
    console.log("Authenticating", role);

    return role == 1 ? (
        <div>
            <Outlet />{" "}
        </div>
    ) : (
        <Navigate to="/login" />
    );
};

export default AdminAuth;