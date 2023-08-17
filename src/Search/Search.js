import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Search.css';
import  {useState} from 'react';
import url from '../App'
function Search(props) {
const {query, setQuery, handleSearch} = props;
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e)=>handleSearch(e)}
        />
      </Form>
    </div>
  );
}

export default Search;
