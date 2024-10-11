import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCourses } from '../../Store/storeData';

const Home: React.FC = () =>  {

    const data = useCourses()

    return (
        <div>
            <h1>List courses</h1>
        {data.length > 0 ? (
            <div>
                {data.map((c, index) => (
                    <Link to={`/course/${c.id}`} key={index}>
                        <p key={c.id}>" {c.title} "</p>
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