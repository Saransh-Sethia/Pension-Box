import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import NavScrollExample from './Navbar/Navbar';
import HomePage from './Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
 const url = "https://fakestoreapi.com/products";
 const [posts,setPosts] = useState([]);
 const [query,setQuery] = useState("");
 
 const products = async() => {
  const response = await axios.get(url);
  const result = response.data
  setPosts(result);
 };

 const category = (catItem) => {
  const result = posts.filter((currData)=>{
    return currData.category === catItem;
  });
  setPosts(result);
 };

 const handleSearch = (e) => {
  setQuery(e.target.value);
 }

 useEffect(()=>{
  products();
 },[]);

  return (
    
    <div className="App">
      
  <NavScrollExample
    query={query}
    setQuery={setQuery}
    handleSearch={handleSearch}
     />
  <br />
  <Router>
    <Routes>
    <Route path="/" element=
    {
  <HomePage 
  posts={posts} 
  category={category} 
  products={products}
  query={query}
  setQuery={setQuery}
  handleSearch={handleSearch}
  />
    }
    />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
