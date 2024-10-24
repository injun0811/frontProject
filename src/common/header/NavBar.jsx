import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './style';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const { carts } = useSelector((state) => state.cart);
    const { login } = useSelector((state) => state.auth);
    return (
        <>
            <NavWrap className="nav">
                <ul>
                    <li className="yellowBackImg1">
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className="yellowBackImg1">
                        <Link to={'/models'}>Models</Link>
                    </li>
                    <li className="yellowBackImg1">
                        <Link to={'/product'}>Product</Link>
                    </li>
                    <li className="yellowBackImg1">
                        <Link to={'/notice'}>Notice</Link>
                    </li>
                    <li className="yellowBackImg1">
                        <Link to={'/customer'}>Customer</Link>
                    </li>
                    {login ? (
                        <li className="yellowBackImg1">
                            <Link to={'/mypage'}>Mypage</Link>
                        </li>
                    ) : (
                        <></>
                    )}

                    <li className="yellowBackImg1">
                        <Link to="/cart">
                            Cart <span> {carts.length} </span>
                        </Link>
                    </li>
                </ul>
            </NavWrap>

            <TopMenu className="top-menu">
                <li>{login ? '' : <Link to={'/join'}>Join</Link>}</li>

                <li>{login ? <Link to={'/logout'}>Logout</Link> : <Link to={'/login'}>Login</Link>}</li>
            </TopMenu>
        </>
    );
};

export default NavBar;
