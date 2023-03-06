import { useEffect, useState } from "react";
import appService from "../Components/App/Appservices/AppService";
// takes endpoint and a path key to fetch a directory
const useGetApiDataFromEndpoint = (endpoint, key) => {
  // state holds the information later on fetched with axios through appService
  const [state, setState] = useState([]);
  // using useEffect to fetch data from the props passed to the component, so it only renders when dep. array changes
  useEffect(() => {
    // it uses async to let other code run while the api request is completed
    const renderData = async () => {
      try {
        const response = await appService.Get(endpoint);
        // if there is a response, it sets it to state or else returns an error
        if (response.data) {
          key && setState(response.data[key]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    renderData();
  }, [endpoint, key]);
  // returns the state
  return { state };
};

export default useGetApiDataFromEndpoint;
