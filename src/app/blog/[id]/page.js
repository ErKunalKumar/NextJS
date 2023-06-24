import React from "react";

const FetchDataWithId = async (id) => {
  const res = await fetch(`https://dummyjson.com/products${id}`);
  return res.json();
};
const BlogPageDetailsWithId = async ({ params }) => {
  const { id } = params;
  const data = await FetchDataWithId(id);
  console.log(data);
  return <div>{data.description}</div>;
};

export default BlogPageDetailsWithId;
