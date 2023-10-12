import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../util/AxiosInstance";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateUser = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [upUser, setUpuser] = useState("")
    const [updatedUser, setUpdatedUser] = useState("")
    const { userId } = useParams()
    const {
        getValues,
        control,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,

    } = useForm(
        {
            defaultValues:
            {
                name: "",
                email: "",
                phone: "",
                balance: ""
            }
        }
    )
    useEffect(() => {
        axiosInstance.get(`/book/getUserById?id=${userId}`)
            .then(resp => {
                console.log(resp.data.data)
                // setUpuser(resp.data.data)
                // setValue("name", resp.data.data.name);
                // setValue("email", resp.data.data.email);
                // setValue("phone", resp.data.data.phone);
                // setValue("balance", resp.data.data.balance);
                const name = resp.data.data.name || "";
                const email = resp.data.data.email || "";
                const phone = resp.data.data.phone || "";
                const balance = resp.data.data.balance || "";

                setUpuser(resp.data.data);
                setValue("name", name);
                setValue("email", email);
                setValue("phone", phone);
                setValue("balance", balance);
            })
            .catch(err => {
                console.log(err);
            })
    }, [userId, setValue])
    const onSubmit = (data) => {
        axiosInstance.post(`book/updateUser?id=${userId}`, data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data)
                setUpdatedUser(resp.data)
                if (resp.data.success) {
                    toast(resp.data.message)
                    navigate("/")
                }

            })
            .catch(err => {
                console.log(err);
                toast(err.message)
            })
    }
    console.log(upUser)
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h3>Enter Name</h3>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Enter Name of the User"
                                    {...field}
                                    className={`input-field`}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h3>Enter Email</h3>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Enter Email of the User"
                                    {...field}
                                    className={`input-field`}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h3>Enter Phone Number</h3>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number of the User"
                                    {...field}
                                    className={`input-field`}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h3>Enter Balance</h3>
                        <Controller
                            name="balance"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Enter Balance of the User"
                                    {...field}
                                    className={`input-field`}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <button type="submit">Update User</button>
                    </div>
                </form>
            </div>

        </>
    );

}
export default UpdateUser