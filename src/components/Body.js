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

  if(isOnline === false) return <h1>Poor internet 🙁! please check your internet connection</h1>;

  return (restaurants.length === 0) ? <Shimmer /> : (
    <div className="">
      <div className="flex gap-4 ml-32 my-8 ">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          className="h-8 w-56 p-2 border border-solid border-gray-400"
          id="search-input"
          value={searchText}
        />
        <button onClick={() => {
            setResList(restaurants.filter( res => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
          }}
          className="px-3 bg-gray-200 rounded-md">
          Search
        </button>
        <button
          onClick={() => {
            setResList(restaurants.filter( restaurant => restaurant.info.avgRating >= 4.5));
          }}
          className="px-3 bg-gray-200 rounded-md">
          Top Rated Restaurants
        </button>
        <button 
          onClick={() => {
            setResList(restaurants);
            setSearchText("");
          }}
          className="px-3 bg-gray-200 rounded-md">
          Remove Filter
        </button>
      </div>
      <div className="mb-6 flex flex-wrap gap-5 justify-center">
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
