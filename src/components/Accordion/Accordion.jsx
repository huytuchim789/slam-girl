import React, { useRef, useState } from 'react'
import plus from './../../resources/images/plus.png'
import minus from './../../resources/images/minus.png'
export default function Accordion(props) {
  const { title, content } = props
  const [active, setActive] = useState('')
  const [maxContentHeight, setMaxContentHeight] = useState('0px')
  const contentRef = useRef(null)
  const onToggle = () => {
    setActive(active === '' ? 'active' : '')
    setMaxContentHeight(
      active === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`
    )
  }
  return (
    <div className="accordion">
      <button
        className="accordion__btn"
        onClick={onToggle}
        style={{ marginBottom: active ? '20px' : '0' }}
      >
        <h3 className="accordion__title">{title}</h3>
        {active ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
      </button>
      <div
        ref={contentRef}
        className={`accordion__content`}
        style={{ maxHeight: maxContentHeight }}
      >
        <p className="accordion__text">{content}</p>
      </div>
    </div>
  )
}
