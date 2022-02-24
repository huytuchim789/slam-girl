import React from 'react'

export default function Menu({ onMenu }) {
  console.log(onMenu)
  return (
    <div
      className="menu"
      style={{
        visibility: onMenu ? 'visible' : 'hidden',
        opacity: onMenu ? '1' : '0',
      }}
    >
      <h1>Webisode</h1>
      <h1>creators</h1>
      <h1>BENEFITS</h1>
    </div>
  )
}
