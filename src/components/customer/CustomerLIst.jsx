import { CustomerLIstWrap } from './style';
import CustomerItem from './CustomerItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { pagetoPost } from '../../store/modules/pageSlice';

const CustomerLIst = () => {
    const { customers } = useSelector((state) => state.customer);
    const dataList = customers;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const page = 1;
        dispatch(pagetoPost({ dataList, page }));
    }, [customers]);
    const { currentPages } = useSelector((state) => state.page);
    return (
        <CustomerLIstWrap>
            <table className="customerTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPages.map((item) => (
                        <CustomerItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
            <p>
                <button onClick={() => navigate('/customer/customeradd')}>글 작성 </button>
            </p>
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
