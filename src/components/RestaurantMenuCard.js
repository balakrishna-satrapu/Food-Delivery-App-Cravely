import { restaurantsMenu } from "../utils/restaurantsMenu";
import { useParams } from "react-router-dom";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  
  const resObj = "res" + resId;

  const menu = restaurantsMenu[resObj];

  const { name, id, avgRating, cuisines, sla, totalRatings } =
    menu.data?.cards[2]?.card?.card?.info;

  const itemCards =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.itemCards ||
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.categories[0]?.itemCards;

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="font-medium text-3xl">{name}</h1>
      <h3 className="mt-2">
        {avgRating} stars - {totalRatings}
      </h3>
      <h3 className="mt-2">{cuisines.join(", ")}</h3>
      <h3 className="mt-2">{sla.deliveryTime} minutes</h3>
      <h2 className="my-5 font-medium text-2xl">Menu</h2>
      <ul className="flex flex-col gap-3">
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id} className="w-2xl flex p-4 gap-5 justify-between border border-solid border-grey-400">
              <div className="w-md">
                <h4>{item?.card?.info?.name}</h4>
                <h4>₹{item?.card?.info?.price / 100}</h4>
                <h4>
                  {item?.card?.info?.ratings.aggregatedRating.rating} -{" "}
                  {
                    itemCards[0]?.card?.info?.ratings.aggregatedRating
                      .ratingCount
                  }
                </h4>
                <p>{item?.card?.info?.description}</p>
              </div>
              <div>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/" +
                    item?.card?.info?.imageId
                  }
                  alt={item?.card?.info?.name}
                  className="w-38 h-30 object-cover"
                ></img>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenuCard;
