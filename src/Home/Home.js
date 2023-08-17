import Slide from "../Slider/Slider";
import Category from "../Category/Category";
import ProductList from "../ProductList/ProductList";

function HomePage(props) {
  const { posts, category,setPosts,products, query, setQuery, handleSearch } = props;
  return (
    <>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <Category 
            category={category}
            posts={posts}
            setPosts={setPosts}
            products={products}/>
            <Slide />
          </div>
          <div className="col-md-9">
            <div className="row">
              {
              posts.filter((post)=>
              post.title.toLowerCase().includes(query))
              .map((post) => {
                const {id, title, description, price, rating, image, category} = post;
                return (
                  <div className="col-md-4 mb-4" key={id}>
                  <ProductList
                   title={title}
                   description={description}
                   price={price}
                   rating={rating}
                   image={image}
                   category={category}
                   />
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
