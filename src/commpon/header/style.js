import styled from 'styled-components';

export const HeaderWrap = styled.header`
    border-bottom: 1px solid #000;
    background-color: #212121;
    color: #FCC419;
    .inner {
        height: 120px;
    }
    h1 {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        a {
            img {
                width: 100px;
            }
        }
    }
    .login {
        position: absolute;
        right: 150px;
        top: 10px;
        color: blue;
    }
`;

export const NavWrap = styled.nav`
    &.nav {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        ul {
            display: flex;
            li {
                margin-left: 100px;
                position: relative;
                a {
                    transition: 0.3s;
                    &:hover {
                        color: tomato;
                    }
                }
                &:last-child span {
                    font-size: 16px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    right: -20px;
                    top: -5px;
                    width: 20px;
                    height: 20px;
                    background-color: #000;
                    color: #FCC419;
                    text-align: center;
                    line-height: 17px;
                }
            }

            .yellowBackImg1 {
                position: relative;
                padding: 10px 20px; /* 글씨 주변 여백 조정 */
            }

            .yellowBackImg1::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url('./images/yellowBackImg1.png');
                background-repeat: no-repeat;
                background-size: 100% 200%; /* 배경 이미지를 요소에 맞게 늘림 */
                background-position: center;
                z-index: -1; /* 텍스트 뒤로 배경 이미지 보내기 */
                transition: opacity 0.3s ease; /* 배경 투명도 전환 효과 */
            }

            .yellowBackImg1 a {
                position: relative;
                z-index: 1; /* 링크 텍스트를 배경 이미지 위로 */
                //color: inherit; /* 링크 색상 유지 */
                color: #212121;
                text-decoration: none; /* 밑줄 제거 */
                display: block; /* 링크를 블록 레벨 요소로 만들어 전체 영역 클릭 가능하게 */
                transition: color 0.3s ease; /* 글자색 전환 효과 */
            }

            /* 호버 효과 */
            .yellowBackImg1:hover::before {
                opacity: 0; /* 배경 이미지 숨기기 */
            }

            .yellowBackImg1:hover a {
                color: #FCC419; /* 호버 시 글자색 변경 */
            }
        }
    }
`;

export const TopMenu = styled.ul`
    &.top-menu {
        position: absolute;
        right: 0;
        top: 10px;
        display: flex;
        li {
            margin-left: 25px;
            a {
                color: #FCC419;
                font-size: 15px;
            }
        }
    }
`;
