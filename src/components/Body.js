import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utlis/mockData";
import { CDN_URL } from "../utlis/constants";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">search</div>
      <div className="restaurant-container">
        {restaurants.map( restaurant => (
            <RestaurantCard
                key={restaurant.info.id}
                image={CDN_URL + restaurant.info.cloudinaryImageId}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines.join(", ")}
                rating={restaurant.info.avgRatingString}
                deliveryTime={`${restaurant.info.sla.deliveryTime} minutes`}
            />
        ))}
      </div>
    </div>
  );
};

export default Body;
