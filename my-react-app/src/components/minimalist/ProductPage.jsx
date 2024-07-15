// src/components/ProductPage.jsx
import React from 'react';
import './ProductPage.css';

const products = [
  {
    id: 1,
    image:'https://stylecaster.com/wp-content/uploads/2023/07/Paris-m-str-S24-0348.jpg?resize=1714,2400',
    brand: 'Vero Moda',
    name: 'Beige High Neck Zipper',
    originalPrice: '₹1,799',
    discountPrice: '₹719',
    discount: '60% OFF'
    
  },
  {
    id: 2,
    image: 'https://www.instyle.com/thmb/2MtbivGS4Cc_pBd4uu27p1ffhJo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/minimalist-sofia-richie-0149f92f6781444d9af870138505e0a5.jpg',
    brand: 'LULU & SKY',
    name: 'Beige Trench Coat',
    originalPrice: '₹3,798',
    discountPrice: '₹1,595',
    discount: '58% OFF',
    
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/28/42/23/284223a0750e45066893c1fa362d96dd.jpg',
    brand: 'StyleCast',
    name: 'Brown Linen Shirt',
    originalPrice: '₹3,299',
    discountPrice: '₹1,349',
    discount: 'Rs.1950 OFF',
    bestPrice: '₹1,281'
  },
  {
    id: 4,
    image: 'https://stylecaster.com/wp-content/uploads/2021/08/Milano-str-F22-0343.jpg?w=447',
    brand: 'GINGER',
    name: 'Cream Button Down Shirt',
    originalPrice: '₹2,999',
    discountPrice: '₹1,199',
    discount: 'Rs.1800 OFF'
  },
  {
    id: 5,
    image: 'https://stylecaster.com/wp-content/uploads/2021/08/New-York-str-S22-355.jpg?resize=2000,3000',
    brand: 'MANGO',
    name: 'Cream Wrapped Blazer Dress',
    originalPrice: '₹4,999',
    discountPrice: '₹2,499',
    discount: '50% OFF'
  },
  {
    id: 6,
    image: 'https://stylecaster.com/wp-content/uploads/2021/08/Paris-str-F22-0625.jpg?resize=1000,1500',
    brand: 'ZARA',
    name: 'Cropped Black Leather Jacket',
    originalPrice: '₹7,999',
    discountPrice: '₹4,799',
    discount: '40% OFF'
  },
  {
    id: 7,
    image: 'https://stylecaster.com/wp-content/uploads/2021/08/Paris-HC-str-S22-0549.jpg?w=447',
    brand: 'H&M',
    name: 'Black Overcoat',
    originalPrice: '₹2,299',
    discountPrice: '₹1,149',
    discount: '50% OFF'
  },
  {
    id: 8,
    image: 'https://stylecaster.com/wp-content/uploads/2019/01/minimal-outfits-12.jpg?resize=1000,1500',
    brand: 'ZARA',
    name: 'Embroided U Neck Dress',
    originalPrice: '₹3,499',
    discountPrice: '₹2,099',
    discount: '40% OFF'
  },
  {
    id: 9,
    image: 'https://stylecaster.com/wp-content/uploads/2023/07/Paris-HC-str-F23-0066.jpg?w=650',
    brand: 'GUESS',
    name: 'High Neck Black Mini Dress',
    originalPrice: '₹2,999',
    discountPrice: '₹1,799',
    discount: '40% OFF'
  },
  {
    id: 10,
    image: 'https://injournal.rs/wp-content/uploads/2019/10/40kp-139101.jpg',
    brand: 'GAP',
    name: 'High Neck Ruffle Sleeves Top',
    originalPrice: '₹4,299',
    discountPrice: '₹2,579',
    discount: '40% OFF'
  },
  {
    id: 11,
    image: 'https://stylecaster.com/wp-content/uploads/2019/01/minimal-outfits-17.jpg?resize=1000,1500',
    brand: 'Tommy Hilfiger',
    name: 'Striped Blazer',
    originalPrice: '₹3,499',
    discountPrice: '₹2,099',
    discount: '40% OFF'
  },
  {
    id: 12,
    image: 'https://stylecaster.com/wp-content/uploads/2019/01/minimal-outfits-21.jpg?resize=1000,1500',
    brand: 'Ralph Lauren',
    name: 'Pant Suit ',
    originalPrice: '₹5,299',
    discountPrice: '₹3,179',
    discount: '40% OFF'
  },
  {
    id: 13,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RGHE2vb6ju2od19QbnZ5ci0uNJWjsDqcNQ&s',
    brand: 'Calvin Klein',
    name: 'Pale Brown Wollen Scarf',
    originalPrice: '₹4,999',
    discountPrice: '₹2,999',
    discount: '40% OFF'
  },
  {
    id: 14,
    image: 'https://stylecaster.com/wp-content/uploads/2021/08/Paris-str-F22-0749.jpg?resize=2000,3000',
    brand: 'Ralph Lauren',
    name: 'Wide Leg Trousers',
    originalPrice: '₹5,999',
    discountPrice: '₹3,599',
    discount: '40% OFF'
  },
  {
    id: 15,
    image: 'https://stylecaster.com/wp-content/uploads/2019/01/minimal-outfits-11.jpg?resize=1000,1500',
    brand: 'Loro Piana',
    name: 'Copper Brown Flared Pants',
    originalPrice: '₹7,999',
    discountPrice: '₹4,799',
    discount: '40% OFF'
  }
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>MINIMALIST</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.brand}</h2>
            <p>{product.name}</p>
            <p className="original-price">{product.originalPrice}</p>
            <p className="discount-price">{product.discountPrice}</p>
            <p className="discount">{product.discount}</p>
            {product.rating && (
              <div className="rating">
                <span>{product.rating}</span>
                <span>⭐</span>
                <span>({product.reviews})</span>
              </div>
            )}
            {product.bestPrice && <p className="best-price">Best Price {product.bestPrice} with coupon</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
