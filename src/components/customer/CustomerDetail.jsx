import { useDispatch, useSelector } from 'react-redux';
import { CustomerDetailWrap } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { custDel, custLoad } from '../../store/modules/customerSlice';

const CustomerDetail = () => {
    const { customers } = useSelector((state) => state.customer);
    const { customerID } = useParams();
    const customer = customers.find((item) => item.id === Number(customerID));
    const { id, name, title, content, date } = customer;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const funcDel = () => {
        dispatch(custDel(id));
        navigate('/customer');
    };

    const updateData = () => {
        navigate('/customer/customeredit');
        dispatch(custLoad(customer));
    };
    return (
        <CustomerDetailWrap>
            <div className="inner">
                <h2> 문의 글 </h2>
                <div className="con">
                    <h3>
                        {id}번 {title}
                    </h3>

                    <p className="name"> {name} </p>
                    <p className="txt"> {content} </p>
                    <p className="date"> {date} </p>
                </div>

                <p>
                    <button onClick={() => navigate('/customer')}>목록으로</button>
                    <button onClick={updateData}>수정하기</button>
                    <button onClick={funcDel}>삭제하기</button>
                </p>
            </div>
        </CustomerDetailWrap>
    );
};

export default CustomerDetail;
