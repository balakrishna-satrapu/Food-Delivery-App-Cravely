import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { json } from "../utils/mockData";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  const fetchData = () => {
    setRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(isOnline === false) return <h1>Poor internet Connection 🙁! please check your internet connection</h1>;

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
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard
              image={CDN_URL + restaurant.info.cloudinaryImageId}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines.join(", ")}
              rating={restaurant.info.avgRating}
              deliveryTime={restaurant.info.sla.deliveryTime}
              id={restaurant.info.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
