import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCourses } from '../../../Store/storeData';

const LessonsDetail: React.FC = () =>  {
    
    const { id, moduleIndex, lessonIndex } = useParams<{ id: string, moduleIndex: string, lessonIndex: string }>(); 
    const courses = useCourses(); 
    const course = courses.find((c) => c.id === Number(id)); 

    if (!course) {
        return <h2>Curso no encontrado</h2>;
    }

    const moduleData = course.modules[Number(moduleIndex)]
    const lessonData = moduleData.lessons[Number(lessonIndex)]

    if (!lessonData) {
        return <h2>Lesson no encontrado</h2>;
    }

    return (
        <div>
            <p>titulo : {lessonData.title}</p>
            <p>description : {lessonData.description}</p>
            <p>topics : {lessonData.topics.join(", ")}</p>
            <div>
                {lessonData.content.map((c, contentIndex) => (
                    <div key={contentIndex}>
                        <p>" Type: {c.type} "</p>
                        <p>" Data: {c.data} "</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LessonsDetail;