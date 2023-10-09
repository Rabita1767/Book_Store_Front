import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../redux/userSlice";
const Login = () => {
    const dispatch = useDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
        watch,
    } = useForm({
        defaultValues: {
            email: "rabita@gmail.com",
            password: "Rabita@1234",
        },
    });

    const { login, logInfo } = UseAuthHook();
    // const navigate = useNavigate();
    useEffect(() => {
        console.log(logInfo);
    }, [logInfo]);
    const handlerSubmit = (data) => {
        // const data = {
        //     email: getValues("email"),
        //     password: getValues("password"),
        // };
        console.log(data);
        login(data);
        // navigate('/addBook');
    };
    console.log(logInfo);
    // dispatch(addUserInfo(logInfo));
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(handlerSubmit)}>
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
                    <div>
                        <h4 className="label">Password</h4>
                        <Controller
                            name="password"
                            control={control}
                            // rules={{
                            //     required: "Password is required",
                            //     minLength: {
                            //         value: 8,
                            //         message: "Minimum length must be 8",
                            //     },
                            //     maxLength: {
                            //         value: 25,
                            //         message: "Maximum length must be 50",
                            //     },
                            //     pattern: {
                            //         value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
                            //         message:
                            //             "Password must be atleast 8 characters long,it should contain minimum one block letter,one smaill letter and one special character",
                            //     },
                            // }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter password"
                                    {...field}
                                    className={`input-field ${errors.password ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.name && <h5 className="error-message">{errors.password.message}</h5>}
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    {/* <p>Enter your email</p>
                    <input type="text" label="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Enter Your password</p>
                    <input type="text" label="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button> */}
                </form>
            </div>
        </>
    );
};
export default Login;

