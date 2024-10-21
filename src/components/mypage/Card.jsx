import { useNavigate } from 'react-router-dom';
import Menu from '../../pages/mypage/Menu';
import { Cardmenu } from './style';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { defaultDataUpdate } from '../../store/modules/authSlice';
import cardList from '../../assets/api/carddata';

const Card = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const [userData, setUserData] = useState({ ...loginData });
    const [cardNo, setCardNo] = useState(['', '', '', '']);
    const [cardBirth, setcardBirth] = useState(['', '']);

    useEffect(() => {
        if (userData.cardNo) {
            setCardNo(userData.cardNo.split('-'));
        }
        if (userData.cardBirthday) {
            setcardBirth(userData.cardBirthday.split('/'));
        }
    }, []);

    const onChg = (e) => {
        const { name, value, type } = e.target;
        if (type === 'select-one') setUserData({ ...userData, cardName: value });
        else setUserData({ ...userData, [name]: value });
    };

    // cardNo 수정
    const CardNoChange = (index, value) => {
        const newCardNo = [...cardNo];
        newCardNo[index] = value;
        setCardNo(newCardNo);
    };

    // cardBirthDay 수정
    const CardBirthChange = (index, value) => {
        const newCardBirth = [...cardBirth];
        newCardBirth[index] = value;
        setcardBirth(newCardBirth);
    };

    useEffect(() => {
        setUserData(userData);
    }, [userData]);

    // 유효성검사
    const validateForm = () => {
        if (!userData.cardName) {
            alert('카드를 선택해주세요.');
            return false;
        }
        if (!cardNo[0] || !cardNo[1] || !cardNo[2] || !cardNo[3]) {
            alert('카드 번호를 모두 입력해주세요.');
            return false;
        }
        if (!cardBirth[0] || !cardBirth[1]) {
            alert('카드 만기날짜를 입력해주세요.');
            return false;
        }
        if (!userData.cardCVC) {
            alert('카드 CVC를 입력해주세요.');
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            userData.cardNo = cardNo.join('-');
            userData.cardBirthday = cardBirth.join('/');
            dispatch(defaultDataUpdate(userData));
            alert('결제 카드 수정이 완료되었습니다.');
            navigate('/mypage');
        }
    };
    return (
        <Cardmenu>
            <div className="inner">
                <h3>결제 카드 관리</h3>
                <form onSubmit={onSubmit}>
                    <div>
                        <p>카드 구분</p>
                        <select name="cardName" value={userData.cardName} onChange={onChg}>
                            <option value="">카드 선택</option>
                            {cardList.map((item) => (
                                <option key={item.id} value={item.card}>
                                    {item.desc}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>카드 번호</p>
                        <input
                            type="text"
                            name="cardNo1"
                            value={cardNo[0]}
                            placeholder="xxxx"
                            maxLength={4}
                            onChange={(e) => CardNoChange(0, e.target.value)}
                        />
                        <span>-</span>
                        <input
                            type="text"
                            name="cardNo2"
                            value={cardNo[1]}
                            placeholder="xxxx"
                            maxLength={4}
                            onChange={(e) => CardNoChange(1, e.target.value)}
                        />
                        <span>-</span>
                        <input
                            type="text"
                            name="cardNo3"
                            value={cardNo[2]}
                            placeholder="xxxx"
                            maxLength={4}
                            onChange={(e) => CardNoChange(2, e.target.value)}
                        />
                        <span>-</span>
                        <input
                            type="text"
                            name="cardNo4"
                            value={cardNo[3]}
                            placeholder="xxxx"
                            maxLength={4}
                            onChange={(e) => CardNoChange(3, e.target.value)}
                        />
                    </div>
                    <div>
                        <p>카드 만기날짜 (MM/YY)</p>
                        <input
                            type="text"
                            name="cardBirth1"
                            value={cardBirth[0]}
                            placeholder="xx"
                            maxLength={2}
                            onChange={(e) => CardBirthChange(0, e.target.value)}
                        />
                        <span>/</span>
                        <input
                            type="text"
                            name="cardBirth2"
                            value={cardBirth[1]}
                            placeholder="xx"
                            maxLength={2}
                            onChange={(e) => CardBirthChange(1, e.target.value)}
                        />
                    </div>
                    <div>
                        <p>CVC or CVV</p>
                        <input type="text" name="cardCVC" placeholder="xxx" maxLength={3} value={userData.cardCVC} onChange={onChg} />
                    </div>
                    <img src="/images/CVC.jpg" alt="CVC" />
                    <div className="btnLayout">
                        <button type="submit" className="mainBtn">
                            수정
                        </button>
                        <button onClick={() => navigate('/mypage')}>취소</button>
                    </div>
                </form>
            </div>
            <Menu />
        </Cardmenu>
    );
};

export default Card;
