import styled from 'styled-components';

export const Editmenu = styled.div`
    h3 {
        text-align: center;
        font-size: 38px;
    }

    form {
        padding: 10px;

        div {
            padding: 5px;

            p {
                font-size: 18px;
            }

            input[type='text'],
            input[type='email'] {
                height: 30px;
                width: 170px;
            }

            label {
                padding: 0 10px 0 10px;
            }
        }

        article {
            /* padding: 10px 0 10px 0; */
        }

        button {
            margin: 9px;
            width: 150px;
            height: 40px;
            color: #fcc419;
            background-color: #212121;
        }

        .btnLayout {
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .mainBtn {
            padding: 20px;
            margin: 20px;
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

        .bold {
            font-weight: 700;
            color: red;
        }
    }
`;

export const Cardmenu = styled.div`
    h3 {
        text-align: center;
        font-size: 38px;
    }

    form {
        padding: 10px;

        div {
            padding: 5px;

            p {
                font-size: 18px;
            }

            select {
                height: 40px;
                width: 180px;
            }

            input[type='text'] {
                height: 30px;
                width: 170px;
            }

            span {
                margin: 0 15px 0 15px;
            }
        }

        button {
            margin: 9px;
            width: 150px;
            height: 40px;
            color: #fcc419;
            background-color: #212121;
        }

        .btnLayout {
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .mainBtn {
            padding: 20px;
            margin: 20px;
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

        img {
            width: 300px;
            height: 206px;
        }
    }
`;

export const Addressmenu = styled.div`
    h3 {
        text-align: center;
        font-size: 38px;
    }

    form {
        display: flex;

        div {
            padding: 5px;

            input[type='text'] {
                height: 40px;
                width: 450px;
                font-size: 20px;
            }
        }

        button {
            margin: 9px;
            width: 150px;
            height: 40px;
            color: #fcc419;
            background-color: #212121;
        }

        .btnLayout {
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .mainBtn {
            padding: 20px;
            margin: 20px;
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

        .right {
            width: 100%;
            height: 609px;
        }
    }
`;

export const AccountDelWrap = styled.div`
    h3 {
        text-align: center;
        font-size: 38px;
    }

    form {
        div {
            height: 299px;
            padding: 5px;

            input[type='password'] {
                height: 40px;
                width: 150px;
                font-size: 20px;
            }

            p {
                padding: 10px 0 10px 0;
                font-size: 18px;

                .bold {
                    font-weight: 700;
                    color: red;
                }
            }
        }

        button {
            margin: 9px;
            width: 150px;
            height: 40px;
            color: #fcc419;
            background-color: #212121;
        }

        .btnLayout {
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .mainBtn {
            padding: 20px;
            margin: 20px;
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
`