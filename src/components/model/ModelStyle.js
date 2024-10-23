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

export const TemerarioWrap = styled.div`
    .videoDiv {
        position: relative;
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
        }
    }

    .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 30px;
        color: #fcc419;

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
            margin: 500px 0 0 150px;
            user-select: none;
            display: flex;
            align-items: center;
            div {
                padding: 0 40px 0 0;
            }
        }

        .leftSide {
            position: relative;
            display: flex;
            align-items: center;
            margin: 0 0 0 1000px;
            cursor: pointer;

            img {
                width: 70px;
                height: 70px;
                padding: 0 20px 0 20px;
            }

            div {
                p {
                    font-size: 30px;
                }
            }
        }

        .leftSide::before {
            content: '';
            position: absolute;
            top: 20px;
            right: 85.7%;
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
