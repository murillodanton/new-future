import Svg, { Path } from 'react-native-svg';
import { RightArrowProps } from './ArrowRight.props'; 

const ArrowRight = ({ color, size, filled }: RightArrowProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ArrowRight;