import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { CartListWrap } from './CartStyle';
import { cartSelectDelete, cartDeleteAll } from '../../store/modules/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartList = () => {
    const { carts, cartsTotal } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <CartListWrap className="cart-wrap">
            <h2>장바구니</h2>
            <div className="cart-list">
                {carts.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="cart-bottom">
                <div>
                    <strong>총개수</strong>
                    <span> total : {carts.length} 개</span>
                </div>
                <div>
                    <strong>총금액</strong>
                    <span> total : $ {cartsTotal}</span>
                </div>
            </div>
            <p>
                <button onClick={() => navigate('/product')}>쇼핑하러가기</button>
                <button onClick={() => dispatch(cartSelectDelete())}>선택삭제</button>
                <button onClick={() => dispatch(cartDeleteAll())}>장바구니 비우기</button>
            </p>
        </CartListWrap>
    );
};

export default CartList;
