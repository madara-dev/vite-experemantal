import React from 'react'

export default function alert(props) {
  return (
    
   props.alert && <div className={` animatewarn alert warning-${props.alert.type} alert-dismissible fade show`} role="alert">
          
    {props.alert.msg}
  {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
   </div>
  )
}
