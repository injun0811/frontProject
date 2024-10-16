import { Link, useParams } from 'react-router-dom';
import { ProductCategoryWrap } from './ProductStyle';

const ProductCategory = () => {
    const { category } = useParams();
    return (
        <ProductCategoryWrap>
            <ul>
                <li className="yellowBackImg2">
                    <Link to={'/product/caps'} className={category === 'caps' ? 'on' : ''}>
                        CAPS
                    </Link>
                </li>
                <li className="yellowBackImg2">
                    <Link to={'/product/dynamic'} className={category === 'dynamic' ? 'on' : ''}>
                        DYNAMIC
                    </Link>
                </li>
                <li className="yellowBackImg2">
                    <Link to={'/product/keyring'} className={category === 'keyring' ? 'on' : ''}>
                        KEYRING
                    </Link>
                </li>
                <li className="yellowBackImg2">
                    <Link to={'/product/lego'} className={category === 'lego' ? 'on' : ''}>
                        LEGO
                    </Link>
                </li>
            </ul>
        </ProductCategoryWrap>
    );
};

export default ProductCategory;
