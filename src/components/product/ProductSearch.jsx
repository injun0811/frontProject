import { ProductSearchWrap } from './ProductStyle';
import { useDispatch } from 'react-redux';
import { search } from '../../store/modules/productSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductSearch = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const [searchTxt, setSearchTxt] = useState('');

    useEffect(() => {
        setSearchTxt('');
        dispatch(search({ search: '', category }));
    }, [category, dispatch]);

    const onChg = (e) => {
        const { value } = e.target;
        setSearchTxt(value);
        dispatch(search({ search: value, category }));
    };

    const onSubmit = (e) => {
        e.preventdefault();
    };

    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select>
                        <option value=""> 상품 정렬 </option>
                        <option value="title">제품명</option>
                        <option value="price">가격</option>
                        <option value="category">카테고리</option>
                    </select>

                    <button>초기화</button>
                </p>

                <p>
                    <button type="submit" className="mainBtn" disabled>
                        검색
                    </button>
                    <input type="text" name="searchTxt" value={searchTxt} onChange={onChg} />
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
