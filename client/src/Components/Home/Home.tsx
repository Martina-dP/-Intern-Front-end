import React from 'react';
import { Link } from 'react-router-dom';
import { useCourses } from '../../Store/storeData';

import style from "./home.module.css"

const Home: React.FC = () =>  {

    const data = useCourses()

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