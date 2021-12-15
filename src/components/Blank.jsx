import { Link } from 'react-router-dom';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 30vh auto;
`;

//бланковая страница, если кто-то выбрал отмену, а не дальнейшую загрузку
export default function Blank() {
    return (
        <Container>
            <img src="https://insider.knplabs.com/wp-content/uploads/2015/09/CNFLc3IWEAAJgws-1.gif" alt='monkey' />
            <Link to='/'>
                <button type="button" className="btn btn-info btn-lg">Home</button>
            </Link>
        </Container>
    )
}