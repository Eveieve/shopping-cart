
import Items from './Items';

// import fetchData from '../custom-hooks/fetchData';
import { useContext } from 'react';
import { ShopContext } from '../../App';

function StorePage() {
// const{fetchedData, error, loading} = fetchData();
const {fetchedData} = useContext(ShopContext);

// if(error) return <p>A network error was encountered!</p>
// if (loading) return <>Loading...</>;


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
