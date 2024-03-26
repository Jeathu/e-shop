"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/_utils/GlobalApi";
import Breadcrumb from "@/app/_components/Breadcrumb";
import ProjectInfo from "./_components/Projectinfo";
import ProjectBanner from "./_components/ProjectBanner";

function ProjectDetail({ params }) {
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    console.log("project Id", params?.projectId);
    params?.projectId && getProductById_();
  }, [params?.projectId]);

  const getProductById_ = () => {
    GlobalApi.getProductById(params?.projectId).then((resp) => {
      setProductDetail(resp.data.data);
    });
  };

  return (
    <div className="p-5 py-12 px-10 md:px-28">
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 sm:gap-5 justify-evenly">
        <ProjectBanner product={productDetail} />
        <ProjectInfo product={productDetail} />
      </div>
    </div>
  );
}

export default ProjectDetail;
