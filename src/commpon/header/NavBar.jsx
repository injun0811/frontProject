import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './style';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const { carts } = useSelector((state) => state.cart);
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
                    <li className="yellowBackImg1">
                        <Link to={'/mypage'}>Mypage</Link>
                    </li>

                    <li className="yellowBackImg1">
                        <Link to="/cart">
                            Cart <span> {carts.length} </span>
                        </Link>
                    </li>
                </ul>
            </NavWrap>

            <TopMenu className="top-menu">
                <li>
                    <Link to={'/join'}>Join</Link>
                </li>

                <li>
                    <Link to={'/logout'}>Logout</Link>
                </li>

                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
            </TopMenu>
        </>
    );
};

export default NavBar;
