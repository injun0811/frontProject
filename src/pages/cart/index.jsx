import CartList from '../../components/cart/CartList';
import { CartWrap } from './style';
import CartEmpty from '../../components/cart/CartEmpty';

const Cart = () => {
    return (
        <CartWrap className='cart-box'>
            <div className='inner'>
                <CartList />
                {/* <CartEmpty /> */}
            </div>
        </CartWrap>
    );
};

export default Cart;
