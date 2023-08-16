import SingleItem from "./SingleItem";

function Items({ fetchedData, }) {
console.log(fetchedData);

  const renderedItems = fetchedData.map((item) => (
    <SingleItem
      fetchedData={fetchedData}
      id={item.id}
      key={item.id}
      singleItem={item}
      imageSrc={item.image}
    />
  ));

  return (
    <>
      <div className="flex">{renderedItems}</div>
    </>
  );
}

export default Items;