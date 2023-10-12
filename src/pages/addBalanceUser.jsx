import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import UseUserHook from "../hooks/useUserHook";
import Header from "../components/Header/header";
import "./addBalance.scss"
const AddBalanceUser = () => {
    const { balanceAdd, balance, setBalance } = UseUserHook();
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
    const handleAddBalance = (data) => {
        balanceAdd(data);
    }
    useEffect(() => {
        console.log(balance)
    }, [balance])
    return (
        <>
            <Header />
            <form onSubmit={handleSubmit(handleAddBalance)} className="form-div">
                <div>
                    <h3>Enter Balance</h3>
                    <Controller
                        name="balance"
                        control={control}
                        rules={{
                            required: "Balance is required",
                            min:
                            {
                                value: 11,
                                message: "unsufficient ammount"
                            },
                            max:
                            {
                                value: 5000,
                                message: "Cant add more than 5000"
                            },
                            pattern:
                            {
                                value: /^\d+(\.\d+)?$/,
                                message: "Invalid Input!"
                            }

                        }}
                        render={({ field }) => (
                            <input
                                type="text"
                                placeholder="Enter Balance of the User"
                                {...field}
                                className={`input1 ${errors.balance ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.balance && <h5 className="error-message">{errors.balance.message}</h5>}
                </div>
                <div>
                    <h3>Enter Currency</h3>
                    <Controller
                        name="currency"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="text"
                                placeholder="Enter Currency"
                                {...field}
                                className={`input1 ${errors.currency ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.currency && <h5 className="error-message">{errors.currency.message}</h5>}
                </div>
                <div>
                    <button className="btn" type="submit">Add Balance</button>
                </div>
            </form>
        </>
    )

}
export default AddBalanceUser;