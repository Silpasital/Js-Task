import React from 'react'
import Child from './Child'

function Parent() { 
    let msg= "hello from silpa"
    return (
        <div>
            this is Parent
           <Child message={msg}></Child>
        </div>
    )
}

export default Parent

