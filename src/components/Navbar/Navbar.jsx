import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import Counter from '../Counter/Counter';

function Navbar() {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <div className='navBar'>
     <h1>JMstore</h1>
     <CartWidget number={7} handleClick={handleClick} />
     
    </div>
  );
}

export default Navbar
