import { ProductSearchWrap } from './ProductStyle';

const ProductSearch = () => {
    return (
        <ProductSearchWrap>
            <form>
                <p>
                    <select>
                        <option value=''> 상품 정렬 </option>
                        <option value='title'>제품명</option>
                        <option value='price'>가격</option>
                        <option value='category'>카테고리</option>
                    </select>

                    <span>초기화</span>
                </p>

                <p>
                    <input type='text' name='' id='' />
                    <button type='submit'>검색</button>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
