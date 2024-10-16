import { LoginWrap } from './style';

const Login = () => {
    return (
        <LoginWrap>
            <div className='inner'>
                <h2>로그인 페이지 입니다. </h2>
                <form>
                    <p>
                        <label>이메일 </label>
                        <input type='email' name='email' placeholder='로그인정보:abc@naver.com' />
                    </p>
                    <p>
                        <label>비밀번호 </label>
                        <input type='password' placeholder='로그인정보:a1234' />
                    </p>
                    <p>
                        <span>테스트 이메일: abc@naver.com </span>
                        <span>테스트 비밀번호 : a1234</span>
                    </p>
                    <p className='btn'>
                        <button type='submit'>로그인</button>
                    </p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;
