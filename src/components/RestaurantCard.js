const RestaurantCard = (props) => {
  const { image, name, cuisines, rating, deliveryTime } = props;
  return (
    <div className="h-75 w-60 p-2 rounded-2xl border border-solid border-gray-300 hover:bg-gray-100">
      <img className="h-32 w-60 rounded-2xl object-cover" alt="restaurant-image" src={image} />
      <h4 className="pt-2 font-medium text-lg">{name}</h4>
      <h4 className="">{cuisines}</h4>
      <h4 className="">{rating} stars</h4>
      <h4 className="">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;