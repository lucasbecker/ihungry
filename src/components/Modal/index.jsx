import { useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styles';

function Modal({ children, open, onClose}) {
  useEffect( () => {
    function onEsc(event) {
      if(event.keyCode === 27) onClose();
    }

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  }, [onClose]);
  
  if(!open) return null;

  function handlerOverlayClick(){
    onClose();
  }

  function handlerDialogClick( event ){
    event.stopPropagation();
  }

  return(
    <Portal>
      <Overlay onClick={handlerOverlayClick}>
        <Dialog onClick={handlerDialogClick}>
          {children}
        </Dialog>
      </Overlay>
    </Portal>
  );
}

export default Modal;