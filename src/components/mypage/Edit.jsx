import { useDispatch } from 'react-redux';
import Menu from '../../pages/mypage/Menu';
import { Editmenu } from './style';
import { useEffect, useState } from 'react';
import { defaultDataUpdate } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const [userData, setUserData] = useState({ ...loginData, password1: '', password2: '' });
    const [tel, setTel] = useState(['', '', '']);

    // tel 배열 생성 후 삽입
    useEffect(() => {
        if (userData.tel) {
            setTel(userData.tel.split('-'));
        }
    }, []);

    // 연락처 수정될 때 tel 수정
    const onTelChange = (index, value) => {
        const newTel = [...tel];
        newTel[index] = value;
        setTel(newTel);
    };

    const onChg = (e) => {
        const { name, value, type } = e.target;
        if (type === 'radio') setUserData({ ...userData, gender: value });
        else setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        setUserData(userData);
    }, [userData]);

    // 유효성검사
    const validateForm = () => {
        if (!userData.email) {
            alert('이메일(계정 ID)를 입력해주세요.');
            return false;
        }
        if (!userData.name) {
            alert('이름을 입력해주세요.');
            return false;
        }
        if (!userData.password1) {
            alert('비밀번호를 입력해주세요.');
            return false;
        }
        if (!userData.password2) {
            alert('비밀번호를 한번 더 입력해주세요.');
            return false;
        }
        if (!userData.tel) {
            alert('연락처를 입력해주세요.');
            return false;
        }
        if (userData.password1 !== userData.password2) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            userData.tel = tel.join('-');
            setUserData({ ...userData, password: userData.password1 });
            delete userData.password1;
            delete userData.password2;
            dispatch(defaultDataUpdate(userData));
            alert('계정 정보 수정이 완료되었습니다.');
            navigate('/mypage');
        }
    };

    return (
        <Editmenu>
            <div className="inner">
                <h3>개인정보 수정</h3>
                <form onSubmit={onSubmit}>
                    <div>
                        <p>email</p>
                        <input type="email" name="email" value={userData.email} onChange={onChg} />
                    </div>
                    <div>
                        <p>password</p>
                        <input type="text" name="password1" value={userData.password1} onChange={onChg} />
                        <input type="text" name="password2" value={userData.password2} onChange={onChg} />
                    </div>
                    <div>
                        <p>name</p>
                        <input type="text" name="name" value={userData.name} onChange={onChg} />
                    </div>
                    <div>
                        <p>tel</p>
                        <input type="text" name="tel1" value={tel[0]} onChange={(e) => onTelChange(0, e.target.value)} maxLength={3} />
                        <input type="text" name="tel2" value={tel[1]} onChange={(e) => onTelChange(1, e.target.value)} maxLength={4} />
                        <input type="text" name="tel3" value={tel[2]} onChange={(e) => onTelChange(2, e.target.value)} maxLength={4} />
                    </div>
                    <div>
                        <p>gender</p>
                        <input type="radio" name="gender" id="male" value="male" checked={userData.gender === 'male'} onChange={onChg} />
                        <label htmlFor="male">남자</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={userData.gender === 'female'}
                            onChange={onChg}
                        />
                        <label htmlFor="female">여자</label>
                    </div>

                    <div>
                        <article>
                            * 현재 계정은 <span className="bold">{userData.admin ? '관리자' : '일반'}</span> 입니다.
                        </article>
                        {userData.admin ? <button>일반 권한 요청</button> : <button>관리자 권한 요청</button>}
                    </div>
                    <article>
                        * 주소는 <span className="bold">배송지 관리</span>에서 수정할 수 있습니다.
                    </article>
                    <article>
                        * 카드정보는 <span className="bold">결제 카드 관리</span>에서 수정할 수 있습니다.
                    </article>
                    <div className="btnLayout">
                        <button type="submit" className="mainBtn">
                            수정
                        </button>
                        <button onClick={() => navigate('/mypage')}>취소</button>
                    </div>
                </form>
            </div>
            <Menu />
        </Editmenu>
    );
};

export default Edit;
