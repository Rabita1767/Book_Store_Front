import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const Star = ({ filled, onClick }) => {
    return filled ? <FaStar onClick={onClick} /> : <FaRegStar onClick={onClick} />;
}
export default Star;