import { JoinWrap } from './style';
import Spinner from '../../components/Spinner';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { join } from '../../store/modules/authSlice';

const Join = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loadingChk, setLoadingChk] = useState(true);
    const [joinForm, setJoinForm] = useState({
        email: '',
        name: '',
        password1: '',
        password2: '',
        gender: '',
        addr1: '',
        addr2: '',
    });
    const { email, name, password1, password2, tel, gender, addr1, addr2 } = joinForm;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingChk(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // 주소 API
    const searchAddr = (e) => {
        e.preventDefault();
    };

    // 연락처 양식으로 수정(01011112222 => 010-1111-2222)
    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{0,4})(\d{0,4})$/);
        if (match) {
            return match[1] + (match[2] ? '-' + match[2] : '') + (match[3] ? '-' + match[3] : '');
        }
        return phoneNumber;
    };

    const onChg = (e) => {
        const { name, value, type } = e.target;
        if (type === 'radio') setJoinForm({ ...joinForm, gender: value });
        else if (type === 'tel') setJoinForm({ ...joinForm, [name]: formatPhoneNumber(value) });
        else setJoinForm({ ...joinForm, [name]: value });
    };

    // 유효성검사
    const validateForm = () => {
        if (!email) {
            alert('이메일(계정 ID)를 입력해주세요.');
            return false;
        }
        if (!name) {
            alert('이름을 입력해주세요.');
            return false;
        }
        if (!password1) {
            alert('비밀번호를 입력해주세요.');
            return false;
        }
        if (!password2) {
            alert('비밀번호를 한번 더 입력해주세요.');
            return false;
        }
        if (!tel) {
            alert('연락처를 입력해주세요.');
            return false;
        }
        if (!gender) {
            alert('성별을 선택해주세요.');
            return false;
        }
        if (password1 !== password2) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }
        return true;
    };

    const onSumbit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = { ...joinForm, password: password1 };
            delete formData.password1;
            delete formData.password2;

            dispatch(join(formData));
            alert('회원가입이 완료되었습니다, 로그인 페이지로 이동합니다.');
            navigate('/login');
        }
    };

    return (
        <>
            {loadingChk ? <Spinner /> : ''}
            <JoinWrap>
                <div className="inner">
                    <h2> 회원가입 </h2>
                    <form onSubmit={onSumbit}>
                        <p>
                            <label>이메일 (계정 ID) </label>
                            <input type="email" name="email" value={email} onChange={onChg} placeholder="abc@naver.com" />
                        </p>
                        <p>
                            <label> 이름 </label>
                            <input type="text" placeholder="홍길동" name="name" onChange={onChg} value={name} />
                        </p>
                        <p>
                            <label>비밀번호 </label>
                            <input type="password" name="password1" placeholder="a1234" onChange={onChg} value={password1} />
                        </p>
                        <p>
                            <label>비밀번호 재확인 </label>
                            <input type="password" name="password2" placeholder="a1234" onChange={onChg} value={password2} />
                        </p>
                        <p>
                            <label> 전화번호 </label>
                            <input type="tel" name="tel" placeholder="010-0000-0000" onChange={onChg} value={tel} />
                        </p>
                        <div>
                            <label>성별 </label>
                            <div>
                                <input type="radio" id="male" name="gender" onChange={onChg} checked={gender === 'male'} value="male" />
                                <label htmlFor="male">남성</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    onChange={onChg}
                                    checked={gender === 'female'}
                                    value="female"
                                />
                                <label htmlFor="female">여성</label>
                            </div>
                        </div>
                        <p>
                            <label> 주소 </label>
                            <input type="text" placeholder="인천광역시 남동구 정각로 29" name="addr1" onChange={onChg} value={addr1} />
                        </p>
                        <button onClick={searchAddr}>주소 검색</button>
                        <p>
                            <label>상세주소</label>
                            <input type="text" placeholder="101동 101호" name="addr2" onChange={onChg} value={addr2} />
                        </p>
                        <p>
                            <button type="submit" className="mainBtn">
                                회원가입
                            </button>
                            <button onClick={() => navigate('/')}>취소</button>
                        </p>
                    </form>
                </div>
            </JoinWrap>
        </>
    );
};

export default Join;
