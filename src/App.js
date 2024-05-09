import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route} from "react-router-dom";


import { BusinessProfileCreation } from "./components/sendMail";
import { Header } from "./header/header";
import ReviewForm from "./review/review";

import { FileComponent } from "./image_file";
import CreateProfile from "./components/CreateProfile";
import EditProfile from "./components/EditProfile";
import ProfileList from "./components/ProfileList";



function App() {
  return (
    <div className="App">
      <Header></Header>
   
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-profile" element={<CreateProfile></CreateProfile>} />
            <Route exact path="/edit-profile/:id" element={<EditProfile></EditProfile>} />
            <Route exact path="/profile-list" element={<ProfileList></ProfileList>} />
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
