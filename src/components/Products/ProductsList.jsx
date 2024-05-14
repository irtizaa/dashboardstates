import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../Hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
import { object } from "zod";
import Pagination from "../Common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");

  const { data, error, isLodaing } = useData(
    "/products",
    {
      params: {
        category,
        page,
      },
    },
    [category, page]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    console.log(currentParams);
    // setSearch({ ...currentParams, page: page });
    setSearch({ ...currentParams, page: page });
  };
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   apiClient
  //     .get("/products")
  //     .then((res) =>
  //       setProducts(res.data.products).catch((err) => setError(err.message))
  //     );
  // }, []);
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price dec">Price Height to Low</option>
          <option value="price asc">Rate Low to High</option>
          <option value="rate dec">Rate Height to Low</option>
          <option value="rate asc">Rate Low to High</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {isLodaing &&
          skeletons.map((n) => {
            <ProductCardSkeleton key={n} />;
          })}
        {data?.products &&
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.images[0]}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCount={product.reviews.counts}
              stock={product.stock}
            />
          ))}
        <button onClick={() => handlePageChange(2)}>Page 2</button>
      </div>
      {/* <Pagination
        totalPosts={data.totalProducts}
        // totalPosts={data.totalProducts}
        postPerPage={8}
        onClick={handlePageChange}
      /> */}
    </section>
  );
};

export default ProductsList;
