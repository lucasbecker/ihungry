import Rating from 'react-rating-stars-component';
import { RestaurantCard, Infos, Title, Address, Image } from './styles';


import image from '../../assets/restaurante-fake.png';

function Card() {
  return(
    <RestaurantCard>
      <Infos>
        <Title>Nome do Estabelecimento</Title>
        <Rating 
          isHalf
          edit={false}
          count={5}
          value={3}
          activeColor='#e7711c'
          size={22}
        />
        <Address>Endereço, 1010 - Cidade / SC</Address>
      </Infos>
      <Image img={image} />
    </RestaurantCard>
  )
}

export default Card;