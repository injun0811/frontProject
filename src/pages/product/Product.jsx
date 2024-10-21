import { ProductWrap } from './style';
import ProductCategory from '../../components/product/ProductCategory';

const Product = () => {
    return (
        <ProductWrap>
            <ProductCategory />
            <div className="inner">
                <h2> Product 페이지 입니다. </h2>
            </div>
        </ProductWrap>
    );
};

export default Product;
