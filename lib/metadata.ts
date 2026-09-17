import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

/**
 * Generate page-specific metadata with sensible defaults.
 * Usage in any page: export const metadata = createMetadata({ title: '...', description: '...' });
 */
export function createMetadata({
  title,
  description,
  image,
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const { seo } = siteConfig;

  const resolvedTitle = title
    ? seo.titleTemplate.replace('%s', title)
    : seo.defaultTitle;
  const resolvedDescription = description || seo.defaultDescription;
  const resolvedImage = image || seo.defaultImage;
  const resolvedUrl = `${seo.siteUrl}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(seo.siteUrl),
    alternates: {
      canonical: resolvedUrl,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: resolvedUrl,
      siteName: seo.siteName,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      locale: seo.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
      creator: seo.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Generate project-specific metadata for dynamic project pages.
 */
export function createProjectMetadata({
  name,
  description,
  image,
  slug,
}: {
  name: string;
  description: string;
  image?: string;
  slug: string;
}): Metadata {
  return createMetadata({
    title: name,
    description,
    image,
    path: `/projects/${slug}`,
  });
}
