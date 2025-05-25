import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [], // ex: ["AC", "TV"]
  vehicleType: "", // ex: "Van"
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const item = action.payload;
      state.equipment.includes(item)
        ? (state.equipment = state.equipment.filter((eq) => eq !== item))
        : state.equipment.push(item);
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, toggleEquipment, setVehicleType, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
