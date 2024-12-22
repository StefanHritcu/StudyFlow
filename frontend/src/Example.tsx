import React from "react";
import { Helmet } from "react-helmet-async";

const Example: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Metadati SEO specifici per la pagina Il Consiglio */}
        <title>Example - Study Flow</title>
        <meta
          name="description"
          content="Scopri i membri del Consiglio di Quartiere Bracciano Nuova e la nostra missione per il benessere della comunità."
        />
      </Helmet>
      <div>Example</div>
    </>
  );
};
export default React.memo(Example);
