import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

export const Cart = ({product}) => {
  const {id , name , image } = product;
  const dispatch = useDispatch();
  return (
      <div className='card shadow-lg border-0 my-2'>
        <div className='card-body d-flex justify-content-between align-items-center'>
          <div className='img-thumbnail'><img src={image} className='img-fluid' alt={name}></img></div>
          <h5 className='card-title'>{name}</h5>
          <p className='text-muted my-2'>${id}</p>
          <button onClick={() => dispatch(remove(product))} className='btn btn-danger px-4 rounded-3'>Remove</button>
        </div>
      </div>
  )
}
