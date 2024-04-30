import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { SearchComponent } from "../search/search";

function EditStudent() {
  const [userForm, setUserForm] = useState({
    BusinessName: '',
    Email: '',
    PhoneNumber: '',
    AdharNumber: '',
    Disability: '',
    // Address: '',
    City: '',
    State: '',
    Country: '',
    BusinessDetails: '',
    BusinessCategory: '',
    Timings: '',
    WebsiteURL: '',

  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/students/update-student/" + params.id, {
        BusinessName: userForm.BusinessName,
        Email: userForm.Email,
        PhoneNumber: userForm.PhoneNumber,
        AdharNumber: userForm.AdharNumber,
        Disability: userForm.Disability,
        // Address: userForm.Address,
        City: userForm.City,
        State: userForm.State,
        Country: userForm.Country,
        BusinessDetails: userForm.BusinessDetails,
        BusinessCategory: userForm.BusinessCategory,
        Timings: userForm.Timings,
        WebsiteURL: userForm.WebsiteURL,

      })
      .then((res) => {
        console.log({ status: res.status });

        navigate("/student-list");
        alert("data updated successfully");
      });


   
      // try {
      //     // Update student data using Axios
      //     const updateResponse = await axios.put(`http://localhost:4000/students/update-student/${params.id}`, {
      //         BusinessName: userForm.BusinessName,
      //         Email: userForm.Email,
      //         PhoneNumber: userForm.PhoneNumber,
      //         AdharNumber: userForm.AdharNumber,
      //         Disability: userForm.Disability,
      //         City: userForm.City,
      //         State: userForm.State,
      //         Country: userForm.Country,
      //         BusinessDetails: userForm.BusinessDetails,
      //         BusinessCategory: userForm.BusinessCategory,
      //         Timings: userForm.Timings,
      //         WebsiteURL: userForm.WebsiteURL,
      //     });
  
      //     if (updateResponse.status !== 200) {
      //         throw new Error('Failed to update student data');
      //     }
  
      //     // Send email registration request using Fetch API
      //     const emailResponse = await fetch("http://localhost:4000/register", {
      //         method: "POST",
      //         headers: {
      //             "Content-Type": "application/json"
      //         },
      //         body: JSON.stringify({
      //             email: userForm.Email
      //         })
      //     });
  
      //     if (!emailResponse.ok) {
      //         throw new Error('Failed to send email');
      //     }
  
      //     // Handle the response data here if needed
      //     const emailData = await emailResponse.json();
      //     console.log(emailData);
      //     navigate("/student-list");
      //     // Display success message
      //     alert("Student data updated successfully and email sent successfully");
      // } catch (error) {
      //     console.error('Error:', error.message);
      //     alert("An error occurred. Please try again later.");
      // }
  
  
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/get-student/" + params.id)
      .then((res) => {
        setUserForm({
          BusinessName: res.data.data.BusinessName,
          Email: res.data.data.Email,
          PhoneNumber: res.data.data.PhoneNumber,
          AdharNumber: res.data.data.AdharNumber,
          Disability: res.data.data.Disability,
          // Address: res.data.data.Address,
          City: res.data.data.City,
          State: res.data.data.State,
          Country: res.data.data.Country,
          BusinessDetails: res.data.data.BusinessDetails,
          BusinessCategory: res.data.data.BusinessCategory,
          Timings: res.data.data.Timings,
          WebsiteURL: res.data.data.WebsiteURL,

        });
      });
  }, []);

  return (
    <div>
      <div className="form-wrapper" >
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label"><b>BusinessName</b></label>
            <input
              type="text"
              className="form-control"
              name="BusinessName"
              id="BusinessName"
              value={userForm.BusinessName}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Email</b></label>
            <input
              type="text"
              className="form-control"
              name="Email"
              id="Email"
              value={userForm.Email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Phone Number</b></label>
            <input
              type="text"
              className="form-control"
              name="PhoneNumber"
              id="PhoneNumber"
              value={userForm.PhoneNumber}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Adhar Number</b></label>
            <input
              type="text"
              className="form-control"
              name="AdharNumber"
              id="AdharNumber"
              value={userForm.AdharNumber}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Disability</b></label>
            <select
              type="text"
              className="form-control"
              name="Disability"
              id="Disability"
              value={userForm.Disability}
              onChange={inputsHandler}
            >
              <option>Disability</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div>
                <label><b>City</b></label>
              </div>
              <div >
                <select
                  type="text"
                  className="form-control"
                  name="City"
                  id="City"
                  value={userForm.City}
                  onChange={inputsHandler}
                >
                  <option>City</option>
                  <option>Hyderabad</option>
                  <option>Adhilabad</option>
                  <option>Varanasi</option>
                  <option>Vijayavada</option>
                </select>

              </div>

            </div>
            <div className='col-4'>
              <div>
                <label><b>State</b></label>
              </div>
              <div>
                <select
                  type="text"
                  className="form-control"
                  name="State"
                  id="State"
                  value={userForm.State}
                  onChange={inputsHandler}
                >
                  <option>State</option>
                  <option>Telangana</option>
                  <option>TamilNadu</option>
                  <option>Kerala</option>
                  <option>Andra Pradesh</option>
                </select>

              </div>

            </div>
            <div className='col-4'>
              <div>
                <label><b>Country</b></label>
              </div>
              <div>
                <select
                  type="text"
                  className="form-control"
                  name="Country"
                  id="Country"
                  value={userForm.Country}
                  onChange={inputsHandler}
                >

                  <option>Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Japan</option>
                </select>

              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label"><b>Business Details</b></label>
            <input
              type="text"
              className="form-control"
              name="BusinessDetails"
              id="BusinessDetails"
              value={userForm.BusinessDetails}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Business Category</b></label>
            <input
              type="text"
              className="form-control"
              name="BusinessCategory"
              id="BusinessCategory"
              value={userForm.BusinessCategory}
              onChange={inputsHandler}
            />
          </div>
          {/* <div className="row">
            <div className="col-6 mt-0 ml-0">
              <label className="form-label"><b>Business Category</b></label>
              <SearchComponent></SearchComponent>
            </div>
            <div className="col-6 mt-5">
              <div className="mb-3">
                <label className="form-label"><b>Business Category</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
                <select type="text"

                  className="form-control"
                  name="BusinessCategory"
                  id="BusinessCategory"
                  value={userForm.BusinessCategory}
                  onChange={inputsHandler} >
                  <option >---Select Category ---</option>
                  <option>Plumber</option>
                  <option>Mechanic</option>
                  <option>Beuty</option>
                  <option>Carpenter</option>
                </select>
               </div>
            </div>
          </div> */}
          <div className="mb-3">
            <label className="form-label"><b>Timings</b>&nbsp;</label>

            <select type="text"

              className="form-control"
              name="Timings"
              id="Timings"
              value={userForm.Timings}
              onChange={inputsHandler} >
              <option >---Select Your Timings ---</option>
              <option>9:00 AM - 6:00 PM</option>
              <option>10:00 AM - 5:00 PM</option>
              <option>11:00 AM - 7:00 PM</option>
              <option>9:30 AM - 8:00 PM</option>
            </select>

          </div>
          <div className="mb-3">
            <label className="form-label"><b>WebsiteURL</b></label>
            <input
              type="text"
              className="form-control"
              name="WebsiteURL"
              id="WebsiteURL"
              value={userForm.WebsiteURL}
              onChange={inputsHandler}
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;
