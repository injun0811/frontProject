import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDetail } from '../../store/modules/productSlice';

const ProductItem = ({ productLists }) => {
    const { id, title, model, price, color, hex, description, image } = productLists;
    const { category } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goDetail = () => {
        dispatch(updateDetail(productLists));
        navigate(`/product/${category}/productDetail`);
    };

    return (
        <article onClick={goDetail}>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <h4> $ {price} </h4>
        </article>
    );
};

export default ProductItem;
