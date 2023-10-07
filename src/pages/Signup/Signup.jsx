// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import UseAuthHook from "../hooks/useAuthHook";
// import Password from '../components/password';
// const Signup = () => {
//     const [passwordFieldType, setPasswordFieldType] = useState("password");
//     const change = () => {
//         console.log("Button clicked");
//         setPasswordFieldType(prevType => prevType === "text" ? "password" : "text");
//     }
//     console.log(passwordFieldType)
//     const navigate = useNavigate();
//     // const [name, setName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("")
//     // const [confirmPassword, setConfirmPassword] = useState("");
//     // const [phone, setPhone] = useState("")
//     const {
//         handleSubmit,
//         control,
//         formState: { errors },
//         getValues,
//         watch,
//     } = useForm()
//     const { signup, signupData } = UseAuthHook()


//     const handleChange = () => {
//         // e.preventDefault();
//         const data = {
//             name: getValues("name"),
//             email: getValues("email"),
//             password: getValues("password"),
//             confirmPassword: getValues("confirmPassword"),
//             phone: getValues("phone")
//         }
//         console.log(`user ${data}`)

//         signup(data);
//         navigate("/login");
//     }

//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSubmit(handleChange)}>
//                     <div>
//                         <h4 className="label">Enter Name</h4>
//                         <Controller
//                             name="name"
//                             control={control}
//                             rules={{
//                                 required: "Name is required",
//                                 minLength: {
//                                     value: 2,
//                                     message: "Minimum length must be 2",
//                                 },
//                                 maxLength: {
//                                     value: 50,
//                                     message: "Maximum length must be 50",
//                                 },
//                             }}
//                             render={({ field }) => (
//                                 <input
//                                     placeholder="Enter name"
//                                     {...field}
//                                     className={`input-field ${errors.name ? "error-border" : ""}`}
//                                 />
//                             )}
//                         />
//                         {errors.name && <h5 className="error-message">{errors.name.message}</h5>}
//                     </div>
//                     <div>
//                         <h4 className="label">Enter Email</h4>
//                         <Controller
//                             name="email"
//                             control={control}
//                             rules={{
//                                 required: "Email is required",
//                                 pattern: {
//                                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                     message: "Invalid email address",
//                                 },
//                             }}
//                             render={({ field }) => (
//                                 <input
//                                     placeholder="Enter email"
//                                     {...field}
//                                     className={`input-field ${errors.email ? "error-border" : ""}`}
//                                 />
//                             )}
//                         />
//                         {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
//                     </div>
//                     {/* <div>
//                         <h4 className="label">Password</h4>
//                         <Controller
//                             name="password"
//                             control={control}
//                             rules={{
//                                 required: "Password is required",
//                                 minLength: {
//                                     value: 8,
//                                     message: "Minimum length must be 8",
//                                 },
//                                 maxLength: {
//                                     value: 50,
//                                     message: "Maximum length must be 50",
//                                 }

//                             }}
//                             render={({ field }) => (
//                                 <input
//                                     placeholder="Enter password"
//                                     {...field}
//                                     className={`input-field ${errors.password ? "error-border" : ""}`}
//                                 />
//                             )}
//                         />
//                         {errors.password && <h5 className="error-message">{errors.password.message}</h5>}
//                     </div> */}
//                     <Password />
//                     {/* <div>
//                         <h4 className="label">Confirm Password</h4>
//                         <Controller
//                             name="confirmPassword"
//                             control={control}
//                             rules={{
//                                 required: "Confirm Password is required",
//                                 minLength: {
//                                     value: 8,
//                                     message: "Minimum length must be 8",
//                                 },
//                                 maxLength: {
//                                     value: 50,
//                                     message: "Maximum length must be 50",
//                                 },
//                                 validate: (value) => value === watch('password') || "Password should match"

//                             }}
//                             render={({ field }) => (
//                                 <input
//                                     placeholder="Enter Confirm password"
//                                     {...field}
//                                     className={`input-field ${errors.confirmPassword ? "error-border" : ""}`}
//                                 />
//                             )}
//                         />
//                         {errors.confirmPassword && <h5 className="error-message">{errors.confirmPassword.message}</h5>}
//                     </div> */}
//                     <div>
//                         <h4 className="label">Enter Phone Number</h4>
//                         <Controller
//                             name="phone"
//                             control={control}
//                             rules={{
//                                 required: "Phone Number is required",
//                                 minLength: {
//                                     value: 8,
//                                     message: "Minimum length must be 8",
//                                 },
//                                 maxLength: {
//                                     value: 15,
//                                     message: "Maximum length must be 11",
//                                 }

