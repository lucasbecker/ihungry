import { useState } from 'react';
import Rating from 'react-rating-stars-component';
import { RestaurantCard, Infos, Title, Address, Image } from './styles';

import Skeleton from '../Skeleton';
import image from '../../assets/restaurante-fake.png';

function Card({ restaurant, onClick }) {

  const [imageLoaded, setImageLoaded] = useState(false);


  return(
    <RestaurantCard onClick={onClick}>
      <Infos>
        <Title>{restaurant.name}</Title>
        <Rating 
          isHalf
          edit={false}
          count={5}
          value={restaurant.rating}
          activeColor='#e7711c'
          size={22}
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </Infos>
      <Image 
        onLoad={() => setImageLoaded(true)}
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : image}
        alt={restaurant.name}   
      />
      {!imageLoaded && <Skeleton width='100px' height='100px' />}
    </RestaurantCard>
  )
}

export default Card;