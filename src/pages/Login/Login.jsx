import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/header";
import { addUserInfo } from "../../redux/userSlice";
import "./login.scss"
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
    useEffect(() => {
        console.log(logInfo);
    }, [logInfo]);
    const handlerSubmit = (data) => {

        console.log(data);
        login(data);
    };
    console.log(logInfo);
    return (
        <>
            <Header />
            <div className="footer-right">
                <form onSubmit={handleSubmit(handlerSubmit)} className="form1">
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
                                <div className="textbox">
                                    <input
                                        placeholder="Enter email"
                                        {...field}
                                        className={`input-field ${errors.email ? "error-border" : ""}`}
                                    />
                                </div>
                            )}
                        />
                        {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
                    </div>
                    <div>
                        <h4 className="label">Password</h4>
                        <Controller
                            name="password"
                            control={control}
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
                </form>

            </div>
        </>
    );
};
export default Login;

