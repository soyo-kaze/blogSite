import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const app = axios.create({
  baseURL: "https://reactbackendsoyokaze.herokuapp.com/",
});

const handlePostApi = (data, action, item) => {
  //   console.log("some");
  //   console.log(blogData);
  console.log(data);
  app
    .post("/add", data)
    .then((res) => action(true))
    .catch((err) => alert(err));
};

const FormData = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [data, setData] = useState({
    imgUrl: "",
    title: "",
    author: "",
    id: "",
    time: "",
    smallDes: "",
    thePara: "",
  });

  //   console.log(data);
  return isSuccess ? (
    <div className="p-10 w-full flex justify-center items-center flex-col space-y-5">
      <p class="font-semibold text-6xl">Successfully Added!!</p>
      <button
        className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24"
        onClick={() => setSuccess(false)}
      >
        Add another
      </button>
    </div>
  ) : (
    <div className="p-10 w-full flex justify-center items-center flex-col space-y-5">
      {data.imgUrl.length === 0 ? (
        <p>Image Here</p>
      ) : (
        <img
          className="max-w-md object-contain rounded-md shadow-lg p-2"
          src={data.imgUrl}
          alt="invalid Img URL"
        />
      )}
      <form className="flex flex-col items-center justify-center space-y-4">
        <input
          type="url"
          value={data.imgUrl}
          required
          onChange={(event) => {
            setData({ ...data, imgUrl: `${event.target.value}` });
          }}
          placeholder="Image"
        />
        <input
          type="text"
          value={data.title}
          onChange={(event) => {
            setData({ ...data, title: `${event.target.value}` });
          }}
          placeholder="Title"
        />
        <input
          type="text"
          value={data.author}
          onChange={(event) => {
            setData({ ...data, author: `${event.target.value}` });
          }}
          placeholder="Author"
        />
        <textarea
          col="2"
          value={data.smallDes}
          onChange={(event) => {
            setData({ ...data, smallDes: `${event.target.value}` });
          }}
          placeholder="Small Description"
        />
        <textarea
          col="6"
          value={data.thePara}
          onChange={(event) => {
            setData({ ...data, thePara: `${event.target.value}` });
          }}
          placeholder="Write your para here!!"
        />
        <input
          type="text"
          value={data.id}
          onChange={(event) => {
            setData({ ...data, id: `${event.target.value}` });
          }}
          placeholder="UID"
        />
      </form>
      <button
        className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24"
        onClick={() => {
          handlePostApi(data, setSuccess, isSuccess);
        }}
      >
        Submit
      </button>
      <Link to="/">
        <button className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24">
          less goo
        </button>
      </Link>
    </div>
  );
};

export default FormData;