//                             }}
//                             render={({ field }) => (
//                                 <input
//                                     placeholder="Enter Phone Number"
//                                     {...field}
//                                     className={`input-field ${errors.phone ? "error-border" : ""}`}
//                                 />
//                             )}
//                         />
//                         {errors.name && <h5 className="error-message">{errors.phone.message}</h5>}
//                     </div>
//                     <button type="submit" className="submit-button">Submit</button>
//                     {/* <p>Enter Name :</p>
//                     <input type="text" label="name" onChange={(e) => setName(e.target.value)} />
//                     <p>Enter Email :</p>
//                     <input type="text" label="email" onChange={(e) => setEmail(e.target.value)} />
//                     <p>Enter Password</p>
//                     <input type="text" label="password" onChange={(e) => setPassword(e.target.value)} />
//                     <p>Confirm Pssword</p>
//                     <input type="text" label="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
//                     <p>Enter Phone Number</p>
//                     <input type="text" label="phone" onChange={(e) => setPhone(e.target.value)} />
//                     <button type="submit">Sign up</button> */}
//                 </form>
//             </div>
//         </>
//     )

// }
// export default Signup;
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
import Password from '../../components/form/password';
const Signup = () => {
    const [passwordFieldType, setPasswordFieldType] = useState("password");
    // const change = () => {
    //     console.log("Button clicked");
    //     setPasswordFieldType(prevType => prevType === "text" ? "password" : "text");
    // }
    // console.log(passwordFieldType)
    const navigate = useNavigate();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [phone, setPhone] = useState("")
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
        watch,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
        }
    })
    const { signup, signupData } = UseAuthHook()


    const handleChange = () => {
        // e.preventDefault();
        const data = {
            name: getValues("name"),
            email: getValues("email"),
            password: getValues("password"),
            confirmPassword: getValues("confirmPassword"),
            phone: getValues("phone")
        }
        console.log(`user ${data}`)
        console.log(data)

        signup(data);
        navigate("/login");
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(handleChange)}>
                    <div>
                        <h4 className="label">Enter Name</h4>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Minimum length must be 2",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length must be 50",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter name"
                                    {...field}
                                    className={`input-field ${errors.name ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.name && <h5 className="error-message">{errors.name.message}</h5>}
                    </div>
                    <div>
                        <h4 className="label">Enter Email</h4>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter email"
                                    {...field}
                                    className={`input-field ${errors.email ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
                    </div>
                    {/* <div>
                        <h4 className="label">Password</h4>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Minimum length must be 8",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length must be 50",
                                }

                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter password"
                                    {...field}
                                    className={`input-field ${errors.password ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.password && <h5 className="error-message">{errors.password.message}</h5>}
                    </div> */}
                    <Password control={control} errors={errors} watch={watch} />
                    {/* <div>
                        <h4 className="label">Confirm Password</h4>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: "Confirm Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Minimum length must be 8",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length must be 50",
                                },
                                validate: (value) => value === watch('password') || "Password should match"

                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter Confirm password"
                                    {...field}
                                    className={`input-field ${errors.confirmPassword ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.confirmPassword && <h5 className="error-message">{errors.confirmPassword.message}</h5>}
                    </div> */}
                    <div>
                        <h4 className="label">Enter Phone Number</h4>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: "Phone Number is required",
                                minLength: {
                                    value: 8,
                                    message: "Minimum length must be 8",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Maximum length must be 11",
                                }

                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter Phone Number"
                                    {...field}
                                    className={`input-field ${errors.phone ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.name && <h5 className="error-message">{errors.phone.message}</h5>}
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                    {/* <p>Enter Name :</p>
                    <input type="text" label="name" onChange={(e) => setName(e.target.value)} />
                    <p>Enter Email :</p>
                    <input type="text" label="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Enter Password</p>
                    <input type="text" label="password" onChange={(e) => setPassword(e.target.value)} />
                    <p>Confirm Pssword</p>
                    <input type="text" label="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p>Enter Phone Number</p>
                    <input type="text" label="phone" onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit">Sign up</button> */}
                </form>
            </div>
        </>
    )

}
export default Signup;