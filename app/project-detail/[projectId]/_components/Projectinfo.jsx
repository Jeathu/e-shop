import React from "react";

function ProjectInfo({ product }) {
  // Vérifie si les données du produit sont disponibles, sinon retourne null
  if (!product || !product.attributes) {
    return null;
  }

  const { title, description, pricing } = product.attributes;

  return (
    <div className="flex flex-col p-2 rounded-b-lg">
      <div className="p-1">
        {/* Titre du produit avec une police spécifique */}
        <h1
          className="line-clamp-2 font-bold text-2xl"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {title}
        </h1>
        {/* Remplacez 'Arial, sans-serif' par le nom de la police que vous souhaitez utiliser */}
      </div>

      {description && description[0]?.children && (
        <div>
          {/* Description du produit */}
          <h5
            className="text-sm font-medium line-clamp-2"
            style={{ color: "grey" }}
          >
            {description[0].children[0]?.text}
          </h5>
        </div>
      )}

      <div>
        {/* Affichage du prix */}
        <h2 className="font-medium p-1 text-blue-500 text-xl">
          {pricing || 0} €
        </h2>
        <a
          className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-100 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          href="/download"
        >
          Ajouter au panier
        </a>
      </div>
    </div>
  );
}

export default ProjectInfo;
