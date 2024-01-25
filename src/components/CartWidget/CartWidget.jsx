import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';

function CartWidget(props) {
    return (
      <div className='containerCart'>
        <ShoppingCartIcon className='cartIcon'/>
        <span className='cartNumber'>{props.number}</span>
      </div>
    )
  }

export default CartWidget

