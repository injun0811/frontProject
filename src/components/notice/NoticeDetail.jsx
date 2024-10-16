import { useSelector } from 'react-redux';
import { NoticeDetailWrap } from './NoticeStyle';
import { useNavigate, useParams } from 'react-router-dom';

const NoticeDetail = () => {
    const { notices } = useSelector((state) => state.notice);
    const { noticeID } = useParams();
    const navigate = useNavigate();
    const noticeData = notices.find((item) => item.id === Number(noticeID));
    const { id, title, content, date } = noticeData;
    return (
        <NoticeDetailWrap>
            <div className="inner">
                <h2> 공지사항 </h2>
                <div className="con">
                    <h3>
                        {id}번 {title}
                    </h3>
                    <p className="txt">{content} </p>
                    <p className="date">{date} </p>
                </div>
                <button onClick={() => navigate('/notice')}>목록으로</button>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
