import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Course } from '../../../Interfaces/interface';
import { getInfoCourses } from '../../../Action/actionIndex';
import { AppDispatch, RootState } from '../../../Store/storeData';

import style from "./index.module.css"

const CourseDetail: React.FC = () =>  {

    const { id } = useParams<{ id: string}>(); 

    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.allInfo) as Course[]

    useEffect(() => {
        dispatch(getInfoCourses());
    }, [dispatch]);

    const course = data.find((c) => c.id === Number(id)); 

    const [ openLessons, setOpenLessons ] = useState<number | null>(null);

    if (!course) {
        return <h2>Curso no encontrado</h2>;
    }

    const openList = (index: number) => {
        setOpenLessons(openLessons === index ? null : index)
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>{course.title}</h2>
            <p className={style.description}>What is this course about : {course.description}</p>
            <p className={style.text}>Here are the different modules in this course : </p>
            {course.modules.map((m, moduleIndex) => (
                <div className={style.body}>
                    <div className={style.items}>
                        <p>Click to see the lessons:  </p>
                        <button className={style.BTN} onClick={() => openList(moduleIndex)} key={moduleIndex}>
                            <p> {m.title} </p>
                        </button>
                    </div>
                    <div className={style.lessons}>
                        {openLessons === moduleIndex && (
                            <div className={style.containerLinks}>
                                {m.lessons.map((l, lessonIndex) => (
                                    <Link to={`/course/${id}/modules/${moduleIndex}/lesson/${lessonIndex}`} key={lessonIndex}>
                                        <p className={style.links}>" {l.title} "</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <button className={style.footer}>
                <Link to={`/`}>
                    <p> Go back </p>
                </Link>
            </button>
        </div>
    );
}

export default CourseDetail;