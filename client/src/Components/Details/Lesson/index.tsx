import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getInfoCourses } from '../../../Action/actionIndex';
import { useDispatch, useSelector } from 'react-redux';
import { Course } from '../../../Interfaces/interface';
import { AppDispatch, RootState } from '../../../Store/storeData';

import style from "./lesson.module.css"

const LessonsDetail: React.FC = () =>  {
    
    const { id, moduleIndex, lessonIndex } = useParams<{ id: string, moduleIndex: string, lessonIndex: string }>();  
    
    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.allInfo) as Course[]

    useEffect(() => {
        dispatch(getInfoCourses());
    }, [dispatch]);
    
    const course = data.find((c) => c.id === Number(id)); 

    if (!course) {
        return <h2>Curso no encontrado</h2>;
    }

    const moduleData = course.modules[Number(moduleIndex)]
    const lessonData = moduleData.lessons[Number(lessonIndex)]

    if (!lessonData) {
        return <h2>Lesson no encontrado</h2>;
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}> {lessonData.title} </h2>
            <div className={style.body}>
                <p>Description : {lessonData.description}</p>
                <p>Topics : {lessonData.topics.join(", ")}</p>
                <p>Contents : </p>
                <div className={style.contents}>
                    {lessonData.content.map((c, contentIndex) => (
                        <div key={contentIndex}>
                            <p> Type: {c.type} </p>
                            <p> Data: {c.data} </p>
                        </div>
                    ))}
                </div>
            </div>
            <button className={style.footer}>
                <Link to={`/course/${id}`} key={lessonIndex}>
                    <p> Go back </p>
                </Link>
            </button>
        </div>
    );
}

export default LessonsDetail;