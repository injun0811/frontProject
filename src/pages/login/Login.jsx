import { useDispatch, useSelector } from 'react-redux';
import { LoginWrap } from './style';
import { loginChk } from '../../store/modules/authSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const { login, loginUser } = useSelector((state) => state.auth);
    const { name } = loginUser;
    const [loginInfo, setLoginInfo] = useState({ inputEmail: '', inputPassword: '' });
    const { inputEmail, inputPassword } = loginInfo;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const onChg = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const onSumbit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        await dispatch(loginChk(loginInfo));
    };

    useEffect(() => {
        if (isSubmitted) {
            if (login) {
                alert(`${name}님, 정상적으로 로그인에 성공했습니다.`);
                navigate('/');
            } else {
                alert('해당 계정 정보가 존재하지 않습니다.');
            }
            setIsSubmitted(false);
        }
    }, [login, name, isSubmitted]);

    return (
        <LoginWrap>
            <div className="inner">
                <h2>로그인 페이지 입니다. </h2>
                <form onSubmit={onSumbit}>
                    <p>
                        <label>이메일 </label>
                        <input type="email" name="inputEmail" value={inputEmail} onChange={onChg} placeholder="로그인정보:abc@naver.com" />
                    </p>
                    <p>
                        <label>비밀번호 </label>
                        <input type="password" name="inputPassword" value={inputPassword} onChange={onChg} placeholder="로그인정보:a1234" />
                    </p>
                    <p>
                        <span>테스트 이메일: user@user.com </span>
                        <span>테스트 비밀번호 : 123</span>
                    </p>
                    <p className="btn">
                        <button type="submit" className="mainBtn">
                            로그인
                        </button>
                    </p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;
