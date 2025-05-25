import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/favoritesSlice";
import {
  FaHeart,
  FaUserFriends,
  FaCogs,
  FaGasPump,
  FaUtensils,
  FaSnowflake,
  FaBed,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

import styles from "./AdvertCard.module.css";

const AdvertCard = ({ advert, onClick }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.includes(advert.id);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(advert.id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const {
    name,
    price,
    location,
    rating,
    reviews,
    gallery,
    adults,
    transmission,
    engine,
    kitchen,
    airConditioner,
    beds,
    description,
  } = advert;

  return (
    <div
      className={styles.card}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${name}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <img
        src={gallery?.[0] || "/placeholder-image.jpg"}
        alt={name}
        className={styles.image}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <span className={styles.price}>
            €{price !== undefined ? price.toFixed(2) : "N/A"}
          </span>
        </div>

        <div className={styles.subInfo}>
          <span className={styles.rating}>
            <FaStar color="#FFC531" /> {rating || "N/A"} ({reviews?.length || 0}{" "}
            Reviews)
          </span>
          <span className={styles.location}>
            <FaMapMarkerAlt /> {location}
          </span>
        </div>

        <p className={styles.description}>
          {description
            ? description.length > 80
              ? description.slice(0, 80) + "..."
              : description
            : `Discover the amazing features of the ${name.toLowerCase()}.`}
        </p>

        <ul className={styles.features}>
          <li>
            <FaUserFriends /> {adults} adults
          </li>
          <li>
            <FaCogs /> {transmission}
          </li>
          <li>
            <FaGasPump /> {engine}
          </li>
          {kitchen && (
            <li>
              <FaUtensils /> Kitchen
            </li>
          )}
          {airConditioner && (
            <li>
              <FaSnowflake /> AC
            </li>
          )}
          <li>
            <FaBed /> {beds} beds
          </li>
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.showMore}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Show more
          </button>
          <button
            className={styles.favorite}
            onClick={handleToggleFavorite}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <FaHeart
              style={{
                color: isFavorite ? "#E44848" : "#ccc",
                transition: "color 0.3s",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
