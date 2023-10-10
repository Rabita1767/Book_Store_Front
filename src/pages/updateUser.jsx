// import { useForm, Controller } from "react-hook-form"
// import UseProductHook from "../hooks/useProductHooks"
// import { useEffect } from "react";
// const UpdateUser = () => {
//     const { updateUser, setUpUser, upUser } = UseProductHook();
//     const
//         {
//             handleSubmit,
//             getValues,
//             watch,
//             control,
//             formState: { errors }
//         } = useForm()
//     useEffect(() => {
//         console.log(upUser);
//     }, [upUser])
//     const handleUpdateUser = (data) => {
//         updateUser(data)
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit(handleUpdateUser)}>
//                 <div>
//                     <h3>Enter Name</h3>
//                     <Controller
//                         name="name"
//                         control={control}
//                         rules=
//                         {
//                             pattern =
//                             {
//                                 value: "/^[A-Za-z' -]+$/",
//                                 message: "Invalid Name"
//                             }
//                         }
//                         render={({ field }) =>
//                         (
//                             <input type="text"
//                                 placeholder="Enter Name of the User"
//                                 {...field}
//                                 className={`input-field ${errors.name ? "error-border" : ""}`}
//                             />
//                         )}
//                     />
//                 </div>
//                 <div>
//                     <Controller
//                         name="email"
//                         control={control}
//                         rules=
//                         {
//                             pattern =
//                             {
//                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                 message: "Invalid Email"
//                             }
//                         }
//                         render={({ field }) =>
//                         (
//                             <input type="text"
//                                 placeholder="Enter Email of the User"
//                                 {...field}
//                                 className={`input-field ${errors.email ? "error-border" : ""}`}
//                             />
//                         )}
//                     />
//                 </div>
//                 <div>
//                     <Controller
//                         name="phone"
//                         control={control}
//                         rules=
//                         {
//                             pattern =
//                             {
//                                 value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
//                                 message: "Invalid phone"
//                             }
//                         }
//                         render={({ field }) =>
//                         (
//                             <input type="text"
//                                 placeholder="Enter Phone Number of the User"
//                                 {...field}
//                                 className={`input-field ${errors.phone ? "error-border" : ""}`}
//                             />
//                         )}
//                     />
//                 </div>
//                 <div>
//                     <Controller
//                         name="balance"
//                         control={control}
//                         rules=
//                         {
//                             min =
//                             {
//                                 value: 10,
//                                 message: "Cant add balance less than 10"
//                             }
//                         }
//                         render={({ field }) =>
//                         (
//                             <input type="text"
//                                 placeholder="Enter Balance of the User"
//                                 {...field}
//                                 className={`input-field ${errors.balace ? "error-border" : ""}`}
//                             />
//                         )}
//                     />
//                 </div>
//                 <div>
//                     <button type="Submit">Update User</button>
//                 </div>
//             </form>
//         </>
//     )
// }
// export default UpdateUser
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../util/AxiosInstance";
import { useNavigate } from "react-router-dom";
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
                setUpuser(resp.data.data)
                setValue("name", resp.data.data.name);
                setValue("email", resp.data.data.email);
                setValue("phone", resp.data.data.phone);
                setValue("balance", resp.data.data.balance);

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
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(upUser)
    return (
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
    );

}
export default UpdateUser