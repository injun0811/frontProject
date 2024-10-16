import { useSelector } from 'react-redux';
import CustomerLIst from '../../components/customer/CustomerLIst';
import Pagination from '../../components/pagination/Pagination';
import { CustomerWrap } from './style';

const Customer = () => {
    const { customers } = useSelector((state) => state.customer);
    return (
        <CustomerWrap>
            <div className="inner">
                <h2> 고객문의 </h2>
                <CustomerLIst />
                <Pagination dataList={customers} />
            </div>
        </CustomerWrap>
    );
};

export default Customer;
