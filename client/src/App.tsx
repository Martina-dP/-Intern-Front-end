import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import CourseDetail from './Components/Details/Course';
import { CoursesProvider } from './Store/storeData';
import LessonsDetail from './Components/Details/Lesson';
import './App.css'

const App: React.FC = () => {
  return (
    <CoursesProvider> 
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/course/:id" element={<CourseDetail />} /> 
            <Route path="/course/:id/modules/:moduleIndex/lesson/:lessonIndex" element={<LessonsDetail />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </CoursesProvider>
  );
}

export default App;
