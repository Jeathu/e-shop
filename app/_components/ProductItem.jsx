import React from "react";

/* <div className="hover:border p-1 rounded-lg border-blue-300 ">  ===  <div className=" p-1 rounded-lg ">  */
function ProductItem({ product }) {
  return ( 
    <div>
      <div className=" hover:border p-1 rounded-lg border-blue-300 ">
        {product && product.attributes && product.attributes.banner && (
          <img
            src={product.attributes.banner.data.attributes.url}
            alt="banner"
            width={200}
            height={200}
            className="rounded-t-lg rounded-b-lg h-200 object-cover"
          />
        )}

        <div className="flex flex-col justify-between p-2 rounded-b-lg">
          <div className="p-1">
            <h2 className="text-sm font-medium line-clamp-2">
              {product.attributes.title}
            </h2>
          </div>

          <div>
            <h5
              className="text-sm font-medium line-clamp-2"
              style={{ color: "grey" }}
            >
              {product.attributes.description[0].children[0].text}
            </h5>
          </div>

          <div>
            <h2 className="font-medium p-1">{product.attributes?.pricing} €</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
