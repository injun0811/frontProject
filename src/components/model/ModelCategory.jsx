import { Link, useParams } from 'react-router-dom';
import { ModelCategoryWrap } from './ModelStyle';

const ModelCategory = () => {
    const { category } = useParams();
    return (
        <ModelCategoryWrap>
            <ul>
                <li className="yellowBackImg2">
                    <Link to={'/models/Temerario'} className={category === 'Temerario' ? 'on' : ''}>
                        temerario
                    </Link>
                </li>
                <li className="yellowBackImg2">
                    <Link to={'/models/revuelto'} className={category === 'revuelto' ? 'on' : ''}>
                        revuelto
                    </Link>
                </li>
                <li className="yellowBackImg2">
                    <Link to={'/models/urus'} className={category === 'urus' ? 'on' : ''}>
                        urus
                    </Link>
                </li>
                <li className="yellowBackImg2">
                    <Link to={'/models/huracan'} className={category === 'huracan' ? 'on' : ''}>
                        huracan
                    </Link>
                </li>
            </ul>
        </ModelCategoryWrap>
    );
};

export default ModelCategory;
