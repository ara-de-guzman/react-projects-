import React, { useState } from "react";
import Title from "../components/Title";
import { FcPortraitMode } from "react-icons/fc";
import {
  AiFillMessage,
  AiFillLike,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";


function LikePhotoApp() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1)
    } else {
      setLike(false);
      setCount(count - 1)
    }
  };


  return (
    <div className="container text-center">
      <Title text="Like My Photo" />
      <Title classes={"subtitle"} text={`Like ${count}`} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <FcPortraitMode className="mr-2" />
          <small>Doggy Dog</small>
        </div>
        <img
          src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
          alt="dog"
          style={{ height: "fit-content" }}
        />

        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiFillMessage />
          {""}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikePhotoApp;
