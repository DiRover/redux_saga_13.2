import Context from "./Context";
import {loadDescription, loadServicesList} from "../actions/actionCreators";
import { useDispatch } from 'react-redux';

export default function Provider(prop) {
    const dispatch = useDispatch();
    const getDescription = (id) => {//получение описания
        dispatch(loadDescription(id));
    }

    const getList = () => {//получение списка
        dispatch(loadServicesList());
    }

    return(
        <Context.Provider value={{getDescription, getList}}>
            {prop.children}
        </Context.Provider>
    )
}

