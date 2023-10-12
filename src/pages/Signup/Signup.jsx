import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
import Password from '../../components/form/password';
import Header from "../../components/Header/header";
import "../Login/login.scss"
const Signup = () => {
    const { signInfo } = UseAuthHook();
    const [passwordFieldType, setPasswordFieldType] = useState("password");
    const passwordStyles = {
        backgroundColor: 'lightgray',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
    };
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
    useEffect(() => {
        console.log(signInfo);
    }, [signInfo])

    const handleChange = () => {
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
        console.log(signInfo);
    }

    return (
        <>
            <Header />
            <div className="footer-right">
                <form onSubmit={handleSubmit(handleChange)} className="form1">
                    <div>
                        <h4 className="title1">Enter Name</h4>
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
                                    className={`input1 ${errors.name ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.name && <h5 className="error-message">{errors.name.message}</h5>}
                    </div>
                    <div>
                        <h4 className="title1">Enter Email</h4>
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
                                    className={`input1 ${errors.email ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
                    </div>

                    <Password control={control} errors={errors} watch={watch} />
                    <div>
                        <h4 className="title1">Enter Phone Number</h4>
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
                                    className={`input1 ${errors.phone ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.phone && <h5 className="error-message">{errors.phone.message}</h5>}
                    </div>

                    <button type="submit" className="btn">Submit</button>+
                </form>
            </div>
        </>
    )

}
export default Signup;