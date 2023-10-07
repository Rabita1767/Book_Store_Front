// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import UseAuthHook from "../hooks/useAuthHook";
// const Password = () => {
//     const [passwordFieldType, setPasswordFieldType] = useState("password");
//     const change = () => {
//         console.log("Button clicked");
//         setPasswordFieldType(prevType => prevType === "text" ? "password" : "text");
//     }
//     console.log(passwordFieldType)
//     const navigate = useNavigate();
//     const {
//         handleSubmit,
//         control,
//         formState: { errors },
//         getValues,
//         watch,
//     } = useForm()
//     return (
//         <>
//             <div>
//                 <div>
//                     <h4 className="label">Password</h4>
//                     <Controller
//                         name="password"
//                         control={control}
//                         rules={{
//                             required: "Password is required",
//                             minLength: {
//                                 value: 8,
//                                 message: "Minimum length must be 8",
//                             },
//                             maxLength: {
//                                 value: 50,
//                                 message: "Maximum length must be 50",
//                             }

//                         }}
//                         render={({ field }) => (
//                             <input
//                                 type={passwordFieldType}
//                                 placeholder="Enter password"
//                                 {...field}
//                                 className={`input-field ${errors.password ? "error-border" : ""}`}
//                             />
//                         )}
//                     />
//                     {errors.password && <h5 className="error-message">{errors.password.message}</h5>}
//                     <button type="button" onClick={change}>
//                         Change
//                     </button>
//                 </div>
//                 <div>
//                     <h4 className="label">Confirm Password</h4>
//                     <Controller
//                         name="confirmPassword"
//                         control={control}
//                         rules={{
//                             required: "Confirm Password is required",
//                             minLength: {
//                                 value: 8,
//                                 message: "Minimum length must be 8",
//                             },
//                             maxLength: {
//                                 value: 50,
//                                 message: "Maximum length must be 50",
//                             },
//                             validate: (value) => value === watch('password') || "Password should match"

//                         }}
//                         render={({ field }) => (
//                             <input
//                                 placeholder="Enter Confirm password"
//                                 {...field}
//                                 className={`input-field ${errors.confirmPassword ? "error-border" : ""}`}
//                             />
//                         )}
//                     />
//                     {errors.confirmPassword && <h5 className="error-message">{errors.confirmPassword.message}</h5>}
//                 </div>
//             </div>
//         </>
//     )

// }
// export default Password;
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
const Password = ({ control, errors, watch }) => {
    const [passwordFieldType, setPasswordFieldType] = useState("password");
    const change = () => {
        console.log("Button clicked");
        setPasswordFieldType(prevType => prevType === "text" ? "password" : "text");
    }
    // console.log(passwordFieldType)
    const navigate = useNavigate();
    const {
        handleSubmit,
        // control,
        // formState: { errors },
        getValues,
        // watch,
    } = useForm()
    // console.log(errors)
    return (
        <>
            <div>
                <div>
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
                                type={passwordFieldType}
                                placeholder="Enter password"
                                {...field}
                                className={`input-field ${errors.password ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.password && <h5 className="error-message">{errors.password.message}</h5>}
                    <button type="button" onClick={change}>
                        Change
                    </button>
                </div>
                <div>
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
                            validate: (value) => {
                                // value === watch('password') || "Password should match"
                                console.log(watch('password'))
                                console.log(value)
                                if (watch('password') !== value) {
                                    return "Password should match"
                                }
                            }

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
                </div>
            </div>
        </>
    )

}
export default Password;