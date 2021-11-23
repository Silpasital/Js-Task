import { findByDisplayValue } from '@testing-library/dom';
import React,{useContext} from 'react'
import { UserContext } from './Contextp';

function Contextc3() {
    const firstName = useContext(UserContext);
    return (
        <div>
            {`Hello ${firstName}!`}
        </div>
    )
}

export default Contextc3