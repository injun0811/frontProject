import { useSelector } from 'react-redux';
import CustomerLIst from '../../components/customer/CustomerLIst';
import Pagination from '../../components/pagination/Pagination';
import { CustomerWrap } from './style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
    const navigate = useNavigate();
    const { login } = useSelector((state) => state.auth);
    const { customers } = useSelector((state) => state.customer);
    const [loginFlag, setLoginFlag] = useState(false);

    useEffect(() => {
        if (login) setLoginFlag(true);
        else {
            if (confirm('로그인이 필요합니다, 로그인 페이지로 이동하시겠습니까?')) {
                navigate('/login');
            } else navigate(-1);
        }
    }, []);

    return (
        <CustomerWrap>
            {loginFlag ? (
                <div className="inner">
                    <h2> 고객문의 </h2>
                    <CustomerLIst />
                    <Pagination dataList={customers} />
                </div>
            ) : (
                <></>
            )}
        </CustomerWrap>
    );
};

export default Customer;
