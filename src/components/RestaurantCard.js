const RestaurantCard = (props) => {
  const { image, name, cuisines, rating, deliveryTime } = props;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" alt="restaurant-image" src={image} />
      <h4 className="restaurant-name card-items">{name}</h4>
      <h4 className="restaurant-cuisine card-items">{cuisines}</h4>
      <h4 className="restaurant-rating card-items">{rating}</h4>
      <h4 className="restaurant-delivery-time card-items">{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;