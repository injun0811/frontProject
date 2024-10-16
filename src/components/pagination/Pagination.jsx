import { PaginationWrap } from './PaginationStyle';
import { useDispatch, useSelector } from 'react-redux';
import { pagetoPost } from '../../store/modules/pageSlice';

const Pagination = ({ dataList }) => {
    const { currentPage } = useSelector((state) => state.page);
    const dispatch = useDispatch();
    const postofPage = 10; // 한 페이지당 포스트 개수
    const totalPost = dataList.length; // 총 포스트 개수
    const pageNumber = Math.ceil(totalPost / postofPage); // 페이지 개수

    const arr = [];
    for (let i = 1; i <= pageNumber; i++) arr.push(i);

    const before = () => {
        if (currentPage !== 1) dispatch(pagetoPost({ dataList, page: currentPage - 1 }));
    };

    const after = () => {
        if (currentPage !== pageNumber) dispatch(pagetoPost({ dataList, page: currentPage + 1 }));
    };

    return (
        <PaginationWrap>
            <div>
                <button onClick={() => dispatch(pagetoPost({ dataList, page: 1 }))}>{`<<`}</button>
                <button onClick={before}>{`<`}</button>

                {arr.map((item) => (
                    <button
                        key={item}
                        className={item === currentPage ? 'on' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(pagetoPost({ dataList, page: item }));
                        }}
                    >
                        {item}
                    </button>
                ))}

                <button onClick={after}>{`>`}</button>
                <button onClick={() => dispatch(pagetoPost({ dataList, page: pageNumber }))}>{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
