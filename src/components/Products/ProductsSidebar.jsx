import React from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../Hooks/useData";

const ProductsSidebar = () => {
  const { data: categories, error } = useData("/category");

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              key={category._id}
              id={category._id}
              title={category.name}
              Link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;

// import { React, useEffect, useState } from "react";
// import apiClient from "../../utils/api_client";
// import "./ProductsSidebar.css";
// import LinkWithIcon from "../Navbar/LinkWithIcon";
// import rocket from "../../assets/rocket.png";

// function ProductsSidebar() {
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     apiClient.get("/category").then((res) => {
//       setCategories(res.data).catch((err) => {
//         setError(err.message);
//       });
//     });
//   });

//   return (
//     <aside className="products_sidebar">
//       <h2>Category</h2>
//       <div className="category_links">
//         {error && <em className="form_error">{error}</em>}
//         {categories.map((category) => (
//           <LinkWithIcon
//             key={category._id}
//             title={category.name}
//             Link={`products?category=${category.name}`}
//             emoji={`http://localhost:5000/category/${category.image}`}
//             sidebar={true}
//           />
//         ))}
//       </div>
//     </aside>
//   );
// }

// export default ProductsSidebar;
