import React from 'react'

export default function Alert(props) {
    // const Capitalize = (word) => {
    //     var lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase()+lower.slice(1);
    // }
  return (
    // It means if props.alert is not null then evaluate the further code.
    props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{props.alert.type}</strong> : {props.alert.message}
        </div>
  )
}
