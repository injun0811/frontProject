import { ProductListWrap } from './ProductStyle';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const { category } = useParams();
    const { products, sortProducts } = useSelector((state) => state.product);
    let productList = '';
    if (category === 'caps') productList = products.caps;
    if (category === 'dynamic') productList = products.dynamic;
    if (category === 'keyring') productList = products.keyring;
    if (category === 'lego') productList = products.lego;
    return (
        <ProductListWrap className="cart-box">
            {sortProducts === ''
                ? productList.map((productLists) => <ProductItem key={productLists.id} productLists={productLists} />)
                : sortProducts.map((productLists) => <ProductItem key={productLists.id} productLists={productLists} />)}
        </ProductListWrap>
    );
};

export default ProductList;
