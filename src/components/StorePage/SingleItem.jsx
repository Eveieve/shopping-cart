function SingleItem({ imageSrc, title, price }) {
 
  return (
    <>
      <div className="border-2 p-5">
        <img src={imageSrc} className = "h-4/6" />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </>
  );
}

export default SingleItem;