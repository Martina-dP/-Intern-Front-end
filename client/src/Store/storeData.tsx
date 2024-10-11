import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Course } from '../Interfaces/interface';


const CoursesContext = createContext<Course[] | undefined>(undefined);

export const useCourses = () => {
    const context = useContext(CoursesContext);
    if (!context) {
        throw new Error("useCourses debe ser usado dentro de un CoursesProvider");
    }
    return context;
};

interface CoursesProviderProps {
    children: React.ReactNode;
}

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {

    const [courses, setCourses] = useState<Course[]>([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('/data.json');
            setCourses(response.data);
        } catch (error) {
            console.error("Error al obtener los cursos:", error);
        }
    };

    useEffect(() => {
        getCourses();
    }, []); // Se ejecuta solo una vez al cargar el componente

    return (
        <CoursesContext.Provider value={courses}>
            {children}
        </CoursesContext.Provider>
    );
};