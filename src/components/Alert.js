import React from 'react'

export default function Alert(props) {
  return (
      <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show backgroundColor" role="alert`}>
      <strong>{props.alert.type}</strong>: {props.alert.msg} 
      </div>}
      {/* Here the props cannot be written without curly brackets as it is an js and js
      cannot be under any tag */}
      </div>
  )
}
