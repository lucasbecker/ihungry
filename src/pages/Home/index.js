import { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { ContainerWrapper, Sidebar, Header, Logo, Map } from './style';
import logoImg from '../../assets/logo-temp.svg';

function Home(){
  const [inputValue, setInputValue] = useState('');

  const handlerInput = (event) => {
    setInputValue(event.target.value);
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
              onChange={handlerInput}
            />
          </TextField>
        </Header>
      </Sidebar>
      <Map />
    </ContainerWrapper>
  )
}

export default Home;