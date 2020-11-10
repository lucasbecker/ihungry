import { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { ContainerWrapper, Sidebar, Header, Logo, CarouselTitle, Carousel, Map } from './style';
import CarouselItem from '../../components/CarouselItem'
import logoImg from '../../assets/logo-temp.svg';
import restaurantFake from '../../assets/restaurante-fake.png';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

function Home(){
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const handlerInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const settings = {
    nextArrow: false,
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
          <button onClick={() => setModalOpened(true)}>ABRIR MODAL TESTE</button>
        </Header>
        <Card />
      </Sidebar>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >Hi</Modal>
    </ContainerWrapper>
  )
}

export default Home;