import Header from "../components/Header/header";
import { useState, useEffect } from "react";
import UseUserHook from "../hooks/useUserHook";
import { toast } from "react-toastify";

const DashBoard = () => {
    const { userProfile } = UseUserHook();
    const [user, setUser] = useState("");
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await userProfile();
                console.log(response);
                if (response.data.success) {
                    setUser(response.data.data);
                    toast(response.data.message);
                }
                else {
                    toast(response.data.message);
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData();

    }, [])
    console.log(user);
    return (
        <>
            <Header />
            <div className="tbl">
                <table border="2px">
                    <thead className="t1">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Balance</th>
                            <th>Badge</th>
                        </tr>
                    </thead>
                    <tbody className="t1">
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.balance}</td>
                            <td>{user.badge}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>

    )

}
export default DashBoard;