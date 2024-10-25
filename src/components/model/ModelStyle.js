import styled from 'styled-components';

export const ModelCategoryWrap = styled.div`
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

export const StepLayout = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const VideoBox = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 30px;
    color: #fcc419;
`;

export const TemerarioWrap = styled.div`
    .step01 {
        /* position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;

        .backgroundVideo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        } */

        .content {
            /* position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 30px;
            color: #fcc419; */

            .firstHeading {
                user-select: none;
                font-size: 30px;
                margin: 300px 0 0 150px;
            }

            .secondHeading {
                user-select: none;
                font-size: 70px;
                margin: 0 0 0 150px;
            }

            .underInfo {
                margin: 300px 0 0 150px;
                user-select: none;
                display: flex;
                align-items: center;

                div {
                    margin: auto;
                    padding: 0 40px 0 0;
                }

                .leftSide {
                    position: relative;
                    display: flex;
                    align-items: center;
                    left: 50%;
                    cursor: pointer;

                    img {
                        width: 70px;
                        height: 70px;
                        padding: 0 20px;
                    }

                    div {
                        p {
                            font-size: 30px;
                        }
                    }
                }
            }

            .leftSide::before {
                content: '';
                position: absolute;
                top: 20px;
                right: 86%;
                width: 30px;
                height: 30px;
                background-image: url(/images/arrow_black.png);
                background-size: cover;
                z-index: 1;
            }

            .leftSide:hover::before {
                background-image: url(/images/arrow_yellow.png);
                color: #212121;
            }
        }
    }

    .step02 {
        width: 190vh;
        height: 60vh;
        display: flex;

        .left {
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .right {
            align-content: center;
            position: relative;
            margin: 50px;

            h3 {
                font-size: 40px;
                margin-bottom: 20px;
            }
            p {
                font-size: 18px;
                margin-bottom: 30px;
            }

            img {
                width: 20%;
            }
        }
    }

    .step03 {
        width: 100%;
        height: 60vh;
        display: flex;

        .left {
            height: 56%;
            padding: 20px;
            width: 30%;
            align-content: center;
            position: absolute;
            color: #fcc419;

            h3 {
                font-size: 40px;
                margin-bottom: 20px;
            }
            p {
                font-size: 18px;
                margin-bottom: 30px;
            }
        }

        .right {
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .step04 {
        width: 100%;
        height: 60vh;
        display: flex;
        overflow: hidden; /* 부모 컨테이너에 스크롤 숨기기 */

        .left {
            width: 30%;
            padding: 20px;
            color: #fcc419;
            position: relative; /* 절대 위치를 상대 위치로 변경 */
            align-content: center;
            z-index: 2;
            border-top: 5px solid #fcc419;
            background-color: #212121;

            h3 {
                font-size: 40px;
                margin-bottom: 20px;
            }
            p {
                font-size: 18px;
                margin-bottom: 30px;
            }
        }

        .right {
            width: 70%; /* 이미지가 차지할 공간 설정 */
            position: relative; /* 이미지의 절대 위치를 위한 설정 */

            img {
                position: absolute;
                top: 0;
                right: -90%;
                width: 200%; /* 이미지의 크기를 두 배로 설정하여 절반만 보임 */
                height: 100%;
                object-fit: cover;
            }
        }

        .right::before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            top: 0%;
            left: 0%;
            width: 500px;
            height: 572px;
            background-color: #212121;
            z-index: 1;
            clip-path: polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%);
            border-top: 5px solid #fcc419;
        }
    }

    .step05 {
        width: 100%;
        height: 60vh;
        display: flex;
        overflow: hidden; /* 부모 컨테이너에 스크롤 숨기기 */

        .left {
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .left::before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            left: 0%;
            width: 850px;
            height: 50px;
            background-color: #212121;
            z-index: 1;
            clip-path: polygon(0% 100%, 97% 100%, 100% 0%, 0% 0%);
            border-bottom: 5px solid #fcc419;
        }

        .left::after {
            box-sizing: border-box;
            content: '';
            position: absolute;
            top: 356.5%;
            left: 0%;
            width: 850px;
            height: 50px;
            background-color: #212121;
            z-index: 1;
            border-top: 5px solid #fcc419;
            clip-path: polygon(0% 0%, 97% 0%, 100% 100%, 0% 100%);
        }

        .right {
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        .right::before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            left: 55.3%;
            width: 850px;
            height: 50px;
            background-color: #212121;
            z-index: 1;
            clip-path: polygon(3% 100%, 100% 100%, 100% 0%, 0% 0%);
            border-bottom: 5px solid #fcc419;
        }

        .right::after {
            box-sizing: border-box;
            content: '';
            position: absolute;
            top: 356.5%;
            left: 55.3%;
            width: 850px;
            height: 50px;
            background-color: #212121;
            z-index: 1;
            border-top: 5px solid #fcc419;
            clip-path: polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
    }
`;

export const RevueltoWrap = styled.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`;

export const UrusWrap = styled.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`;

export const HuracanWrap = styled.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`;
