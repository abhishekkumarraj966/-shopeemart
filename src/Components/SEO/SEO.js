// src/components/SEO/SEO.js

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type,keyword }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:keyword" content={keyword} />
      {/* End Facebook tags */} 
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:keyword" content={keyword} />
      {/* End Twitter tags */}

      {/* self tags */}
      <meta name="creator" content={name} />
      {/* <meta name="card" content={type} /> */}
      <meta name="title" content={title} />
      {/* <meta name="description" content={description} /> */}
      <meta name="keyword" content={keyword} />
      {/* End self tags */}
    </Helmet>
  );
}
