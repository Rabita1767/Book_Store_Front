import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../redux/userSlice";
import styles from "./login.module.scss"
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

        console.log(data);
        login(data);
    };
    console.log(logInfo);
    return (
        <>
            <div className="footer-right">
                <form onSubmit={handleSubmit(handlerSubmit)} className="form1">
                    <div>
                        <label htmlFor="" class="title1">Enter Your Name:</label>
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
                                <div>
                                    <input
                                        placeholder="Enter email"
                                        {...field}
                                        className={`f1 ${errors.email ? "error-border" : ""}`}
                                    />
                                </div>
                            )}
                        />
                        {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
                    </div>
                    <div>
                        <label htmlFor="" class="title1">Enter Your Password</label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <div>
                                    <input
                                        placeholder="Enter password"
                                        {...field}
                                        className={`f1 ${errors.password ? "error-border" : ""}`}
                                    />
                                </div>
                            )}
                        />
                        {errors.name && <h5 className="error-message">{errors.password.message}</h5>}
                    </div>
                    <button type="submit" className="btn2">
                        Submit
                    </button>
                </form>

            </div>
        </>
    );
};
export default Login;

