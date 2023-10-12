import { useParams } from "react-router-dom"
import UseProductHook from "../../hooks/useProductHooks";
import Header from "../../components/Header/header";
import Star from "../star";
import { useForm, Controller } from "react-hook-form"
import { useEffect, useState } from "react";
import UseUserHook from "../../hooks/useUserHook";
import styles from "./productDetails.module.scss"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ProductDetails = () => {
    const { fetchReview, getBookById, addRev, updateRev } = UseUserHook();
    const { productId } = useParams();
    const userId = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const [book, setBook] = useState("");
    const [reviewData, setReviewData] = useState();
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    let flag = false;
    const
        {
            getValues,
            control,
            handleSubmit,
            watch,
            formState: { errors }

        } = useForm()

    useEffect(() => {
        const review = async () => {
            try {
                const response = await fetchReview(productId);
                console.log(response.data);
                if (response.data.success) {
                    setReviewData(response.data.data);
                }
                else {
                    toast(response.data.message);
                }
            } catch (error) {
                console.log(error)
            }
        }
        review();

    }, [])
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await getBookById(productId)
                console.log(response.data)
                setBook(response.data.data);
            } catch (error) {
                console.log(error);

            }
        }
        fetchBook();
    }, [])
    console.log(reviewData);
    if (Array.isArray(reviewData)) {
        reviewData.map(rev => {
            if (rev.userId._id == userId) {
                flag = true;
            }
        });
    }
    console.log(book)
    const handleUpdate = () => {
        const comment = getValues("comment");
        const data =
        {
            bookId: productId,
            comment: comment,
            rating: rating
        }
        const update = async () => {
            try {
                const response = await updateRev(data)
                console.log(response.data)
                if (response.data.success) {
                    toast(response.data.message);
                    navigate("/")
                }
                else {
                    toast(response.data.message);
                }

            } catch (error) {
                console.log(error)
                toast(error.response.data.message)
            }
        }
        update();
    }
    const handleAdd = () => {
        const comment = getValues("comment");
        const data =
        {
            bookId: productId,
            comment: comment,
            rating: rating
        }
        const add = async () => {
            try {
                const response = await addRev(data)
                console.log(response.data)
                if (response.data.success) {
                    toast(response.data.message);
                    navigate("/")
                }
                else {
                    toast(response.data.message);
                }

            } catch (error) {
                console.log(error)
                toast(error.response.data.message)
            }
        }
        add();
    }
    useEffect(() => {
        console.log(reviewData)
    }, [reviewData])

    console.log(rating)
    return (
        <>
            <Header />
            <div className={styles.mid}>
                <div className="mid-left">
                    <div className="product-grid">
                        <div className="product-item">
                            <img src={book.image} alt={book.name} />
                            <h3>{book.name}</h3>
                            <p>Category: {book.category}</p>
                            <p>Price: ${book.price}</p>
                        </div>
                    </div>
                </div>
                <div className="mid-right">
                    <h3>Add Rating</h3>
                    {Array(5).fill().map((_, i) =>
                        <Star
                            key={i}
                            filled={i < rating}
                            onClick={() => setRating(i + 1)}
                        />
                    )}
                    <form className={styles.form}
                        onSubmit={flag ? handleSubmit(handleUpdate) : handleSubmit(handleAdd)}>
                        <Controller
                            name="comment"
                            control={control}
                            rules={{
                                minLength: {
                                    value: 4,
                                    message: "Minimum Length should be 4"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Not more than 100 characters"
                                }
                            }}
                            render={({ field }) =>
                            (
                                <input type="text" placeholder="Optional"
                                    {...field}
                                    className={`${styles.input} ${errors.comment ? styles['error-border'] : " "}`}
                                />
                            )
                            }
                        />
                        {errors.comment && <h5>{errors.comment.message}</h5>}
                        <button
                            className={styles.button}>
                            {flag ? 'Update' : 'Add'}
                        </button>
                    </form>
                </div>
            </div>
            <div>
                {reviewData && reviewData.map((review, index) => (
                    <div key={index} className="review">
                        <p><strong>Name:</strong> {review.userId.name}</p>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p><strong>Review:</strong> {review.comment}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductDetails;