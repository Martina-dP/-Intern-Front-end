import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getInfoCourses } from '../../Action/actionIndex';

import style from "./home.module.css"
import { Course } from '../../Interfaces/interface';
import { AppDispatch, RootState } from '../../Store/storeData';

const Home: React.FC = () =>  {

    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.allInfo) as Course[]

    useEffect(() => {
        dispatch(getInfoCourses());
    }, [dispatch]);

    return (
        <div className={style.container}>
            <h1 className={style.head}>List courses</h1>
            {data.length > 0 ? (
                <div className={style.body}>
                    {data.map((c, index) => (
                        <Link to={`/course/${c.id}`} key={index} className={style.link}>
                            <p className={style.opcions} key={c.id}>" {c.title} "</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <h1>No courses available</h1> 
            )}
    </div>
    );
}

export default Home;