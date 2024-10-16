import { useParams } from 'react-router-dom';
import { ProductWrap } from '../../pages/product/style';
import ProductCategory from './ProductCategory';
import ProductSearch from './ProductSearch';
import ProductList from './ProductList';

const ProductPage = () => {
    const { category } = useParams();
    return (
        <ProductWrap>
            <ProductCategory />
            <div className="inner">
                <h2> {category} </h2>

                <ProductSearch />
                <ProductList />
            </div>
        </ProductWrap>
    );
};

export default ProductPage;
