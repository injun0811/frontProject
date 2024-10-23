import ModelCategory from './modelCategory';
import { RevueltoWrap } from './ModelStyle';

const Revuelto = () => {
    return (
        <RevueltoWrap>
            <ModelCategory />
            <div className="inner">
                <h3>Revuelto</h3>
            </div>
        </RevueltoWrap>
    );
};

export default Revuelto;
