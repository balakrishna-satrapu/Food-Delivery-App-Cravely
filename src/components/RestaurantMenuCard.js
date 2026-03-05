import { useState } from "react";
import { restaurantsMenu } from "../utils/restaurantsMenu";
import { useParams } from "react-router-dom";
import MenuCategoryList from "./MenuCategoryList";

const RestaurantMenuCard = () => {
  const [showContent, setShowContent] = useState(false);
  const { resId } = useParams();

  const resObj = "res" + resId;

  const menu = restaurantsMenu[resObj];

  const { name, id, avgRating, cuisines, sla, totalRatings } =
    menu.data?.cards[2]?.card?.card?.info;

  const cards =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card ||
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.categories[0];

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="font-medium text-3xl">{name}</h1>
      <h3 className="mt-2">
        {avgRating} stars ({totalRatings})
      </h3>
      <h3 className="mt-2">{cuisines.join(", ")}</h3>
      <h3 className="mt-2">{sla.deliveryTime} minutes</h3>
      <h2 className="my-5 font-medium text-2xl">Menu</h2>
      <div className="w-6/12 bg-gray-100 p-4 border-b-12 border-gray-200 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <p className="font-medium">{cards.title}</p>
          <div>
            {showContent ? (
            // Up Arrow
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            // Down Arrow
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
          </div>
        </div>
        {showContent && <MenuCategoryList itemCards={cards?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
