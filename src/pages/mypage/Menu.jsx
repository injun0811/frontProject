import { useEffect, useState } from 'react';
import { MypageWrap, SideMenu, SubMenu, MenuItem } from './style';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isWishListOpen, setIsWishListOpen] = useState(false);

    useEffect(() => {
        // 컴포넌트가 마운트되면 메뉴를 열기
        setIsMenuOpen(true);
        // 컴포넌트가 언마운트되면 메뉴를 닫기
        return () => {
            setIsMenuOpen(false);
        };
    }, []); // 빈 배열을 넣어 마운트 시에만 실행되도록 함

    const toggleAccount = () => {
        setIsAccountOpen(!isAccountOpen);
    };
    const toggleWishList = () => {
        setIsWishListOpen(!isWishListOpen);
    };
    return (
        <MypageWrap>
            <div className="inner">
                <SideMenu className={isMenuOpen ? 'on' : ''}>
                    <div className="sideMenu">
                        <MenuItem>
                            <div className="menuItem">
                                <p onClick={toggleAccount}>Account {isAccountOpen ? '▲' : '▼'}</p>
                                <SubMenu $isOpen={isAccountOpen}>
                                    <ul>
                                        <li>
                                            <Link to={'/mypage/edit'}>개인정보 수정</Link>
                                        </li>
                                        <li>
                                            <Link to={'/mypage/card'}>결제 카드 관리</Link>
                                        </li>
                                        <li>
                                            <Link to={'/mypage/address'}>배송지 관리</Link>
                                        </li>
                                        <li>
                                            <Link to={'/mypage/accountDel'}>계정 탈퇴</Link>
                                        </li>
                                    </ul>
                                </SubMenu>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="menuItem">
                                <p onClick={toggleWishList}>wishList</p>
                            </div>
                        </MenuItem>
                    </div>
                </SideMenu>
            </div>
        </MypageWrap>
    );
};

export default Menu;
