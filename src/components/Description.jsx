import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import Modal from './Modal';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 30vh auto;
`;
//компонент отображения описания элемента списка
export default function Description() {
    const { description, title, loading, error } = useSelector(state => state.list);

    const data = "description";//нужно для того, чтобы модалка поняла, что нужно заного загрузить именно описания элемента списка
    return (
        <Fragment>
            <Container>
                {loading && <Spinner />}
                {error && <Modal prop={data}/>}
                {(!loading && !error) && <Fragment>
                    <h1>{title}</h1>
                    <p className="fw-bolder">{description}</p>
                    <div style={{"margin": "40px 0 0 0"}}>
                    <Link to='/'><button type="button" className="btn btn-info btn-lg">Home</button></Link>
                </div>
                </Fragment>}
            </Container>
        </Fragment>
    )
}