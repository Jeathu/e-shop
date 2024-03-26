import React from "react";

function ProjectBanner({ product }) {
  return (
    <div>
      <img
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="banner"
        width={300}
        hanging={300}
        className="rounded-lg object-cover"
      />
    </div>
  );
}

export default ProjectBanner;
