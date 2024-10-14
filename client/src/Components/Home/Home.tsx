import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getInfoCourses } from '../../Action/actionIndex';

import style from "./home.module.css"
import { Course } from '../../Interfaces/interface';
import { AppDispatch, RootState } from '../../Store/storeData';
import Paginated from '../../Paginated/paginated';

const Home: React.FC = () =>  {

    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.allInfo) as Course[]


    const [currentPage, setCurrentPage] = useState<number>(1);
    const [coursesPerPage, setCoursesPerPage] = useState<number>(10) 
    const indexOfLast = currentPage * coursesPerPage
    const indexOfFirst = indexOfLast - coursesPerPage
    const currentCourse = data.slice(indexOfFirst, indexOfLast)

    useEffect(() => {
        dispatch(getInfoCourses());
    }, [dispatch]);

    const paginado = (pageNum: number) => {
        setCurrentPage(pageNum)
    }

    const handlePage = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();

        if (event.currentTarget.name === "next") {
            if (currentPage >= Math.ceil(data.length / coursesPerPage)) {
                alert("This is the last page");
                return; 
            }
            setCurrentPage(currentPage + 1)
        }
        if (event.currentTarget.name === "prev") {
            if (currentPage === 1) {
                alert("This is the first page");
                return; 
            }
            setCurrentPage(currentPage - 1)
        }
    };

    return (
        <div className={style.container}>
            <h1 className={style.head}>List courses</h1>
            <div className={style.bodyContainer}>
                    {currentCourse.length > 0 ? (
                        <div className={style.body}>
                            <div className={style.columns}>
                                {currentCourse.map((c, index) => (
                                    <Link to={`/course/${c.id}`} key={index} className={style.link}>
                                        <div className={style.gridColumn}>
                                            <p className={style.opcions} key={c.id}>" {c.title} "</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <h1>No courses available</h1> 
                    )}
                <div className={style.pag}>
                    <div >
                        <button className={style.pagBTN} onClick={handlePage} name="prev"> Prev </button>
                        <button className={style.pagBTN}  name="next">next</button>
                    </div>
                    <div>
                        <Paginated 
                            coursesPerPage = {coursesPerPage}
                            data = {data.length}
                            paginado = {paginado}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;