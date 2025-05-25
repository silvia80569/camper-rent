/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedAdvert, clearSelectedAdvert } from "../redux/advertSlice";

import { getAdverts } from "../api/adverts.js";
import AdvertCard from "../components/catalog/AdvertCard/AdvertCard.jsx";
import Button from "../components/Button/Button";
import AdvertModal from "../components/modal/AdvertModal/AdvertModal.jsx";
import AdvertModalContent from "../components/modal/AdvertModalContent/AdvertModalContent.jsx";
import Filters from "../components/catalog/Filters/Filters.jsx";
import {
  checkEquipmentMatch,
  checkVehicleTypeMatch,
  checkLocationMatch,
} from "../utils/filterHelpers.js";

import styles from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();

  const { location, equipment, vehicleType } = useSelector(
    (state) => state.filters
  );

  const selectedAdvert = useSelector((state) => state.advert.selectedAdvert);

  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAdverts();
        const normalizedData = data.map((item, index) => ({
          ...item,
          id: item._id || item.id || `temp-id-${index}`,
        }));
        setAdverts(normalizedData);
      } catch (error) {
        setError("Error loading adverts.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredAdverts = useMemo(() => {
    return adverts.filter((advert) => {
      return (
        checkLocationMatch(advert, location) &&
        checkEquipmentMatch(advert, equipment) &&
        checkVehicleTypeMatch(advert, vehicleType)
      );
    });
  }, [adverts, location, equipment, vehicleType]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleSelectAdvert = (advert) => {
    dispatch(setSelectedAdvert(advert));
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedAdvert());
  };

  return (
    <div className={styles.catalogContainer}>
      <Filters />

      <div className={styles.cardsArea}>
        {loading && <p className={styles.statusMessage}>Loading adverts...</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}

        {!loading && !error && filteredAdverts.length === 0 && (
          <p className={styles.statusMessage}>No results match your filters.</p>
        )}

        {!loading &&
          !error &&
          filteredAdverts
            .slice(0, visibleCount)
            .map((advert) => (
              <AdvertCard
                key={advert.id}
                advert={advert}
                onClick={() => handleSelectAdvert(advert)}
              />
            ))}

        {!loading && !error && visibleCount < filteredAdverts.length && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}

        {selectedAdvert && (
          <AdvertModal isOpen={true} onClose={handleCloseModal}>
            <AdvertModalContent advert={selectedAdvert} />
          </AdvertModal>
        )}
      </div>
    </div>
  );
};

export default Catalog;
