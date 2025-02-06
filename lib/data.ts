import axios from "axios";

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/';

export const getAuto = async () => {
    try {
      const response = await axios.get('car?format=json');
      return response.data;
    } catch (error) {
      console.log(error);
    }
};

