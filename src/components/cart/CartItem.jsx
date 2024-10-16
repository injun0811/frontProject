import { useDispatch } from 'react-redux';
import { cartCount, cartTotalPrice, choiceCart, deleteCart } from '../../store/modules/cartSlice';
import { useEffect, useState } from 'react';

const CartItem = ({ item }) => {
    const { id, title, price, image, isChoice, count } = item;
    const [calculPrice, setCalculPrice] = useState(count * price);
    const dispatch = useDispatch();
    const selectItem = (e) => {
        if (e.target.tagName.toLowerCase() === 'button') {
            return;
        } else {
            e.target.parentNode.classList.toggle('on');
            dispatch(choiceCart(item));
        }
    };
    const chgCount = (id, calcul) => {
        const objCount = { id, calcul, count };
        dispatch(cartCount(objCount));
    };
    useEffect(() => {
        const totalPrice = price * count;
        setCalculPrice(totalPrice);
        const objTotalPrice = { id, totalPrice };
        dispatch(cartTotalPrice(objTotalPrice));
    }, [count]);
    return (
        <article>
            <input type="checkbox" value={isChoice} onChange={selectItem} />
            <img src={image} alt={title} />
            <div className="depth1">
                <h3>{title}</h3>
                <span> $ {price}</span>
            </div>
            <div className="depth2">
                <h3>수량</h3>
                <span className="btnType" onClick={() => chgCount(id, '-')}>
                    -
                </span>
                <span>{count}</span>
                <span className="btnType" onClick={() => chgCount(id, '+')}>
                    +
                </span>
            </div>
            <div className="depth3">
                <h3>총 금액</h3>
                <span> $ {calculPrice}</span>
            </div>
            <button onClick={() => dispatch(deleteCart(id))}> 삭제 </button>
        </article>
    );
};

export default CartItem;
