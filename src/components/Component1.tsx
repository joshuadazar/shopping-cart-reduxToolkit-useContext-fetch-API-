import store from '../store/store';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';
import { useEffect, useState } from 'react';
import { IProduct } from '../models/IProducts';
import getProduct from '../services/Products.service';

const Component1 = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const req = await getProduct();
    if (req.length > 0) {
      setProductList(req);
    }
  };
  /*
  const Products = await useSelector(
    (state: ReturnType<typeof store.getState>) => state.products
  );
  */

  const addItemsCart = (prod: IProduct) => {
    dispatch(addProduct(prod));
  };

  return (
    <>
      <p>Product List</p>
      <ul className="product-list">
        {productList !== undefined &&
          productList.map((prod) => {
            return (
              <li key={prod.id}>
                <b>{prod.name}</b>
                <big>Price: {prod.price}</big>
                <button onClick={() => addItemsCart(prod)}>Add 🛍</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Component1;
