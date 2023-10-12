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
    const navigate = useNavigate();
    const [reviewData, setReviewData] = useState("");
    const userId = localStorage.getItem("id");
    const { addReview, reviewInfo, setReviewInfo, fetchProductReviewById, fetchReview } = UseUserHook();
    const
        {
            getValues,
            control,
            handleSubmit,
            watch,
            formState: { errors }

        } = useForm()
    let flag = false;
    const { productId } = useParams();
    const [rating, setRating] = useState(0);
    const { fetchProductById, setParam, param } = UseProductHook();
    const { findProductReview, setAllReview, allReview } = UseUserHook();
    useEffect(() => {
        findProductReview(productId)
    }, [])
    useEffect(() => {
        console.log(allReview)
    }, [allReview])
    allReview.map(review => {
        if (review.userId == userId) {
            flag = true;
        }
    });

    useEffect(() => {
        fetchProductById(productId);

    }, [])
    useEffect(() => {
        console.log(reviewInfo)
    }, [reviewInfo])
    console.log(rating)
    const handleAdd = () => {
        const comment = getValues("comment");
        const data =
        {
            bookId: productId,
            comment: comment,
            rating: rating
        }
        addReview(data);

    }
    console.log(productId)
    const handleUpdate = () => {
        const comment = getValues("comment");
        const data =
        {
            bookId: productId,
            comment: comment,
            rating: rating
        }
        fetchProductReviewById(data);
    }
    useEffect(() => {
        console.log(reviewInfo);
    }, [reviewInfo])
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
    return (
        <>
            <Header />
            <div>
                <div className="product-grid">
                    {param && param.map((item) => (
                        <div key={item.id} className="product-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Category: {item.category}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                </div>
                <div>
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

            <div className="tbl">
                <table border="2px">
                    <thead>
                        <tr>
                            {/* <th>Name</th> */}
                            <th>Comment</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody className="t1">
                        {reviewData && reviewData.map((review, index) => (
                            <tr key={index}>
                                {/* <td>{review.userId.name}</td> */}
                                <td>{review.comment}</td>
                                <td>{review.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )


}
export default ProductDetails