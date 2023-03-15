import { createContext, useContext, useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";

const ReviewsContext = createContext(null);

const ReviewsProvider = ({ children, setErrors }) => {
    
    const [reviews, setReviews] = useState([]);
    const {loggedIn} = useContext(UsersContext);

    useEffect(() => {
        if(loggedIn){
          fetch("/reviews")
            .then(response => response.json())
            .then(data => setReviews(data))
        }
      }, [loggedIn]);

    async function addReview(event, reviewObj) {
        event.preventDefault()
        const response = await fetch("/reviews", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewObj),
        });
        const data = await (response).json();
        if(response.ok) {
          setReviews([data, ...reviews]);
          } else {
            setErrors(data.errors)
          }
    };

    const handleDeleteReview = (deletedReview) => {
        const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id);
        setReviews(updatedReviews)
    };

    const editReview = (updatedReview) => {
        const updatedReviews = reviews.map(review => {
          if(updatedReview.id === review.id) {
            return updatedReview
          } else {
            return review;
          }
        })
        setReviews(updatedReviews)
    };

    return(
        <ReviewsContext.Provider value={{ reviews, setReviews, addReview, handleDeleteReview, editReview }}>{ children }</ReviewsContext.Provider>
    )
};

export { ReviewsContext, ReviewsProvider }