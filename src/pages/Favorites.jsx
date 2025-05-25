import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAdverts } from "../api/adverts";
import AdvertCard from "../components/catalog/AdvertCard/AdvertCard";
import AdvertModal from "../components/modal/AdvertModal/AdvertModal";
import AdvertModalContent from "../components/modal/AdvertModalContent/AdvertModalContent";

import styles from "./Favorites.module.css";

const Favorites = () => {
  const [allAdverts, setAllAdverts] = useState([]);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const favoriteIds = useSelector((state) => state.favorites.items);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const data = await getAdverts();
        const normalizedData = data.map((item) => ({
          ...item,
          id: item._id,
        }));
        setAllAdverts(normalizedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAdverts();
  }, []);

  const favoriteAdverts = allAdverts.filter((advert) =>
    favoriteIds.includes(advert.id)
  );

  const handleSelectAdvert = (advert) => {
    setSelectedAdvert(advert);
  };

  const handleCloseModal = () => {
    setSelectedAdvert(null);
  };

  return (
    <div className={styles.favoritesContainer}>
      {favoriteAdverts.length > 0 ? (
        <div className={styles.cardsGrid}>
          {favoriteAdverts.map((advert) => (
            <AdvertCard
              key={advert.id}
              advert={advert}
              onClick={() => handleSelectAdvert(advert)}
            />
          ))}
        </div>
      ) : (
        <p className={styles.noFavoritesMessage}>
          You haven't added any adverts to favorites yet.
        </p>
      )}

      {selectedAdvert && (
        <AdvertModal isOpen={true} onClose={handleCloseModal}>
          <AdvertModalContent advert={selectedAdvert} />
        </AdvertModal>
      )}
    </div>
  );
};

export default Favorites;
