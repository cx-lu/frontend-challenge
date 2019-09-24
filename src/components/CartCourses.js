import React from 'react'
import courses from '../data/courses'
import CourseCard from './CourseCard'
import CartCard from './CartCard'

export default (props) => (
    <>
      {props.courses.map(({ dept, number, title, prereqs, description }) => (
        <CartCard
          dept={dept}
          number={number}
          title={title}
          prereqs={prereqs}
          description={description}
        />
      ))}
    </>
  )