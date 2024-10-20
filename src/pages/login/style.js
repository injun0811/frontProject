import styled from 'styled-components';

export const LoginWrap = styled.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 650px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    p {
        margin-bottom: 30px;
        label {
            display: block;
            width: 110px;
        }
        input[type='email'],
        input[type='password'] {
            margin-top: 5px;
            width: 450px;
            box-sizing: border-box;
            height: 55px;
            padding: 0 10px;
        }

        span {
            display: block;
            color: #999;
            margin-bottom: 5px;
        }

        &:last-child {
            margin-top: 50px;
            text-align: center;
            button {
                width: 250px;
                height: 60px;
                background: #000;
                color: #fff;
                border: none;
                cursor: pointer;
            }
        }
    }
`;

export const LogoutWrap = styled.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 600px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    h3 {
        margin-bottom: 30px;
        font-size: 25px;
        font-weight: 700;
        span {
            color: tomato;
        }
    }
    p {
        margin-top: 50px;
        text-align: center;
        button {
            width: 250px;
            height: 60px;
            background: #000;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    }
`;

export const JoinWrap = styled.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //height: 750px;

        h2 {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 50px;
        }
        p {
            margin-bottom: 15px;
            label {
                display: block;
                width: 110px;
            }
            input[type='email'],
            input[type='password'],
            input[type='tel'],
            input[type='text'] {
                margin-top: 5px;
                width: 450px;
                box-sizing: border-box;
                height: 55px;
                padding: 0 10px;
            }

            &:last-child {
                margin-top: 50px;
                text-align: center;
                button {
                    width: 200px;
                    height: 60px;
                    background: #000;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    margin-left: 5px;
                }
            }

            .mainBtn {
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

        button {
            margin-bottom: 10px;
            width: 100px;
            height: 50px;
            background: #000;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        div div {
            padding: 15px 0 15px 0;

            label {
                padding: 0 30px 0 10px;
            }
        }
    }
`;
