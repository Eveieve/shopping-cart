import { Link } from "react-router-dom";

function SingleItem({ imageSrc, title, price, id }) {
 
  const shortenedTitle = title.slice(0,20);

  const routeParams = id;

  return (
      <Link to = {`./${routeParams}`} className="border-4 rounded-md p-3 flex flex-col">
        <img src={imageSrc} className = "h-4/6 m-auto" />
        <div className="flex p-5 justify-between">
          <p>{shortenedTitle}</p>
          <p>${price}</p>
        </div>
      </Link>
     
  );
}

export default SingleItem;