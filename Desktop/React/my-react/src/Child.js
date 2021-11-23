import React from 'react'
import Child2 from './Child2'

function Child(props) {
    return (
        <div>
            <Child2 msg2={props.message}></Child2>
        </div>
    )
}

export default Child
