import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCourses } from '../../../Store/storeData';

const CourseDetail: React.FC = () =>  {

    const { id } = useParams<{ id: string}>(); 
    const courses = useCourses(); 
    const course = courses.find((c) => c.id === Number(id)); 

    const [ openLessons, setOpenLessons ] = useState<number | null>(null);

    if (!course) {
        return <h2>Curso no encontrado</h2>;
    }

    const openList = (index: number) => {
        setOpenLessons(openLessons === index ? null : index)
    }

    return (
        <div>
            <p>titulo : {course.title}</p>
            <p>Descripcion : {course.description}</p>
            <p>Modules : </p>
            {course.modules.map((m, moduleIndex) => (
                <div>
                    <button onClick={() => openList(moduleIndex)} key={moduleIndex}>
                        <p>" {m.title} "</p>
                    </button>
                    {openLessons === moduleIndex && (
                        <div>
                            {m.lessons.map((l, lessonIndex) => (
                                <Link to={`/course/${id}/modules/${moduleIndex}/lesson/${lessonIndex}`} key={lessonIndex}>
                                    <p>" {l.title} "</p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
                
        </div>
    );
}

export default CourseDetail;