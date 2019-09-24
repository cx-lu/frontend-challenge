import React from 'react'
import courses from '../data/courses'
import CourseCard from './CourseCard'

export default (props) => (
  <>
    {courses.map(({ dept, number, title, prereqs, description }) => (
      <CourseCard 
        dept={dept}
        number={number}
        title={title}
        prereqs = {prereqs}
        description={description}
        addItem={props.addItem}
        cart={props.cart}
      />
    ))}
  </>
)
