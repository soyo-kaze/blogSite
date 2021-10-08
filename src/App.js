// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import axios from "axios";
import FormData from "./FormData";
const app = axios.create({
  baseURL: "https://reactbackendsoyokaze.herokuapp.com/",
});

// app
//   .post("/add", { message: "data I have some", id: 3342, name: "soyok" })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const Card = ({ imgUrl, title, smallDes, author, id }) => {
  const blogUri = `/blog/${id}`;
  return (
    <div className="rounded-md shadow-lg max-w-lg">
      <img
        className=" rounded-t-md rounded-tr-md object-contain "
        src={imgUrl}
        alt="blog_pic"
      />
      <span className="flex p-4 flex-col">
        <p className="font-bold mb-1">{title}</p>
        <hr />
        <p className="mt-4 leading-4">{smallDes}</p>
        <p className="mt-4 text-gray-500 italic">{author}</p>
        <Link to={blogUri}>
          <button className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24">
            Read more
          </button>
        </Link>
      </span>
    </div>
  );
};

const handleApi = (action1, action2) => {
  app
    .get("/data")
    .then((res) => {
      // console.log(res.data.data);
      action1(res.data.data);
      action2(Object.keys(res.data.data));
    })
    .catch((err) => console.log(err));
};

const Home = () => {
  const [blogData, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [newKey, setNewKey] = useState([]);
  useEffect(() => {
    const keyNewArr = [[]];
    const keyLen = keys.length;
    let key = 0;
    for (let i = 1; i <= keyLen; i++) {
      if (i % 3) {
        keyNewArr[key].push(keys[i - 1]);
      } else {
        keyNewArr[key].push(keys[i - 1]);
        keyNewArr.push([]);
        key++;
      }
    }
    setNewKey(keyNewArr);
    console.log("hello");
  }, [keys]);
  useEffect(() => {
    handleApi(setData, setKeys);
  }, []);

  return (
    <>
      <div className="flex  justify-center items-center flex-col">
        <span className="p-10 w-full flex justify-center items-center">
          <p className="font-semibold text-6xl">Welcome to my blogSite</p>
        </span>
        <span className="flex  justify-center items-center p-10">
          {blogData.length !== 0 ? (
            <span className="flex flex-col items-center justify-center space-y-4 md:space-x-4 md:space-y-6">
              {newKey.map((a) => (
                <span className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
                  {a.map((data, x) => (
                    <Card {...blogData[data]} key={x} />
                  ))}
                </span>
              ))}
            </span>
          ) : (
            "Loding..."
          )}
        </span>
        <Link to="/form">
          <button className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold ">
            Add new blog
          </button>
        </Link>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/blog/:id" component={Blog} />
        <Route path="/form" component={FormData} />
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
