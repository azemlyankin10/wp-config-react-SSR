import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
// import './Dropdown.scss'

interface DropdownProps {
  children: React.ReactNode
  listClassName?: string
  handle?: () => void
  positionLeft: number
  positionTop: number
}


const DropdownComponent: FC<DropdownProps> = ({ children, listClassName = '', handle, positionLeft, positionTop }) => {

  const node = document.querySelector('#dropdown_root')
  if(!node) return null

  return ReactDOM.createPortal((
    <div 
      // className={`${styles.container} ${listClassName}`} 
      onClick={handle}
      style={{left: positionLeft, top: positionTop}}
    >
      { children }
    </div>
  ), node)
}

export const Dropdown = hot(DropdownComponent)
