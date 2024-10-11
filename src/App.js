import FoodItemList from "./components/foodItemList/foodItemList";
import HeroText from "./components/heroText/heroText";
import Navbar from "./components/navbar/navbar";
import { BasketContextProvider } from "./store/BasketContext";

function App() {
    return (
        <BasketContextProvider>
            <Navbar />
            <HeroText />
            <FoodItemList />
        </BasketContextProvider>
    );
}

export default App;
