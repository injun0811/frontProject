import { useDispatch } from 'react-redux';
import { CustomerAddWrap } from './style';
import { useState } from 'react';
import { custSave } from '../../store/modules/customerSlice';
import { useNavigate } from 'react-router-dom';
const CustomerAdd = () => {
    const dispatch = useDispatch();

    // 날짜 계산
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const [cust, setCust] = useState({ title: '', name: '', content: '', date: formattedDate });
    const { title, name, content, date } = cust;
    const navigate = useNavigate();

    const chgInput = (e) => {
        const { name, value } = e.target;
        setCust({ ...cust, [name]: value });
    };

    const toList = (e) => {
        e.preventDefault();
        navigate('/customer');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(custSave(cust));
        navigate('/customer');
    };
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의 </h2>
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
                    <p>{date}</p>
                    <p>
                        <button onClick={toList}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={toList}>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerAdd;
