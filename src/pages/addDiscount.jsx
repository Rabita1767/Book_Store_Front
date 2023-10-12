import { useForm, Controller } from "react-hook-form"
import UseProductHook from "../hooks/useProductHooks";
import axiosInstance from "../util/AxiosInstance";
import { useEffect } from "react";
import Header from "../components/Header/header";
const AddDiscount = () => {
    const { addProductDiscount, setDiscount, discount } = UseProductHook()
    const {
        control,
        formState: { errors },
        getValues,
        handleSubmit,
        watch
    } = useForm()
    const handleOnSubmit = (data) => {

        addProductDiscount(data)
        console.log(data)


    }
    return (
        <>
            <Header />
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <h3>Enter Id</h3>
                    <Controller
                        name="id"
                        control={control}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Book Id"
                                {...field}
                                className={`input-field ${errors._id ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.id && <h5 className="error-message">{errors.id.message}</h5>}
                </div>
                <div>
                    <h3>Enter discountPercentage</h3>
                    <Controller
                        name="discountPercentage"
                        control={control}
                        rules={{
                            min:
                            {
                                value: 2,
                                message: "Min value must be 2"
                            },
                            max:
                            {
                                value: 70,
                                message: "Max value is 70"
                            },
                            pattern:
                            {
                                value: "^\d+$",
                                message: "Invalid Book discountPercentage"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter discountPercentage of the Book"
                                {...field}
                                className={`input-field ${errors.discountPercentage ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.discountPercentage && <h5 className="error-message">{errors.discountPercentage.message}</h5>}
                </div>
                <div>
                    <h3>Enter discountStart</h3>
                    <Controller
                        name="discountStart"
                        control={control}
                        rules={{
                            pattern:
                            {
                                value: "^\d{4}-\d{2}-\d{2}$",
                                message: "Invalid Book Publisher"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="date"
                                placeholder="Enter discountStart of the Book"
                                {...field}
                                className={`input-field ${errors.discountStart ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.discountStart && <h5 className="error-message">{errors.discountStart.message}</h5>}
                </div>
                <div>
                    <h3>Enter discountEnd</h3>
                    <Controller
                        name="discountEnd"
                        control={control}
                        rules={{
                            pattern:
                            {
                                value: "^\d{4}-\d{2}-\d{2}$",
                                message: "Invalid Book discountEnd"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="date"
                                placeholder="Enter discountEnd of the Book"
                                {...field}
                                className={`input-field ${errors.discountEnd ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.discountEnd && <h5 className="error-message">{errors.discountEnd.message}</h5>}
                </div>
                <div>
                    <button type="submit">Add Discount</button>
                </div>
            </form>
        </>
    )



}
export default AddDiscount;