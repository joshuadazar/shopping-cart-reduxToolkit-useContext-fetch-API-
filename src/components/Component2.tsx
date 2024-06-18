import { useSelector } from 'react-redux';
import store from '../store/store';
import { IProduct } from '../models/IProducts';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/productSlice';
import { useEffect, useState } from 'react';

const Component2 = () => {
  const shoppingList = useSelector(
    (state: ReturnType<typeof store.getState>) => state.products.product
  );

  const [totalItems, setTotalItems] = useState<number>(shoppingList.length);
  const [totalAmount, setTotalAmount] = useState<number | string>(0);

  const dispatch = useDispatch();

  const removeShoppingListItem = (prod: IProduct) => {
    dispatch(removeProduct(prod.id));
  };

  useEffect(() => {
    setTotalItems(shoppingList.length);
    setTotalAmount(getCurrency);
  }, [shoppingList]);

  const getCurrency = () => {
    let total = shoppingList.reduce((acc, item: IProduct) => {
      return acc + item.price;
    }, 0);
    const formattedPrice = total.toLocaleString('us-US', {
      style: 'currency',
      currency: 'USD', // Código de moneda colombiano
    });
    return formattedPrice;
  };

  return (
    <>
      <h3>Shopping Cart </h3>
      <ul className="product-list">
        <h3>Total items: {totalItems}</h3>
        <h3>Total amount: {totalAmount}</h3>

        {shoppingList.length > 0 &&
          shoppingList.map((prod: IProduct, i) => {
            return (
              <li key={i}>
                <b>{prod.name}</b>
                <big>Price: ${prod.price}</big>
                <button onClick={() => removeShoppingListItem(prod)}>
                  Remove 🛍
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Component2;
