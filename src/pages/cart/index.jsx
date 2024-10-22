import CartList from '../../components/cart/CartList';
import { CartWrap } from './style';
import CartEmpty from '../../components/cart/CartEmpty';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Cart = () => {
    const navigate = useNavigate();
    const { login } = useSelector((state) => state.auth);
    const { cartTotalCnt } = useSelector((state) => state.cart);
    const [loginFlag, setLoginFlag] = useState(false);

    useEffect(() => {
        if (login) setLoginFlag(true);
        else {
            if (confirm('로그인이 필요합니다, 로그인 페이지로 이동하시겠습니까?')) {
                navigate('/login');
            } else navigate(-1);
        }
    }, []);

    return (
        <CartWrap className="cart-box">
            {loginFlag ? <div className="inner">{cartTotalCnt >= 1 ? <CartList /> : <CartEmpty />}</div> : <></>}
        </CartWrap>
    );
};

export default Cart;
