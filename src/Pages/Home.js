import React from 'react';
import "./Home.css";
import { ProductsCard } from '../Components/ProductsCard';
import { img_1, img_2, img_3, img_4 } from '../Assets'
import { useTitle } from '../Hooks/useTitle';

export const Home = ({title}) => {
  useTitle(title)

  const products = [
    {
      name:'gaurab',
      image:img_1,
      id:1
    },
    {
      name:'sagar',
      image:img_2,
      id:2
    },
    {
      name:'bobil',
      image:img_3,
      id:3
    },
    {
      name:'ashish',
      image:img_4,
      id:4
    },
  ]
  return (
    <main>
      <section className='products'>
        <div className='container py-4'>
          <div className='row'>
            {products.map((card)=>(
              <ProductsCard key={card.id} product={card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
