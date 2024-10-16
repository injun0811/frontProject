import { useSelector } from 'react-redux';
import NoticeList from '../../components/notice/NoticeList';
import Pagination from '../../components/pagination/Pagination';
import { NoticeWrap } from './style';

const Notice = () => {
    const { notices } = useSelector((state) => state.notice);
    return (
        <NoticeWrap>
            <div className="inner">
                <h2>게시판</h2>

                <NoticeList />

                <Pagination dataList={notices} />
            </div>
        </NoticeWrap>
    );
};

export default Notice;
