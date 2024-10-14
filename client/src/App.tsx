import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './Components/Home/Home';
import CourseDetail from './Components/Details/Course';
import LessonsDetail from './Components/Details/Lesson';
import store from './Store/storeData';
import './App.css'


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/course/:id" element={<CourseDetail />} /> 
            <Route path="/course/:id/modules/:moduleIndex/lesson/:lessonIndex" element={<LessonsDetail />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
