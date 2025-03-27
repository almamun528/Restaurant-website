import FoodCard from "../../Components/FoodCard";

const OrderTab = ({items}) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-3">
        {items?.map((items) => (
          <FoodCard key={items._id} item={items}  />
        ))}
      </div>
    </>
  );
};

export default OrderTab;
