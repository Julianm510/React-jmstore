import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar(){
  return (
    <div className='navBar'>
     <h1>JMstore</h1>
     <CartWidget number={7}/>
    </div>
  );
}

export default Navbar
