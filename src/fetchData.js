import { useState, useEffect } from "react";

function fetchData() {
  const [fetchedData, setFetchedData] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect((routeParams="") => {
  fetch(`https://fakestoreapi.com/products/${routeParams}`, {mode: "cors"})
  .then((res) => {
    if(res.status>=400) {
      throw new Error("server error");
    }
    return res.json()
  })
  .then((res) => setFetchedData(res))
  .catch((error) => setError(error))
  .finally(() => setLoading(false)); //when it's finally resolved! 
}, [])
return {fetchedData, error, loading}
}

export default fetchData;