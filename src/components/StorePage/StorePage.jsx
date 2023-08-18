
import Items from './Items';

import fetchData from '../custom-hooks/fetchData';

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
