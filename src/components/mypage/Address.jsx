import { useNavigate } from 'react-router-dom';
import Menu from '../../pages/mypage/Menu';
import { Addressmenu } from './style';
import { useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { defaultDataUpdate } from '../../store/modules/authSlice';

const Address = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const [userData, setUserData] = useState({ ...loginData });

    // 주소 및 위치 관련 초기화
    const [map, setMap] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [marker, setMarker] = useState(null);
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const loadKakaoMapScript = () => {
            const script = document.createElement('script');
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=5710742f5106c685169dafe50a3751d5&libraries=services&autoload=false`;
            script.async = true;

            script.onload = () => {
                window.kakao.maps.load(() => {
                    let mapOption = '';
                    // 지도
                    if (userData.latitude && userData.longitude) {
                        mapOption = {
                            center: new window.kakao.maps.LatLng(userData.latitude, userData.longitude),
                            level: 5,
                        };
                    } else {
                        mapOption = {
                            center: new window.kakao.maps.LatLng(37.4503144, 126.7029167),
                            level: 5,
                        };
                    }

                    const newMap = new window.kakao.maps.Map(mapContainerRef.current, mapOption);
                    setMap(newMap);

                    const newGeocoder = new window.kakao.maps.services.Geocoder();
                    setGeocoder(newGeocoder);

                    // 마커
                    let newMarker = '';
                    if (userData.latitude && userData.longitude) {
                        newMarker = new window.kakao.maps.Marker({
                            position: new window.kakao.maps.LatLng(userData.latitude, userData.longitude),
                            map: newMap,
                        });
                    } else {
                        newMarker = new window.kakao.maps.Marker({
                            position: new window.kakao.maps.LatLng(37.4503144, 126.7029167),
                            map: newMap,
                        });
                    }
                    setMarker(newMarker);
                });
            };

            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        };

        loadKakaoMapScript();
    }, []);

    const searchLocation = (e) => {
        e.preventDefault();
        if (window.daum && geocoder) {
            new window.daum.Postcode({
                oncomplete: function (data) {
                    const addr = data.address;
                    setUserData((prev) => ({ ...prev, addr1: addr }));

                    geocoder.addressSearch(addr, function (results, status) {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const result = results[0];
                            const coords = new window.kakao.maps.LatLng(result.y, result.x);

                            setUserData((prev) => ({
                                ...prev,
                                addr1: addr,
                                addr2: '',
                                latitude: coords.getLat(),
                                longitude: coords.getLng(),
                            }));

                            mapContainerRef.current.style.display = 'block';
                            map.relayout();
                            map.setCenter(coords);
                            marker.setPosition(coords);
                        }
                    });
                },
            }).open();
        }
    };

    const onChg = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

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
                    <div className="right" ref={mapContainerRef} id="map"></div>
                </form>
            </div>
            <Menu />
        </Addressmenu>
    );
};

export default Address;
