import { CustomerAddWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { custUpdate } from '../../store/modules/customerSlice';

const CustomerEdit = () => {
    const { updateCust } = useSelector((state) => state.customer);
    const [updateData, setUpdateData] = useState(updateCust);
    const { id, name, title, content, date } = updateData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const chgInput = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value });
    };

    const toList = (e) => {
        e.preventDefault();
        navigate('/customer');
    };

    const cancel = (e) => {
        e.preventDefault();
        navigate(`/customer/${id}`);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(custUpdate(updateData));
        navigate(`/customer/${id}`);
    };
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input type="text" placeholder="제목" name="title" value={title} onChange={chgInput} />
                    </p>
                    <p>
                        <input type="text" placeholder="작성자" name="name" value={name} onChange={chgInput} />
                    </p>
                    <p>
                        <textarea cols="100" rows="10" placeholder="문의하기" name="content" value={content} onChange={chgInput}></textarea>
                    </p>
                    <p>
                        <button onClick={toList}>목록으로</button>
                        <button type="submit">수정완료</button>
                        <button onClick={cancel}>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;
