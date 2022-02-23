import Accordion from 'components/Accordion/Accordion'
import React from 'react'
import { QA } from './QA'

export default function Faq() {
  return (
    <div className="faq">
      <h1 className="faq__header">faq</h1>
      <div className="faq__list">
        {QA.map((q, index) => (
          <Accordion key={index} title={q.ques} content={q.ans} />
        ))}
      </div>
    </div>
  )
}
