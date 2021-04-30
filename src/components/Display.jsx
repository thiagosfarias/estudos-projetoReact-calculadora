import React from 'react'
import './Display.css'

export default props => {
    return (
       <div className="display"><strong>{props.value}</strong></div>
    )
}