import {useEffect, useState} from 'react';
import Items from './Items';


const fetchData = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://fakestoreapi.com/products", {mode: "cors"})
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

function StorePage() {
const{fetchedData, error, loading} = fetchData();

if(error) return <p>A network error was encountered!</p>
if (loading) return <>Loading...</>;


  return (
    (
      <>
    <p>Store page</p>
        <Items fetchedData = {fetchedData} />
      </>
    )
  )
}

export default StorePage;
