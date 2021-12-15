import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Spinner from '../components/Spinner';
import Modal from './Modal';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 30vh auto;
`;

//компонент отображения списка элементов
function List() {
    const { list, loading, error } = useSelector(state => state.list);
    const { getDescription } = useContext(Context);
    const data = "list";// нужно для того, чтобы модалка поняла, что нужно загрузить заного именно список

    return (
        <Fragment>
            <Container>
                {loading && <Spinner />}
                {error && <Modal data={data}/>}
                {(!loading && !error) && <div className="list-group">
                    {list.map((item) => {
                        return <Link to={`/list/${item.id}`} key={item.id} onClick={() => getDescription(item.id)} className="list-group-item list-group-item-action list-group-item-info">{item.name}</Link>
                    })}
                </div>}
            </Container>

        </Fragment>

    )
};

export default List;

