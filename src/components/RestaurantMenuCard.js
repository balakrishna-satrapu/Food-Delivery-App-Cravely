import { useState } from "react";
import { restaurantsMenu } from "../utils/restaurantsMenu";
import { useParams } from "react-router-dom";
import MenuItemCategory from "./MenuItemCategory";

const RestaurantMenuCard = () => {
  const { resId } = useParams();

  const resObj = "res" + resId;

  const menu = restaurantsMenu[resObj];

  const { name, id, avgRating, cuisines, sla, totalRatings } =
    menu.data?.cards[2]?.card?.card?.info;

  const nonFilteredCards =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const cards = nonFilteredCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="font-medium text-3xl">{name}</h1>
      <h3 className="mt-2">
        {avgRating} stars ({totalRatings})
      </h3>
      <h3 className="mt-2">{cuisines.join(", ")}</h3>
      <h3 className="mt-2">{sla.deliveryTime} minutes</h3>
      <h2 className="my-5 font-medium text-2xl">Menu</h2>

      <div className="w-6/12 flex flex-col gap-4">
        <div>
          {cards.map((card) => {
            return (
              <div key={card?.card?.card?.title}>
                <MenuItemCategory card={card}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
