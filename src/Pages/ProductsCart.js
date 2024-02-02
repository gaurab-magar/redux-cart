import React from 'react';
import './ProductsCart.css';
import { Cart } from '../Components/Cart';
import { useTitle } from '../Hooks/useTitle';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const ProductsCart = ({title}) => {

  useTitle(title);
  
  
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (
    <main>
      <section className='py-4'>
        <div className='container'>
          <div className='row'>
            <h3 className="text-center text-muted mb-5">My Cart: {cartList.length}/ TOTAL:${total}</h3>
            {cartList.map((item)=>(
              <Cart product={item} key={item.id}/>
            ))} 
          </div>
        </div>
      </section>
    </main>
  )
}
