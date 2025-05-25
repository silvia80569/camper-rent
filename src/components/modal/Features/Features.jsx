import {
  FaUserFriends,
  FaCogs,
  FaSnowflake,
  FaGasPump,
  FaUtensils,
  FaBed,
  FaCompactDisc,
  FaBroadcastTower,
  FaBurn,
  FaTruckMoving,
  FaRulerHorizontal,
  FaRulerVertical,
  FaOilCan,
} from "react-icons/fa";
import ContactForm from "../../home/ContactForm/ContactForm";

import styles from "./Features.module.css";

const Features = ({ advert }) => {
  const {
    adults,
    transmission,
    engine,
    kitchen,
    beds,
    airConditioner,
    cd,
    radio,
    hob,
    details,
  } = advert;

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresList}>
        <ul className={styles.badges}>
          <li>
            <FaUserFriends /> {adults} adults
          </li>
          <li>
            <FaCogs /> {transmission}
          </li>
          <li>
            <FaSnowflake /> AC
          </li>
          <li>
            <FaGasPump /> {engine}
          </li>
          {kitchen && (
            <li>
              <FaUtensils /> Kitchen
            </li>
          )}
          <li>
            <FaBed /> {beds} beds
          </li>
          {airConditioner && (
            <li>
              <FaSnowflake /> Air conditioner
            </li>
          )}
          {cd && (
            <li>
              <FaCompactDisc /> CD
            </li>
          )}
          {radio && (
            <li>
              <FaBroadcastTower /> Radio
            </li>
          )}
          {hob && (
            <li>
              <FaBurn /> {hob} hob
            </li>
          )}
        </ul>
        <div className={styles.vehicleDetails}>
          <h4>Vehicle details</h4>
          <ul>
            <li>
              <span>Form</span>
              <span>
                <FaTruckMoving /> {details.form}
              </span>
            </li>
            <li>
              <span>Length</span>
              <span>
                <FaRulerHorizontal /> {details.length}
              </span>
            </li>
            <li>
              <span>Width</span>
              <span>
                <FaRulerHorizontal /> {details.width}
              </span>
            </li>
            <li>
              <span>Height</span>
              <span>
                <FaRulerVertical /> {details.height}
              </span>
            </li>
            <li>
              <span>Tank</span>
              <span>
                <FaOilCan /> {details.tank}
              </span>
            </li>
            <li>
              <span>Consumption</span>
              <span>{details.consumption}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.right}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Features;
