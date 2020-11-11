import Lottie from 'react-lottie-player';
import data from '../../assets/searching.json';

function Loader() {
  return <Lottie loop animationData={data} play />
}

export default Loader;