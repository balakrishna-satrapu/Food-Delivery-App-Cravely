import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL, CDN_URL } from "../utlis/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (restaurants.length === 0) ? <Shimmer /> : (
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
            setResList(restaurants.filter( restaurant => restaurant.info.avgRating > 4.0));
          }}>
          Top Rated Restaurants
        </button>
        <button 
          onClick={() => {
            setResList(restaurants);
            setSearchText("");
          }}>
          Remove Filter
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map( restaurant => (
          <RestaurantCard
            key={restaurant.info.id}
            image={CDN_URL + restaurant.info.cloudinaryImageId}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRating}
            deliveryTime={restaurant.info.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
