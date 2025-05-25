import { useState } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

import styles from "./AdvertModalContent.module.css";

const AdvertModalContent = ({ advert }) => {
  const [activeTab, setActiveTab] = useState("features");

  const { name, price, location, rating, reviews, gallery, description } =
    advert;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.subInfo}>
        <span>
          <FaStar color="#FFC531" /> {rating} ({reviews.length} Reviews)
        </span>
        <span>
          <FaMapMarkerAlt /> {location}
        </span>
      </div>

      <p className={styles.price}>€{price.toFixed(2)}</p>

      <div className={styles.gallery}>
        {gallery.slice(0, 3).map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`${name} ${index + 1}`} />
        ))}
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.tabs}>
        <button
          className={activeTab === "features" ? styles.active : ""}
          onClick={() => setActiveTab("features")}
          role="tab"
          aria-selected={activeTab === "features"}
          aria-controls="features-panel"
          id="features-tab"
        >
          Features
        </button>
        <button
          className={activeTab === "reviews" ? styles.active : ""}
          onClick={() => setActiveTab("reviews")}
          role="tab"
          aria-selected={activeTab === "reviews"}
          aria-controls="reviews-panel"
          id="reviews-tab"
        >
          Reviews
        </button>
      </div>

      <div
        id="features-panel"
        role="tabpanel"
        aria-labelledby="features-tab"
        hidden={activeTab !== "features"}
      >
        {activeTab === "features" && <Features advert={advert} />}
      </div>
      <div
        id="reviews-panel"
        role="tabpanel"
        aria-labelledby="reviews-tab"
        hidden={activeTab !== "reviews"}
      >
        {activeTab === "reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default AdvertModalContent;
