import { useDispatch, useSelector } from 'react-redux';
import { LogoutWrap } from './style';
import { logoutChk } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { login, loginUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name } = loginUser;
    const logout = () => {
        dispatch(logoutChk());
        navigate('/');
    };
    return (
        <LogoutWrap>
            <div className="inner">
                {login ? (
                    <>
                        <h2>
                            방문해 주셔서 감사합니다.
                            <br /> 다시 방문해주세요
                        </h2>
                        <h3>
                            <span> {name} 님 이용해주셔서 감사합니다 </span>
                        </h3>

                        <p>
                            <button onClick={logout}>로그아웃</button>
                        </p>
                    </>
                ) : (
                    <>
                        <h2> 로그인 정보를 찾을수 없습니다. </h2>
                    </>
                )}
            </div>
        </LogoutWrap>
    );
};

export default Logout;
