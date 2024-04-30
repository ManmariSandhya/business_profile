import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { StarFill } from "react-bootstrap-icons";
import { SearchComponent } from "../search/search";
import { FileComponent } from "../image_file";



function CreateProfile() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const [userForm, setUserForm] = useState({
    BusinessName: "",
    Email: "",
    PhoneNumber: "",
    AdharNumber: "",
    Disability: "",
    // Address: "",
    City: "",
    State: "",
    Country: "",
    BusinessCategory: "",
    BusinessDetails: "",
    Timings: "",
    WebsiteURL: "",

  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    // axios
    //   .post("http://localhost:4000/students/create-student", userForm)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert("data saved successfully");
    //     setUserForm({
    //       BusinessName: "",
    //       Email: "",
    //       PhoneNumber: "",
    //       AdharNumber: "",
    //       Disability:"",
    //       // Address: "",
    //       City: "",
    //       State: "",
    //       Country: "",
    //       BusinessCategory: "",
    //       BusinessDetails: "",
    //       Timings: "",
    //       WebsiteURL: "",

    //     });

    //   });

    // return false;


    try {
      // Using Axios
      await axios.post("http://localhost:4000/students/create-student", userForm);
      console.log("Data saved successfully with Axios");
      alert("Data saved successfully");

      // Resetting form fields
      setUserForm({
        BusinessName: "",
        Email: "",
        PhoneNumber: "",
        AdharNumber: "",
        Disability: "",
        City: "",
        State: "",
        Country: "",
        BusinessCategory: "",
        BusinessDetails: "",
        Timings: "",
        WebsiteURL: "",

      });

      // Using Fetch
      const email = userForm.Email; // Assuming the email field is present in userForm
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (!res.ok) {
        throw new Error('Failed to send email');
      }

      const data = await res.json();
      console.log(data);
      alert("Email sent successfully");
    } catch (error) {
      console.error('Error:', error.message);
      alert("Error occurred. Please try again later.");

    }

  };

  useEffect(() => { }, []);

  return (
    <div>
      <div className="form-wrapper" >
        <h3 style={{ textAlign: 'center', color: 'CaptionText' }}>Business Profile</h3>
        <form onSubmit={onSubmit} style={{ marginTop: '20px' }}>
          <div className="mb-3">
            <label className="form-label"><b>BusinessName</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <input
              {...register("BusinessName", { required: true })}
              type="text"
              className="form-control"
              name="BusinessName"
              id="BusinessName"
              value={userForm.BusinessName}
              onChange={inputsHandler}
            />
            {
              errors && errors.BusinessName ? <span style={{ color: 'red' }}>Please Fill Business Name</span> : ''
            }
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Email</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <input
              {...register("Email", {
                required: true, pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email format should be name@gmail.com"
                }
              })}
              type="text"
              className="form-control"
              name="Email"
              id="Email"
              value={userForm.Email}
              onChange={inputsHandler}

            />


            {
              errors.Email && errors.Email.type === 'required' ? <span className='text-danger'> Enter Your Email</span> :
                errors.Email && errors.Email.message ? <span className='text-danger'>{errors.Email.message}</span> : ''

            }
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Phone Number</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <input
              {...register("PhoneNumber", {
                required: true, pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "PhoneNumber should contain 10 digits only"
                }
              })}
              type="text"
              className="form-control"
              name="PhoneNumber"
              id="PhoneNumber"
              value={userForm.PhoneNumber}
              onChange={inputsHandler}
            />
            {
              errors.PhoneNumber && errors.PhoneNumber.type === 'required' ? <span className='text-danger'>Enter Mobile Number</span> :
                errors.PhoneNumber && errors.PhoneNumber.message ? <span className='text-danger'>{errors.PhoneNumber.message}</span> : ''
            }


          </div>
          <div className="mb-3">
            <label className="form-label"><b>Adhar Number</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <input
              {...register("AdharNumber", {
                required: true, pattern: {
                  value: /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/,
                  message: "Adhar Number should contain 12 digits only"
                }
              })}
              type="text"
              className="form-control"
              name="AdharNumber"
              id="AdharNumber"
              value={userForm.AdharNumber}
              onChange={inputsHandler}
            />
            {
              errors.AdharNumber && errors.AdharNumber.type === 'required' ? <span className='text-danger'>Enter Adhar Number</span> :
                errors.AdharNumber && errors.AdharNumber.message ? <span className='text-danger'>{errors.AdharNumber.message}</span> : ''
            }

          </div>

          <div className="mb-3">
            <label className="form-label"><b>Disability</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
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
                <label><b>City</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
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
                <label><b>State</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
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
                <label><b>Country</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
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
          <br></br>
          <div className="mb-3">
            <label className="form-label"><b>Business Details</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <textarea
              {...register("BusinessDetails", { required: true })}
              type="text"
              className="form-control"
              name="BusinessDetails"
              id="BusinessDetails"
              value={userForm.BusinessDetails}
              onChange={inputsHandler}

            />
            {
              errors && errors.BusinessDetails ? <span style={{ color: 'red' }}>Please Fill Business Details</span> : ''
            }
          </div>
          {/* <div className="row">
            <div className="col-6 mt-0 ml-0">
              <label className="form-label"><b>Business Category</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
              <SearchComponent></SearchComponent>
            </div>
            <div className="col-6 mt-5">
              <div className="mb-3">
                <label className="form-label"><b>Business Category</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
                <select type="hiden"
                  {...register("BusinessCategory", { required: true })}
                  className="form-control"
                  name="BusinessCategory"
                  id="BusinessCategory"
                  value={userForm.BusinessCategory}
                  onChange={inputsHandler} >
                  <option >---Select Category ---</option>
                  <option>Restaurant</option>
                  <option>Beauty</option>
                  <option>Hotel</option>
                  <option>Contractor</option>
                  <option>Tutors</option>
                  <option>Evenet Planner</option>
                  <option>Gym</option>
                  <option>Jewellery</option>
                </select>

                {
                  errors && errors.BusinessName ? <span style={{ color: 'red' }}>Please Fill Business Category</span> : ''
                }
              </div>
            </div>
          </div> */}
          <div className="mb-3">
            <label className="form-label"><b>Business Category</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <select type="text"

              className="form-control"
              name="BusinessCategory"
              id="BusinessCategory"
              value={userForm.BusinessCategory}
              onChange={inputsHandler} >
              <option >---Select Category ---</option>
              <option>Restaurant</option>
              <option>Beauty</option>
              <option>Hotel</option>
              <option>Contractor</option>
              <option>Tutors</option>
              <option>Evenet Planner</option>
              <option>Gym</option>
              <option>Jewellery</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Timings</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>

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
            <label className="form-label"><b>WebsiteURL</b>&nbsp;<StarFill style={{ fontSize: '8px', color: 'orangered' }}></StarFill></label>
            <input
              {...register("WebsiteURL", {
                required: true,
                pattern: {
                  value: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/,
                  message: "Website URL Format should be http/https://abc.abc.com"
                }
              })}
              type="text"
              className="form-control"
              name="WebsiteURL"
              id="WebsiteURL"
              value={userForm.WebsiteURL}
              onChange={inputsHandler}
            />
            {/* {
              errors && errors.WebsiteURL ? <span style={{ color: 'red' }}>Please Fill WebsiteURL</span> : ''
            } */}
            {
              errors.WebsiteURL && errors.WebsiteURL.type === 'required' ? <span className='text-danger'>Please Enter Your Website URL </span> :
                errors.WebsiteURL && errors.WebsiteURL.message ? <span className='text-danger'>{errors.WebsiteURL.message}</span> : ''
            }
          </div>
          <br></br>
          <div>
            <FileComponent></FileComponent>
          </div>
          <br></br>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit((userForm) => onSubmit(userForm))} >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfile;





