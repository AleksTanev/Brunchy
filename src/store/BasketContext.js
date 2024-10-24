import { createContext, useReducer } from "react";

const BasketContext = createContext({
    items: [],
    addItem: (item) => {},
    orderItems: () => {},
});

function basketReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const updatedItems = [...state.items];

        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };

            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems.push({
                ...action.item,
                quantity: 1,
            });
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    if (action.type === "ORDER_ITEMS") {
        return {
            items: [],
        };
    }
}

export function BasketContextProvider({ children }) {
    const [basketState, dispatchBasketAction] = useReducer(basketReducer, { items: [] });

    const basketContext = {
        items: basketState.items,
        addItem,
        orderItems,
    };

    function addItem(item) {
        dispatchBasketAction({ type: "ADD_ITEM", item: item });
    }

    function orderItems(item) {
        dispatchBasketAction({ type: "ORDER_ITEMS" });
    }

    return <BasketContext.Provider value={basketContext}> {children} </BasketContext.Provider>;
}

export default BasketContext;
