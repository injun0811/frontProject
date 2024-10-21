import styled from 'styled-components';

export const CartListWrap = styled.div`
    .cart-list {
        width: 100%;
        article {
            display: flex;
            border: 1px solid #000;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            padding: 10px;
            font-size: 20px;
            width: 100%;
            &.on {
                background-color: wheat;
            }
            img {
                width: 120px;
            }
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60%;
                h3 {
                    margin-right: 30px;
                }
                span {
                    text-align: center;
                    width: 40%;
                }
            }
            button {
                width: 100px;
                border: 1px solid #212121;
                height: 40px;
                transition: 0.3s;
                margin-top: 0;
                &:hover {
                    background: #fcc419;
                    color: #212121;
                }
            }
            .btnType {
                width: 100px;
                height: 40px;
                align-content: center;
                border: 1px solid #212121;
                background: #212121;
                color: #fcc419;
                cursor: pointer;
                transition: 0.5s;

                &:hover {
                    background: #fcc419;
                    color: #212121;
                }
            }

            .depth1 {
                width: 50%;
            }
            .depth2 {
                width: 30%;
                h3 {
                    width: 80px;
                }
            }
            .depth3 {
                width: 20%;
            }
        }
    }

    .cart-bottom {
        margin-top: 50px;
        display: flex;
        font-size: 18px;
        strong {
            margin-right: 20px;
        }

        div {
            margin: 0 20px 0 0;
            padding: 15px;
        }
    }
    button {
        margin-top: 50px;
        width: 250px;
        height: 50px;
        background: #212121;
        color: #fcc419;
        margin-right: 5px;
    }
`;
export const CartEmptyWrap = styled.div`
    .inner {
    }
    h2 {
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    p {
        text-align: center;
        button {
            margin-top: 50px;
            width: 300px;
            height: 50px;
            background: #000;
            color: #fff;
        }
    }
`;
