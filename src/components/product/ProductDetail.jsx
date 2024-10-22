import { useState, useEffect } from 'react';
import ProductShowImg from './ProductShowImg';
import { ProductDetailWrap } from './ProductStyle';
import { useDispatch, useSelector } from 'react-redux';
import ProductCategory from './ProductCategory';
import { addCart, addWishList, totalCartPrice, totalWishListPrice } from '../../store/modules/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { login } = useSelector((state) => state.auth);
    const detail = JSON.parse(localStorage.getItem('detail'));

    const { id, title, model, category, price, color, hex, description, image, imgCnt } = detail;
    const imgCntArr = Array.from({ length: imgCnt }, (_, i) => i);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [imageCnt, setImageCnt] = useState(0); // 메인 이미지 배열 cnt
    const [imageUrl, setImageUrl] = useState(image); // 메인 이미지 url
    const [selectHex, setSelectHex] = useState(hex[0]); // hex 값
    const [selectCol, setSelectCol] = useState(color[0]); // color 이름
    const [imgUrlArr, setImgUrlArr] = useState([]); // 서브 이미지 배열

    useEffect(() => {
        const newImgUrlArr = ProductShowImg(model, category, color, imgCntArr, selectCol);
        setImgUrlArr(newImgUrlArr);
        setImageUrl(newImgUrlArr[imageCnt]);
    }, [selectCol, imageCnt]);

    const clkImg = (cnt) => {
        setImageCnt(cnt);
    };

    const clkColor = (idx) => {
        setSelectHex(hex[idx]);
        setSelectCol(color[idx]);
        setImageCnt(0); // 색상 변경 시 첫 번째 이미지로 리셋
    };

    const goCart = () => {
        if (login) {
            dispatch(addCart(detail));
            dispatch(totalCartPrice());
        } else {
            if (confirm('로그인이 필요합니다, 로그인 페이지로 이동하시겠습니까?')) {
                navigate('/login');
            }
        }
    };

    const goWish = () => {
        if (login) {
            dispatch(addWishList(detail));
            dispatch(totalWishListPrice());
        } else {
            if (confirm('로그인이 필요합니다, 로그인 페이지로 이동하시겠습니까?')) {
                navigate('/login');
            }
        }
    };

    return (
        <div className="inner">
            <ProductCategory />
            <ProductDetailWrap>
                <div className="left">
                    <img src={imageUrl} alt={title} />
                    <div className="smallImg">
                        <ul>
                            {imgCntArr.map((cnt) => (
                                <li key={cnt} onClick={() => clkImg(cnt)}>
                                    {imgCnt > 1 ? <img className={cnt === imageCnt ? 'on' : ''} src={imgUrlArr[cnt]} alt={title} /> : <></>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <h3>{model}</h3>
                    <h2>{title}</h2>
                    <h4>$ {price}</h4>
                    <h5>
                        <ul>
                            Color
                            {hex.map((hexs, idx) => (
                                <li key={hexs} className="color" onClick={() => clkColor(idx)}>
                                    <div
                                        className={`color-inner ${hexs === selectHex ? 'on' : ''}`}
                                        style={{ backgroundColor: `${hexs}` }}
                                    ></div>
                                </li>
                            ))}
                        </ul>
                    </h5>
                    <h6>{description}</h6>
                    <p>
                        <button className="mainBtn" onClick={goCart}>
                            ADD TO CART
                        </button>
                        <button onClick={goWish}> ADD TO WISHLIST </button>
                    </p>
                </div>
            </ProductDetailWrap>
        </div>
    );
};

export default ProductDetail;
