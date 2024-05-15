import React from 'react'
import classes from "./CustomCheckbox.module.css"

export default function CustomCheckbox({children, ...props}) {
  return (
    <label  {...props} className={classes["list-item-label"]}>
        <input type="checkbox"></input>
        <span className={classes["checkmark"]}></span>
        <span>{children}</span>
    </label>
  )
}
