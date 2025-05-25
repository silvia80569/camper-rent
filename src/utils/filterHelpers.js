export const equipmentMap = {
  AC: "airConditioner",
  Kitchen: "kitchen",
  TV: "TV",
  "Shower/WC": null,
  Automatic: null,
};

export const vehicleTypeMap = {
  Van: "panelTruck",
  "Fully Integrated": "fullyIntegrated",
  Alcove: "alcove",
};

/**
 * Verifică dacă anunțul îndeplinește filtrele pentru echipamente
 */
export const checkEquipmentMatch = (advert, equipment) => {
  if (equipment.length === 0) return true;

  return equipment.every((item) => {
    if (item === "Automatic") {
      return advert.transmission === "automatic";
    }
    if (item === "Shower/WC") {
      return advert.details?.shower === 1 && advert.details?.toilet === 1;
    }
    const key = equipmentMap[item];
    if (!key) return false;
    return advert.details?.[key] === 1;
  });
};

/**
 * Verifică dacă anunțul îndeplinește filtrul pentru tipul vehiculului
 */
export const checkVehicleTypeMatch = (advert, vehicleType) => {
  if (!vehicleType) return true;
  const mappedType = vehicleTypeMap[vehicleType];
  return advert.form === mappedType;
};

/**
 * Verifică dacă anunțul îndeplinește filtrul pentru locație (caută substring)
 */
export const checkLocationMatch = (advert, location) => {
  if (!location || location.trim() === "") return true;
  return advert.location.toLowerCase().includes(location.toLowerCase());
};
