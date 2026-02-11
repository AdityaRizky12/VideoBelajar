import React from 'react'
import VideoCatalog from '../component/courseSection'
import { useNavigate } from 'react-router-dom';

const CreateCourse = ({courses}) => {
    const navigate = useNavigate();
  return (

    <div>
      <button className="btn btn-primary m-4 " onClick={() => navigate('/add-course') }>AddCourse</button>
      <VideoCatalog courses={courses} />
    </div>
   
  )
}

export default CreateCourse;