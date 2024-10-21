import styled from 'styled-components';

export const PaginationWrap = styled.div`
    div {
        margin-top: 30px;
        text-align: center;
        button {
            width: 30px;
            height: 30px;
            border: 1px solid #212121;
            margin-right: 5px;
            background: #212121;
            color: #fcc419;
            &:first-child {
                border: none;
            }
            &:last-child {
                border: none;
            }
            &.on {
                border-color: #fcc419;
                background: #fcc419;
                color: #212121;
            }
        }
    }
`;
