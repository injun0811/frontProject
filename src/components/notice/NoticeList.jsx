import { NoticeListWrap } from './NoticeStyle';
import NoticeItem from './NoticeItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { pagetoPost } from '../../store/modules/pageSlice';

const NoticeList = () => {
    const { notices } = useSelector((state) => state.notice);
    const { currentPages } = useSelector((state) => state.page);
    const dispatch = useDispatch();
    const dataList = notices;
    useEffect(() => {
        const page = 1;
        dispatch(pagetoPost({ dataList, page }));
    }, [notices]);
    return (
        <NoticeListWrap>
            <table className="noticeTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPages.map((item) => (
                        <NoticeItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
