import { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { ContainerWrapper, Sidebar, Header, Logo, CarouselTitle, Carousel, Map } from './style';
import CarouselItem from '../../components/CarouselItem'
import logoImg from '../../assets/logo-temp.svg';
import restaurantFake from '../../assets/restaurante-fake.png';

function Home(){
  const [inputValue, setInputValue] = useState('');

  const handlerInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  return(
    <ContainerWrapper>
      <Sidebar>
        <Header>
          <Logo src={logoImg} alt='logo' />
          <TextField
            outlined
            label='Pesquisar'
            trailingIcon={<MaterialIcon role='button' icon='search' />}
          >
            <Input
              value={inputValue} 
              onChange={handlerInputValue}
            />
          </TextField>
          <CarouselTitle>Próximo de você</CarouselTitle>
          <Carousel {...settings} >
            <CarouselItem image={restaurantFake} title='Nome do estabelecimento'/>
            <CarouselItem image={restaurantFake} title='Nome do estabelecimento'/>
            <CarouselItem image={restaurantFake} title='Nome do estabelecimento'/>
            <CarouselItem image={restaurantFake} title='Nome do estabelecimento'/>
            <CarouselItem image={restaurantFake} title='Nome do estabelecimento'/>
            <CarouselItem image={restaurantFake} title='Nome do estabelecimento'/>
          </Carousel>
        </Header>
      </Sidebar>
      <Map />
    </ContainerWrapper>
  )
}

export default Home;