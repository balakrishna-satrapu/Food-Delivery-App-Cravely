import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">search</div>
      <div className="restaurant-container">
        <RestaurantCard
          key="1"
          image="https://media-assets.swiggy.com/swiggy/image/upload/wuxfcmpwh9m1mfehl94x"
          name="Biryani By Kilo"
          cuisines="Biryani, North Indian, Mughlai"
          rating="4.2 stars"
          deliveryTime="32 minutes"
        />
        <RestaurantCard
          key="2"
          image="https://media-assets.swiggy.com/swiggy/image/upload/wuxfcmpwh9m1mfehl94x"
          name="Biryani By Kilo"
          cuisines="Biryani, North Indian, Mughlai"
          rating="4.2 stars"
          deliveryTime="32 minutes"
        />
        <RestaurantCard
          key="3"
          image="https://media-assets.swiggy.com/swiggy/image/upload/wuxfcmpwh9m1mfehl94x"
          name="Biryani By Kilo"
          cuisines="Biryani, North Indian, Mughlai"
          rating="4.2 stars"
          deliveryTime="32 minutes"
        />
        <RestaurantCard
          key="4"
          image="https://media-assets.swiggy.com/swiggy/image/upload/wuxfcmpwh9m1mfehl94x"
          name="Biryani By Kilo"
          cuisines="Biryani, North Indian, Mughlai"
          rating="4.2 stars"
          deliveryTime="32 minutes"
        />
        <RestaurantCard
          key="5"
          image="https://media-assets.swiggy.com/swiggy/image/upload/wuxfcmpwh9m1mfehl94x"
          name="Biryani By Kilo"
          cuisines="Biryani, North Indian, Mughlai"
          rating="4.2 stars"
          deliveryTime="32 minutes"
        />
      </div>
    </div>
  );
};

export default Body;
