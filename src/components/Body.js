import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utlis/mockData";
import { CDN_URL } from "../utlis/constants";

const Body = () => {

  const [resList, setResList] = useState(restaurants);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          id="search-input"
          value={searchText}
        />
        <button onClick={() => {
            setResList(restaurants.filter( res => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
          }}
          className="search-button">
          Search
        </button>
        <button 
          onClick={() => {
            setResList(restaurants.filter( restaurant => restaurant.info.avgRating > 4.3));
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map( restaurant => (
          <RestaurantCard
            key={restaurant.info.id}
            image={CDN_URL + restaurant.info.cloudinaryImageId}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRatingString}
            deliveryTime={restaurant.info.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
