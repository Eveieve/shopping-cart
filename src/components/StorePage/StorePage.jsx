import {useEffect, useState} from 'react';
import Items from './Items';

function StorePage() {
  const [fetchedData, setFetchedData] = useState(null);

useEffect(() => {
  fetch("https://fakestoreapi.com/products", {mode: "cors"})
  .then((res) => res.json())
  .then((res) => setFetchedData(res))
  .catch((error) => console.error(error));
}, [])

if (!fetchedData) return <>Loading...</>;


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
