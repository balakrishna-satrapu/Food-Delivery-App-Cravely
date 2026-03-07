import { useState } from "react"
import MenuCategoryList from "./MenuCategoryList";

const MenuItemCategory = (props) => {
  const {card} = props;
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="bg-gray-100 p-4 border-b-12 border-gray-200 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-medium">
          {card?.card?.card?.title} (
          {card?.card?.card?.itemCards.length})
        </p>
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
      {showContent && (
        <MenuCategoryList itemCards={card?.card?.card?.itemCards} />
      )}
    </div>
  )
};

export default MenuItemCategory;