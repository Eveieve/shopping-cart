import SingleItem from "./SingleItem";

function Items({ fetchedData, }) {
console.log(fetchedData);

  const renderedItems = fetchedData.map((item) => (
    <SingleItem
      title = {item.title}
      price = {item.price}
      fetchedData={fetchedData}
      id={item.id}
      key={item.id}
      singleItem={item}
      imageSrc={item.image}
    />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-5 px-8">{renderedItems}</div>
    </>
  );
}

export default Items;