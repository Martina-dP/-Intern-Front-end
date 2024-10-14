import React from 'react';

interface PaginatedProps {
    coursesPerPage: number; 
    data: number;     
    paginado: (pageNum: number) => void; 
}

const Paginated: React.FC<PaginatedProps> = ({coursesPerPage, data, paginado}) =>  {
        const pageNum = []
        for (let i = 1; i <= Math.ceil(data/coursesPerPage); i++) { //divide todos los paises por cantidad de paises que quiero en cada pag
            pageNum.push(i)
        }
    
        return (
            <nav >
            </nav>
        )
    }
    

export default Paginated;