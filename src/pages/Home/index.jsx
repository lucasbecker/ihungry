import { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { ContainerWrapper, Sidebar, Header, Logo, CarouselTitle, Carousel, ModalTitle, ModalContent } from './style';
import CarouselItem from '../../components/CarouselItem'
import logoImg from '../../assets/logo-temp.svg';
import restaurantFake from '../../assets/restaurante-fake.png';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Map from '../../components/Map';

function Home(){
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector( state => state.restaurants );

  const handlerInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const settings = {
    nextArrow: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  function handlerKeyPres(event){
    if(event.key === 'Enter'){
      setQuery(inputValue);
    }
  }

  function handlerOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
              onKeyPress={handlerKeyPres}
            />
          </TextField>
          <CarouselTitle>Próximo de você</CarouselTitle>
          <Carousel {...settings} >
            { restaurants.map( restaurant => (
              <CarouselItem 
                key={`carousel-${restaurant.place_id}`}
                image={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFake} 
                title={restaurant.name}  
              />
            )) }
          </Carousel>
        </Header>
        { restaurants.map( restaurant => (
          <Card onClick={() => handlerOpenModal(restaurant.place_id)} key={`card-${restaurant.place_id}`} restaurant={restaurant} />
        )) }
      </Sidebar>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto!' : 'Fechado!'}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
      </Modal>
    </ContainerWrapper>
  )
}

export default Home;