import { useState, useEffect } from "react";
import { getAdverts } from "../../../api/adverts"; // presupunem că include reviews
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const adverts = await getAdverts();

        const allReviews = adverts
          .filter((ad) => Array.isArray(ad.reviews))
          .flatMap((ad) =>
            ad.reviews.map((review) => ({
              ...review,
              camperName: ad.name,
            }))
          );

        setReviews(allReviews);
      } catch (error) {
        console.error("Eroare la încărcarea recenziilor:", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (reviews.length === 0) return <p>No reviews available.</p>;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>What Our Clients Say</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 } }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <p>"{review.comment}"</p>
              <h4 className={styles.author}>– {review.reviewer_name}</h4>
              {review.camperName && (
                <p className={styles.camperInfo}>
                  For camper: <strong>{review.camperName}</strong>
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
