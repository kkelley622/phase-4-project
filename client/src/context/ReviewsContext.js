import { createContext, useContext, useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";

const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);
    const {loggedIn} = useContext(UsersContext)
    
    useEffect(() => {
      if(loggedIn) {
        fetch("/reviews")
        .then(response => response.json())
        .then(data => setReviews(data))
        }
      }, [loggedIn]);
    
    const addReview = (reviewObj) => {
        setReviews([...reviews, reviewObj])
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