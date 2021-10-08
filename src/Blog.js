import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const app = axios.create({
  baseURL: "https://reactbackendsoyokaze.herokuapp.com/",
});

const handleApi = (action, uid) => {
  app
    .get("/data")
    .then((res) => {
      action(res.data.data[uid]);
    })
    .catch((err) => alert(err));
};

const BlogStruct = ({ imgUrl, title, thePara, author }) => {
  return (
    <div className="p-6 pt-14 md:pl-96  md:pr-96">
      <p className="font-semibold text-6xl mb-4">{title}</p>
      <hr />
      <p className="italic text-gray-500 mt-4 font-semibold text-lg">
        {author}
      </p>
      <span className="flex items-center w-full max-w-6xl justify-center mt-10">
        <img className="w-full object-contain" src={imgUrl} alt={author} />
      </span>
      <p className="mt-10">{thePara}</p>
      <span className="w-full flex  items-center justify-center mt-4">
        <Link to="/">
          <button className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24">
            Home
          </button>
        </Link>
      </span>
    </div>
  );
};

const Blog = (props) => {
  const uid = props.match.params.id;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    handleApi(setBlog, uid);
  }, [uid]);

  return Object.keys(blog).length ? (
    <BlogStruct {...blog} />
  ) : (
    <span className="p-10 w-full flex justify-center items-center">
      <p className="font-semibold text-6xl">Loading..</p>
    </span>
  );
};

export default Blog;
