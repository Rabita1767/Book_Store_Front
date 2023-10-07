import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../hooks/useAuthHook";
import { useState } from "react";
const Form = () => {
    const { logInfo, login } = UseAuthHook();
    const {
        getValues,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm(
        {
            defaultValues:
            {
                email: "abc@gmail.com",
                password: "Abcd@1234"
            }
        }
    )
    const handleonSubmit = () => {
        const data =
        {
            email: getValues("email"),
            password: getValues("password")
        }
        login(data);
        console.log(logInfo);

    }
    return (
        <>
            <form onSubmit={handleSubmit(handleonSubmit)}>
                <div>
                    <h4>Enter your Email</h4>
                    <Controller
                        name="email"
                        control={control}
                        rules={
                            {
                                required: "Email is required",
                                pattern:
                                {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Format"
                                }
                            }
                        }
                        render={({ field }) =>
                        (
                            <input type="text" placeholder="Enter Email"
                                {...field}
                                className={`input fields ${errors.email ? "error-border" : " "}`}
                            />
                        )
                        }
                    />
                    {errors.email && <h5>{errors.email.message}</h5>}
                </div>
                <div>
                    <h4>Enter Password</h4>
                    <Controller
                        name="password"
                        control={control}
                        rules={
                            {
                                required: "Password is missing",
                                minLength: {
                                    value: 8,
                                    message: "Minimum length must be 8",
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Maximum length must be 50",
                                },
                                pattern:
                                {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
                                    message: "Password must be atleast 8 characters long,it should contain minimum one block letter,one smaill letter and one special character"
                                }
                            }
                        }
                        render={({ field }) => (
                            <input type="text"
                                {...field}
                                placeholder="Enter Your Password"
                                // className={errors.password ? "error-border" : " "}
                                className={`input-field ${errors.password ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.password && <h4>{errors.password.message}</h4>}
                </div>
                <div>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </>
    )

}
export default Form;