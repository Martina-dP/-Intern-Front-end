import React from 'react';
import { useParams } from 'react-router-dom';
import { useCourses } from '../../../Store/storeData';

const ModulesDetail: React.FC = () =>  {

    const { id } = useParams<{ id: string }>(); 
    const courses = useCourses(); 
    const course = courses.find((c) => c.id === Number(id)); 

    if (!course) {
        return <h2>Curso no encontrado</h2>;
    }

    return (
        <div>
            <h1>List courses</h1>
    </div>
    );
}

export default ModulesDetail;