import { ModelsWrap } from './style';
import ModelCategory from '../../components/model/modelCategory';

const Models = () => {
    return (
        <ModelsWrap>
            <ModelCategory />
            <div className="inner">
                <h2> Model 페이지 입니다. </h2>
            </div>
        </ModelsWrap>
    );
};

export default Models;
