import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCourses } from '../../../Store/storeData';

const CourseDetail: React.FC = () =>  {

    const { id } = useParams<{ id: string }>(); 
    const courses = useCourses(); 
    const course = courses.find((c) => c.id === Number(id)); 

    if (!course) {
        return <h2>Curso no encontrado</h2>;
    }

    return (
        <div>
            <p>titulo     :   {course.title}</p>
            <p>Descripcion     :     {course.description}</p>
            <p>Modules : </p>
                {course.modules.map((c, index) => (
                    <>
                        <p key={index}>" {c.title} "</p>
                    </>
                ))}
        </div>
    );
}

export default CourseDetail;