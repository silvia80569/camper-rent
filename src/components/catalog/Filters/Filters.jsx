import { useSelector, useDispatch } from "react-redux";
import Button from "../../Button/Button";
import FilterButton from "../FilterButton/FilterButton";
import {
  FaTv,
  FaShower,
  FaSnowflake,
  FaUtensils,
  FaCogs,
  FaShuttleVan,
  FaBus,
  FaTruckMoving,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  setLocation,
  toggleEquipment,
  setVehicleType,
  resetFilters,
} from "../../../redux/filtersSlice";

import styles from "./Filters.module.css";

const equipmentIcons = {
  AC: <FaSnowflake />,
  Automatic: <FaCogs />,
  Kitchen: <FaUtensils />,
  TV: <FaTv />,
  "Shower/WC": <FaShower />,
};

const vehicleTypeIcons = {
  Van: <FaShuttleVan />,
  "Fully Integrated": <FaBus />,
  Alcove: <FaTruckMoving />,
};

const Filters = () => {
  const dispatch = useDispatch();
  const { location, equipment, vehicleType } = useSelector(
    (state) => state.filters
  );

  return (
    <aside className={styles.filters}>
      <div className={styles.location}>
        <p>Location</p>
        <label htmlFor="locationInput" className={styles.locationLabel}>
          <FaMapMarkerAlt className={styles.locationIcon} />
          <input
            id="locationInput"
            type="text"
            placeholder="Search location"
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.group}>
        <h3>Filters</h3>
        <h4>Vehicle equipment</h4>
        <div className={styles.equipment}>
          {Object.keys(equipmentIcons).map((item) => (
            <FilterButton
              key={item}
              label={item}
              icon={equipmentIcons[item]}
              isActive={equipment.includes(item)}
              onClick={() => dispatch(toggleEquipment(item))}
            />
          ))}
        </div>

        <h4>Vehicle type</h4>
        <div className={styles.types}>
          {Object.keys(vehicleTypeIcons).map((type) => (
            <FilterButton
              key={type}
              label={type}
              icon={vehicleTypeIcons[type]}
              isActive={vehicleType === type}
              onClick={() => dispatch(setVehicleType(type))}
            />
          ))}
        </div>

        <Button onClick={() => dispatch(resetFilters())}>Reset Filters</Button>
      </div>
    </aside>
  );
};

export default Filters;
