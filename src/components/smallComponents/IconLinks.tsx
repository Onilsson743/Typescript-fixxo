import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  link?: string
  icon?: string
  number?: number
  hideMobile?: boolean
};

const IconLinks: React.FC<Props> = ({link, icon, number, hideMobile}) => {

    console.log(number)
  return (
      <NavLink className={`icon-links ${hideMobile ? "d-none d-md-flex" : ""}`}  to='' end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {number}
        </span>
        <i className={icon}></i>
        </NavLink>
  )
}

export default IconLinks