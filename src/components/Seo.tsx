import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://biz-flow.cloud';
const SITE_NAME = 'Biz-flow';
const DEFAULT_IMAGE = 'https://biz-flow.cloud/logo.png';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumb?: BreadcrumbItem[];
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    'https://youtube.com/@biz-flow-cloud',
    'https://www.facebook.com/share/1CJt9QpQtN/',
    'https://www.linkedin.com/in/biz-flow-60457b398',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+258840636794',
      contactType: 'customer support',
      areaServed: 'MZ',
      availableLanguage: ['Portuguese'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Julius Nyerere 145',
    addressLocality: 'Maputo',
    addressRegion: 'Maputo',
    postalCode: '1100',
    addressCountry: 'MZ',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: SITE_NAME,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: 'AccountingApplication',
  operatingSystem: 'Web',
  genre: 'Finance',
  description: 'SaaS de gestão financeira e faturação para micro e pequenas empresas em Moçambique.',
  softwareVersion: '2026.1',
  author: {
    '@type': 'Organization',
    name: 'Ruchan Group',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '120',
    bestRating: '5',
  },
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'MZN',
    url: SITE_URL,
  },
  image: DEFAULT_IMAGE,
};

export default function Seo({ title, description, canonicalPath, breadcrumb = [] }: SeoProps) {
  const pageUrl = `${SITE_URL}${canonicalPath}`;
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    ...breadcrumb.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={DEFAULT_IMAGE} />
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, websiteSchema, softwareApplicationSchema, breadcrumbSchema])}
      </script>
    </Helmet>
  );
}
