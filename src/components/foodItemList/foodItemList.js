import FoodItem from "../foodItem/foodItem";
import styles from "./foodItemList.module.scss";

const foodItems = [
    { name: "Butter Pancakes", id: 1, caption: "With honey", price: 14.5, image: "1.png" },
    { name: "Avocado Toast", id: 2, caption: "2 pieces", price: 16.5, image: "2.png" },
    { name: "Sweet Yogurt", id: 3, caption: "With strawberries", price: 5.0, image: "3.png" },
    { name: "Peanut Toast", id: 4, caption: "With butter", price: 9.5, image: "4.png" },
    { name: "French Toast", id: 5, caption: "With butter and jam", price: 9.5, image: "5.png" },
    { name: "Banana Bread", id: 6, caption: "With blueberries", price: 5.5, image: "6.png" },
    { name: "Classic Waffle", id: 7, caption: "With ice cream", price: 7.5, image: "7.png" },
];

function FoodItemList() {
    return (
        <div className={styles.foodItemsContainer}>
            {foodItems.map((item) => {
                return <FoodItem key={item.id} item={item} />;
            })}
        </div>
    );
}

export default FoodItemList;
