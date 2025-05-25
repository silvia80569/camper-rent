import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import ContactForm from "../../home/ContactForm/ContactForm";

import styles from "./Reviews.module.css";

const Reviews = () => {
  const selectedAdvert = useSelector((state) => state.advert.selectedAdvert);

  if (
    !selectedAdvert ||
    !selectedAdvert.reviews ||
    selectedAdvert.reviews.length === 0
  ) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviewsContainer}>
      <ul className={styles.reviewsList}>
        {selectedAdvert.reviews.map((review, index) => {
          const initial = review.reviewer_name
            ? review.reviewer_name[0].toUpperCase()
            : "?";

          const stars = [];
          for (let i = 0; i < review.reviewer_rating; i++) {
            stars.push(<FaStar key={i} color="#FFC531" />);
          }

          return (
            <li key={index} className={styles.reviewItem}>
              <div className={styles.header}>
                <div className={styles.reviewerName}>
                  <span className={styles.initialCircle}>{initial}</span>
                  <strong>{review.reviewer_name}</strong>
                </div>
                <span className={styles.rating}>{stars}</span>
              </div>
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Reviews;
