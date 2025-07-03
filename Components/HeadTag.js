import React from 'react';
import Head from 'next/head';
import { userinfo } from '../Constants/userinfo';

const HeadTag = ({ pageTitle = '', image = '/favicon.png' }) => {
  const siteTitle = userinfo.logoText;
  const description = userinfo.greeting.subtitle;

  const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="icon" href="/favicon.png" />

      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default HeadTag;
