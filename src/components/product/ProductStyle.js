import styled from 'styled-components';

export const ProductCategoryWrap = styled.div`
    background-color: #212121;

    ul {
        display: flex;
        justify-content: center;

        li {
            padding: 30px;
        }

        .yellowBackImg2 {
            position: relative;
            padding: 10px 30px; /* 글씨 주변 여백 조정 */
        }

        .yellowBackImg2::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('./images/yellowBackImg2.png');
            background-repeat: no-repeat;
            background-size: 160px 200px; /* 배경 이미지를 요소에 맞게 늘림 */
            background-position: center;
            //z-index: -1; /* 텍스트 뒤로 배경 이미지 보내기 */
            transition: opacity 0.3s ease; /* 배경 투명도 전환 효과 */
        }

        .yellowBackImg2 a {
            position: relative;
            //z-index: 1; /* 링크 텍스트를 배경 이미지 위로 */
            //color: inherit; /* 링크 색상 유지 */
            color: #212121;
            text-decoration: none; /* 밑줄 제거 */
            display: block; /* 링크를 블록 레벨 요소로 만들어 전체 영역 클릭 가능하게 */
            transition: color 0.3s ease; /* 글자색 전환 효과 */
            margin: 20px;
        }

        /* 호버 효과 */
        .yellowBackImg2:hover::before {
            opacity: 0; /* 배경 이미지 숨기기 */
        }

        .yellowBackImg2:hover a {
            color: #fcc419; /* 호버 시 글자색 변경 */
        }
    }
`;

export const ProductSearchWrap = styled.div`
    margin-bottom: 30px;
    position: relative;
    form {
        display: flex;
        justify-content: space-between;
        p {
            input[type='text'] {
                width: 350px;
                box-sizing: border-box;
                height: 45px;
                padding: 10px;
                border: 1px solid #999;
            }
            button {
                width: 100px;
                height: 45px;
                vertical-align: top;
                color: #fcc419;
                background-color: #212121;
            }
            select {
                width: 200px;
                height: 45px;
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid #999;
            }
            span {
                margin-left: 15px;
                cursor: pointer;
            }

            .mainBtn {
                padding: 20px;
                position: relative;
                padding: 10px 20px;
                background-color: #212121;
                color: #fcc419;
                border: none;
                cursor: pointer;
                overflow: hidden;
                transition: color 0.3s ease;
                z-index: 1;
            }

            .mainBtn::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 150%;
                height: 100%;
                background-color: #fcc419;
                transform: translateX(-110%) skew(-15deg);
                transition: transform 0.8s ease;
                z-index: -1;
            }

            .mainBtn:hover {
                color: #212121; /* 호버 시 텍스트 색상 변경 */
            }

            .mainBtn:hover::before {
                transform: translateX(-10%) skew(-15deg); /* 호버 시 오른쪽으로 이동 */
            }
        }
    }
`;

export const ProductListWrap = styled.article`
    &.cart-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        article {
            width: 23%;
            border: 1px solid #999;
            box-sizing: border-box;
            margin-bottom: 30px;
            text-align: center;
            margin-right: 2.66%;
            transition: 0.5s;
            cursor: pointer;
            div {
                margin-bottom: 25px;
            }
            img {
                width: 100%;
            }
            h3 {
                font-weight: 700;
                height: 100px;
                margin-bottom: 10px;
            }
            h4 {
                font-size: 20px;
                line-height: 1.3;
                font-weight: 300;
                margin-bottom: 20px;
            }
            p {
                width: 90%;
                margin: auto;
                margin-top: 10px;
                margin-bottom: 10px;
                button {
                    background: #333;
                    padding: 8px 45px;
                    vertical-align: middle;
                    color: #fff;
                    &.off {
                        background: tomato;
                        padding: 8px 45px;
                        vertical-align: middle;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
            &:hover {
                background-color: #212121;
                color: #fcc419;
            }
        }

        article:nth-child(4) {
            margin-right: 0; /* 4번째마다 오른쪽 마진 제거 */
        }
    }
`;

export const ProductDetailWrap = styled.div`
    display: flex;

    .left {
        position: relative;
        text-align: center;
        align-content: start;
        padding-top: 50px;
        width: 50%;

        .smallImg {
            position: absolute;
            top: 70%;

            ul {
                display: flex;

                li {
                    margin: 20px;

                    img {
                        width: 50%;
                        cursor: pointer;
                        box-sizing: border-box;
                        border: 1px solid transparent;

                        &.on {
                            border: 1px solid #212121;
                        }
                    }
                }
            }
        }

        img {
            width: 52%;
            max-width: 100%;
        }
    }

    .right {
        color: #fcc419;
        width: 50%;
        padding: 50px;
        text-align: center;
        background-image: url('./images/priceBackground1.jfif');
        background-repeat: no-repeat;
        background-size: 100% 100%; /* 배경 이미지를 요소에 맞게 늘림 */
        background-position: center;

        h4,
        h6 {
            padding: 20px;
        }

        h5 {
            padding: 20px;
            ul {
                display: flex;
                align-items: center;
                justify-content: center;

                li {
                    padding: 10px;
                    height: 30px;
                    width: 30px;
                    cursor: pointer;

                    .color {
                        width: 20px;
                        height: 20px;
                        position: relative;
                    }

                    .color-inner {
                        width: 100%;
                        height: 100%;

                        &.on {
                            box-shadow: 0px 0px 2px 2px #fcc419;
                        }
                    }
                }
            }
        }
        p {
            display: grid;

            button {
                padding: 20px;
                margin: 20px;
                position: relative;
                padding: 10px 20px;
                background-color: #212121;
                color: white;
                border: none;
                cursor: pointer;
                overflow: hidden;
                transition: color 0.3s ease;
                z-index: 1;
            }

            button::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 150%;
                height: 100%;
                background-color: #fcc419;
                transform: translateX(-110%) skew(-15deg);
                transition: transform 0.8s ease;
                z-index: -1;
            }

            button:hover {
                color: #212121; /* 호버 시 텍스트 색상 변경 */
            }

            button:hover::before {
                transform: translateX(-10%) skew(-15deg); /* 호버 시 오른쪽으로 이동 */
            }

            .mainBtn {
                background-color: #212121;
                color: #fcc419;
            }
        }
    }
`;
