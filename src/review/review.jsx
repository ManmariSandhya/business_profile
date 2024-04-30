// ReviewForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [review, setReview] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/reviews', review);
      alert("review saved")
      // Optionally, you can add a success message or redirect the user
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error
    }
  };
  useEffect(() => { }, []);

  return (
    <form onSubmit={handleSubmit} className='container'>
        <h4>Give Review and Rating About Profile Creation</h4>
        <br></br><br></br>
      <input type="text" name="name" placeholder="Name" value={review.name} onChange={handleChange} className='form-control'/><br></br><br></br>
      <input type="number" name="rating" placeholder="Rating (1-5)" value={review.rating} onChange={handleChange} className='form-control'/><br></br><br></br>
      <textarea name="comment" placeholder="Comment" value={review.comment} onChange={handleChange} className='form-control'></textarea><br></br><br></br>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
