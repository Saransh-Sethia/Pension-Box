import React from 'react';
import './Category.css';
function Category({category,setPosts,products}) {
  return (
    <div className="button">
<button onClick={()=>category("men's clothing")}>Men</button>
<button onClick={()=>category("women's clothing")}>Women</button>
<button onClick={()=>category("jewelery")}>Jewelery</button>
<button onClick={()=>category("electronics")}>Electronics</button>
<button onClick={()=>products()}>All</button>
    </div>
  )
}

export default Category