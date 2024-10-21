import styled from 'styled-components';

export const MypageWrap = styled.div`
    position: relative;
    overflow-x: hidden;

    img {
        height: 680px;
        width: 1400px;
    }
`;

export const SideMenu = styled.div`
    position: fixed;
    top: 12.6%;
    left: -250px;
    width: 260px;
    height: 681px;
    background-color: #212121;
    transition: left 0.3s ease-in-out;
    padding: 20px;
    box-sizing: border-box;

    &.on {
        left: 0;
    }

    .menuItem p {
        border: 1px solid #FCC419;
        background-color: #FCC419;
        user-select: none;
        cursor: pointer;
    }
`;

export const SubMenu = styled.div`
    max-height: ${props => props.$isOpen ? '1000px' : '0'};
    overflow: hidden;
    transition: max-height 0.5s;

    ul li {
        padding: 10px 0;
        border: 1px solid #FCC419;
        background-color: #FCC419;
        user-select: none;
        cursor: pointer;

        a {
            cursor: pointer;
            margin: 0;
        }
    }
`;

export const MenuItem = styled.div`
    padding: 20px;

    > ul li a {
        cursor: pointer;
        padding: 10px 0;
        margin: 0;
    }
`;

export const SideMenuRight = styled.div`
    position: fixed;
    top: 12.6%;
    right: -250px;
    width: 260px;
    height: 681px;
    background-color: #212121;
    transition: right 0.3s ease-in-out;
    padding: 20px;
    box-sizing: border-box;

    &.on {
        right: 0;
    }
`