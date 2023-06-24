import Link from "next/link";
import React from "react";
import Image from "next/image";

const Cards = ({ title, price, img, category, id }) => {
  return (
    <div className="col-lg-3 my-4 mx-4">
      <div classname="card" style={{ width: "18rem" }}>
        {/* <img src="..." classname="card-img-top" alt="..." /> */}
        <Image src={img} alt="image" width={100} height={100} />
        <div classname="card-body">
          <h5 classname="card-title">{title}</h5>
          <p classname="card-text">{price}</p>
          <span>{category}</span>
          <br />
          <br />
          {/* <a href="#" classname="btn btn-primary">
            Go somewhere
          </a> */}
          <Link href={`/blog/${id}`} className="btn btn-outline-secondary">
            Go to Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const GetData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};
const Blog = async () => {
  const data = await GetData();
  const products = data.products;
  // console.log(data.products);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Cards
            title={product.title}
            price={product.price}
            img={product.thumbnail}
            category={product.category}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
