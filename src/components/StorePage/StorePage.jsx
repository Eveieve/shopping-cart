
import Items from './Items';
import { useContext } from 'react';
import { ShopContext } from '../../App';

function StorePage() {
const {fetchedData} = useContext(ShopContext);

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
