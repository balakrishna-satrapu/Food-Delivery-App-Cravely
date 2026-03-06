import { MenuItemImageURL } from "../utils/constants";

const MenuCategoryList = (props) => {
    const { itemCards } = props;
    console.log(itemCards);
    
    return (
        <div className="">
        {itemCards.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="flex items-center justify-between py-6 border-b border-b-gray-400">
              <div className="w-9/12">
                <h4 className="font-bold">{item?.card?.info?.name}</h4>
                <h4 className="font-medium mt-2">₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                <h4 className="font-medium mt-2">
                  {item?.card?.info?.ratings.aggregatedRating.rating} stars
                </h4>
                <p className="text-sm mt-4 text-gray-850">{item?.card?.info?.description}</p>
              </div>
              <div className="w-3/12">
                { item?.card?.info?.imageId && <img
                  src={ MenuItemImageURL + item?.card?.info?.imageId }
                  alt={item?.card?.info?.name}
                  className="w-9/12 h-25 ml-8 rounded-lg object-cover"
                ></img>}
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default MenuCategoryList;