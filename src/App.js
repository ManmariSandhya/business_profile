import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route} from "react-router-dom";

import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";
import { BusinessProfileCreation } from "./components/sendMail";
import { Header } from "./header/header";
import ReviewForm from "./review/review";
import CreateProfile from "./components/CreateStudent";
import { FileComponent } from "./image_file";



function App() {
  return (
    <div className="App">
      <Header></Header>
   
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-student" element={<CreateProfile />} />
            <Route exact path="/edit-student/:id" element={<EditStudent />} />
            <Route exact path="/student-list" element={<StudentList />} />
            <Route exact path="/review" element={<ReviewForm></ReviewForm>}></Route>
            <Route exact path="/sendMail" element={<BusinessProfileCreation></BusinessProfileCreation>}></Route>
            <Route exact path="/image_upload" element={<FileComponent></FileComponent>}></Route>
          </Routes>
        </div>
      </div> 
    
    
    </div>
  );
}

export default App;
