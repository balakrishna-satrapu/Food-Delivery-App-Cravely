import { restaurantsMenu } from "../utlis/restaurantsMenu";
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
    <div className="restaurant-menu-container">
      <h1>{name}</h1>
      <h3>
        {avgRating} stars - {totalRatings}
      </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla.deliveryTime} minutes</h3>
      <h2>Menu</h2>
      <ul className="menu-items-list">
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id} className="menu-item">
              <div className="menu-item-content">
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
              <div className="menu-item-image">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/" +
                    item?.card?.info?.imageId
                  }
                  alt={item?.card?.info?.name}
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
