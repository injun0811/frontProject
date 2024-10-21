import { useNavigate } from 'react-router-dom';
import Menu from '../../pages/mypage/Menu';
import { Addressmenu } from './style';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { defaultDataUpdate } from '../../store/modules/authSlice';

const Address = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const [userData, setUserData] = useState({ ...loginData });
    const [addr1, setAddr1] = useState(userData.addr1);
    const [addr2, setAddr2] = useState(userData.addr2);

    // 지도 API
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // API 연동
    const searchLocation = (e) => {
        e.preventDefault();
        new window.daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                setUserData((prevData) => ({
                    ...prevData,
                    addr1: data.address,
                    addr2: '',
                }));
            },
        }).open();
    };

    const onChg = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // 유효성검사
    const validateForm = () => {
        if (!userData.addr1) {
            alert('주소를 검색해주세요.');
            return false;
        }
        if (!userData.addr2) {
            alert('상세 주소를 입력해주세요.');
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(defaultDataUpdate(userData));
            alert('배송지 수정이 완료되었습니다.');
            navigate('/mypage');
        }
    };
    return (
        <Addressmenu>
            <div className="inner">
                <h3>배송지 관리</h3>
                <form onSubmit={onSubmit}>
                    <div className="left">
                        <button onClick={searchLocation}>주소 검색</button>
                        <div>
                            <p>주소1</p>
                            <input
                                type="text"
                                name="addr1"
                                value={userData.addr1}
                                placeholder="인천광역시 남동구 인주대로 593"
                                onChange={onChg}
                                readOnly
                            />
                        </div>
                        <div>
                            <p>주소2</p>
                            <input type="text" name="addr2" value={userData.addr2} placeholder="엔타스빌딩 12층" onChange={onChg} />
                        </div>
                        <div className="btnLayout">
                            <button type="submit" className="mainBtn">
                                수정
                            </button>
                            <button onClick={() => navigate('/mypage')}>취소</button>
                        </div>
                    </div>
                    <div className="right" id="map"></div>
                </form>
            </div>
            <Menu />
        </Addressmenu>
    );
};

export default Address;
