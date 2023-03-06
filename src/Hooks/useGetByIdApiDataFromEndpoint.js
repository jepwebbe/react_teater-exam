import { useEffect, useState } from "react";
import appService from "../Components/App/Appservices/AppService";
// takes endpoint, id and a path key to fetch a single item
const useGetByIdApiDataFromEndpoint = (endpoint, id, key) => {
  // state holds the information later on fetched with axios through appService
  const [state, setState] = useState([]);
  // using useEffect to run it when de. array changes, fetches data from the props passed to the component.
  useEffect(() => {
    // it uses async to let other code run while the api request is completed
    const renderData = async () => {
      try {
        const response = await appService.GetDetails(endpoint, id);
        // if there is a response, it sets it to state or else returns an error
        if (response.data) {
          key && setState(response.data[key]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    renderData();
      // returns the state

  }, [endpoint, id, key]);
  return { state };
};

export default useGetByIdApiDataFromEndpoint;
