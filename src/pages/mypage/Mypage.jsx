import Menu from './Menu';
import { MypageWrap } from './style';

const Mypage = () => {
    return (
        <MypageWrap>
            <div className="inner">
                <h2> My page </h2>
            </div>
            <Menu />
        </MypageWrap>
    );
};

export default Mypage;
