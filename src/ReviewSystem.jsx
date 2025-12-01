import React, { useEffect, useState } from "react";
import Card from "./Card";

const ReviewSystem = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = () => {
    if (!username || !comment || !rating) {
      alert("Please fill all fields!");
      return;
    }

    const newReview = {
      username,
      comment,
      rating,
      time: new Date().toLocaleString(),
    };

    setReviews([...reviews, newReview]);

    setUsername("");
    setComment("");
    setRating("");
  };

  return (
    <div className="flex flex-row justify-center gap-10 h-screen items-center">
      <div className="flex flex-col gap-8 border-b-black h-[90%] border p-20 rounded-2xl">
        <h2 className="text-3xl font-medium">Submit a Review</h2>

        <div className="flex flex-col">
          <label>UserName</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-3xl p-3"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label>Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg p-3"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label>Rating (1 to 5)</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border rounded-3xl p-2.5"
          >
            <option value="">Select Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <button
          onClick={addReview}
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white rounded-xl w-40 p-1.5"
        >
          Submit Review
        </button>
      </div>

      <div className="w-[50%] h-[90%] overflow-x-auto flex flex-col gap-8 border-b-black border p-20 rounded-2xl">
        <p className="text-3xl font-medium ">Reviews</p>
        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        {reviews.map((r,index) => (
        <div key={index} className="rounded-xl border p-3 ">
          <div className="flex flex-row justify-between">
            <p className="font-medium ">{r.username}</p>
            <p>{"⭐".repeat(r.rating)}</p>
          </div>
          <p>{r.comment}</p>
          <p className="text-sm">{r.time}</p>
        </div>))}
      </div>
    </div>
  );
};

export default ReviewSystem;
