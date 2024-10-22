import { AccountDelWrap } from './style';
import Menu from '../../pages/mypage/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteAccount, logoutChk } from '../../store/modules/authSlice';

const AccountDel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const [certification, setCertification] = useState('');

    const onChg = (e) => {
        setCertification(e.target.value);
    };

    // 유효성검사
    const validateForm = () => {
        if (!certification) {
            alert('비밀번호를 입력해주세요.');
            return false;
        }
        if (loginData.password !== certification) {
            alert('현재 계정의 비밀번호와 입력한 비밀번호가 맞지 않습니다.');
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (confirm('계정 탈퇴를 완료하시겠습니까?')) {
                alert('계정 탈퇴가 완료되었습니다.');
                navigate('/');
                dispatch(deleteAccount(loginData));
                dispatch(logoutChk());
            }
        }

        return true;
    };
    return (
        <AccountDelWrap>
            <div className="inner">
                <h3>계정 탈퇴</h3>
                <form onSubmit={onSubmit}>
                    <div>
                        <p>비밀번호 인증</p>
                        <input type="password" name="password" value={certification} onChange={onChg} />
                        <p>
                            * 계정 탈퇴를 위해 <span className="bold">{loginData.name}</span>님의 비밀번호 인증이 필요합니다.
                        </p>
                        <p>
                            * 계정 탈퇴 즉시 <span className="bold">모든 계정 정보가 삭제</span>되며 재가입 시에는 모든 정보를 재입력해야
                            합니다.
                        </p>
                    </div>
                    <div className="btnLayout">
                        <button type="submit">탈퇴</button>
                        <button onClick={() => navigate('/mypage')} className="mainBtn">
                            취소
                        </button>
                    </div>
                </form>
            </div>
            <Menu />
        </AccountDelWrap>
    );
};

export default AccountDel;
