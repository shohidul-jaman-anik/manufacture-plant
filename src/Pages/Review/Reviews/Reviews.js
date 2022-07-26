import React from 'react';
import './Reviews.css';
import Review from '../Review/Review';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
const Reviews = () => {
    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch('https://intense-woodland-21531.herokuapp.com/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [reviews]);

    const { data: reviews, isLoading, error, data } = useQuery("review", () => fetch('https://infinite-citadel-42199.herokuapp.com/reviews')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div >

            <div className='review-container container '>

                {
                    reviews?.map(studentReview => <Review
                        key={studentReview._id}
                        studentReview={studentReview}
                    ></Review>)

                }

            </div>
        </div>
    );
};

export default Reviews;