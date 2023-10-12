import { useForm, Controller } from "react-hook-form";
import UseProductHook from "../hooks/useProductHooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/header";
import "./updateBook.scss"
const UpdateBook = () => {
    const { updateId } = useParams();
    const { upBook, getBookInfo, updatedBook, setUpdatedBookInfo, updatedBookInfo } = UseProductHook();
    useEffect(() => {
        console.log(upBook);
    }, [upBook])
    useEffect(() => {
        getBookInfo(updateId);
    }, [])
    // getBookInfo(updateId);

    console.log(updateId);
    // const defaultValues = {
    //     image: '', // Initialize with an empty string or the default value you prefer
    //     isbn: upBook.isbn, // Initialize with an empty string or the default value you prefer
    //     name: '', // Initialize with an empty string or the default value you prefer
    //     price: '', // Initialize with an empty string or the default value you prefer
    //     category: '', // Initialize with an empty string or the default value you prefer
    //     stock: '', // Initialize with an empty string or the default value you prefer
    //     author: '', // Initialize with an empty string or the default value you prefer
    //     publisher: '', // Initialize with an empty string or the default value you prefer
    //     discountPercentage: '', // Initialize with an empty string or the default value you prefer
    //     discountStart: '', // Initialize with an empty string or the default value you prefer
    //     discountEnd: '', // Initialize with an empty string or the default value you prefer
    // };

    const {
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
        control
    } = useForm(
        {
            // defaultValues
        }
    )
    console.log(upBook)
    // useEffect(() => {
    //     setValue("image", upBook.image);
    //     setValue("isbn", upBook.isbn);
    //     setValue("name", upBook.name);
    //     setValue("price", upBook.price);
    //     setValue("category", upBook.category);
    //     setValue("stock", upBook.stock);
    //     setValue("author", upBook.author);
    //     setValue("publisher", upBook.publisher);
    //     setValue("discountPercentage", upBook.discountPercentage);
    //     setValue("discountStart", upBook.discountStart);
    //     setValue("discountEnd", upBook.discountEnd);
    // }, [upBook]);
    const handleonSubmit = (data) => {
        updatedBook(data, updateId)
    }
    return (
        <>
            <Header />
            <form onSubmit={handleSubmit(handleonSubmit)} className="form">
                <div>
                    <h4>Enter Image</h4>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Insert Image"
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <h3>Enter Book ISBN</h3>
                    <Controller
                        name="isbn"
                        control={control}
                        placeholder="Enter Book Isbn"
                        rules={
                            {
                                minLength:
                                {
                                    value: 13,
                                    message: "Minnimum Length will be 13"
                                },
                                maxLength:
                                {
                                    value: 13,
                                    message: "Maximum Length will be 13"
                                }
                            }
                        }
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Book Isbn"
                                {...field}
                                className={`input-field ${errors.isbn ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.isbn && <h5 className="error-message">{errors.isbn.message}</h5>}
                </div>
                <div>
                    <h3>Enter Name</h3>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            minLength:
                            {
                                value: 2,
                                message: "Minimum Length must be 2"
                            },
                            maxLength:
                            {
                                value: 30,
                                message: "Maximum Length is 30"
                            },
                            pattern:
                            {
                                value: "^[A - Za - z0 - 9 & ',.():;?! -]+$",
                                message: "Invalid Book Title"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Name of the Book"
                                {...field}
                                className={`input-field ${errors.name ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.name && <h5 className="error-message">{errors.name.message}</h5>}
                </div>
                <div>
                    <h3>Enter Price</h3>
                    <Controller
                        name="price"
                        control={control}
                        rules={{
                            maxLength:
                            {
                                value: 10,
                                message: "Maximum Length is 10"
                            },
                            max:
                            {
                                value: 4000,
                                message: "Limit exceeded for price"
                            },
                            pattern:
                            {
                                value: "^\d+(\.\d+)?$",
                                message: "Invalid Price Format"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Price of the Book"
                                {...field}
                                className={`input-field ${errors.price ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.price && <h5 className="error-message">{errors.price.message}</h5>}
                </div>
                <div>
                    <h3>Enter Category</h3>
                    <Controller
                        name="category"
                        control={control}
                        rules={{
                            minLength:
                            {
                                value: 2,
                                message: "Minimum Length must be 2"
                            },
                            maxLength:
                            {
                                value: 30,
                                message: "Maximum Length is 30"
                            },
                            pattern:
                            {
                                value: "^[A-Za-z]+$",
                                message: "Invalid Book Title"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Category of the Book"
                                {...field}
                                className={`input-field ${errors.category ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.category && <h5 className="error-message">{errors.category.message}</h5>}
                </div>
                <div>
                    <h3>Enter Stock</h3>
                    <Controller
                        name="stock"
                        control={control}
                        rules={{
                            min:
                            {
                                value: 0,
                                message: "Min Length must be 0"
                            },
                            max:
                            {
                                value: 3000,
                                message: "Max Length is 3000"
                            },

                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter stock of the Book"
                                {...field}
                                className={`input-field ${errors.stock ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.stock && <h5 className="error-message">{errors.stock.message}</h5>}
                </div>
                <div>
                    <h3>Enter Author</h3>
                    <Controller
                        name="author"
                        control={control}
                        rules={{
                            minLength:
                            {
                                value: 2,
                                message: "Minimum Length must be 2"
                            },
                            maxLength:
                            {
                                value: 30,
                                message: "Maximum Length is 30"
                            },
                            pattern:
                            {
                                value: "^[A-Za-z]+$",
                                message: "Invalid Book Author"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Author of the Book"
                                {...field}
                                className={`input-field ${errors.author ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.author && <h5 className="error-message">{errors.author.message}</h5>}
                </div>
                <div>
                    <h3>Enter Publisher</h3>
                    <Controller
                        name="publisher"
                        control={control}
                        rules={{
                            minLength:
                            {
                                value: 2,
                                message: "Minimum Length must be 2"
                            },
                            maxLength:
                            {
                                value: 30,
                                message: "Maximum Length is 30"
                            },
                            pattern:
                            {
                                value: "^[A-Za-z]+$",
                                message: "Invalid Book Publisher"
                            }
                        }}
                        render={({ field }) =>
                        (
                            <input type="text"
                                placeholder="Enter Publisher of the Book"
                                {...field}
                                className={`input-field ${errors.publisher ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.publisher && <h5 className="error-message">{errors.publisher.message}</h5>}
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
                    <button type="submit">Update Book</button>
                </div>
            </form>
        </>
    )

}
export default UpdateBook;