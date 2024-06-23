import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/users';
import { CartContext } from '../../contexts/cart';
import { signOutUser } from '../../utils/firebase/firebase';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation-styles';



const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
            <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
        { currentUser ? (
          <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
          <NavLink to='/auth'>SIGN IN</NavLink>) 
        }
          <CartIcon />
        {isCartOpen && <CartDropdown />}
      </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
  };

  export default Navigation;