import Rating from 'react-rating-stars-component';
import MaterialIcon from '@material/react-material-icon';
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
      <Image img={image}>
        <MaterialIcon role='button' icon='search' color />
      </Image>
    </RestaurantCard>
  )
}

export default Card;