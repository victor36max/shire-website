import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPosts,
  getPostBySlug,
  getAdjacentPosts,
  formatDate,
} from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.agents-shire.sh/blog/${slug}`;

  return {
    title: `${post.title} | Shire Blog`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "Shire",
      locale: "en_US",
      publishedTime: `${post.date}T00:00:00Z`,
      modifiedTime: post.updatedAt
        ? `${post.updatedAt}T00:00:00Z`
        : `${post.date}T00:00:00Z`,
      authors: post.author ? [post.author] : ["Shire Contributors"],
      tags: post.tags,
      images: [
        {
          url: post.ogImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogImage || "/og-image.png"],
    },
  };
}

function BlogPostJsonLd({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPostBySlug>>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://www.agents-shire.sh/blog/${post.slug}`,
    datePublished: `${post.date}T00:00:00Z`,
    dateModified: post.updatedAt
      ? `${post.updatedAt}T00:00:00Z`
      : `${post.date}T00:00:00Z`,
    author: {
      "@type": "Organization",
      name: "Shire Contributors",
      url: "https://github.com/victor36max/shire",
    },
    publisher: {
      "@type": "Organization",
      name: "Shire",
      url: "https://www.agents-shire.sh",
      logo: {
        "@type": "ImageObject",
        url: "https://www.agents-shire.sh/favicon.svg",
      },
    },
    image: post.ogImage
      ? `https://www.agents-shire.sh${post.ogImage}`
      : "https://www.agents-shire.sh/og-image.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.agents-shire.sh/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
    isPartOf: {
      "@type": "Blog",
      name: "Shire Blog",
      url: "https://www.agents-shire.sh/blog",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BreadcrumbJsonLd({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPostBySlug>>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.agents-shire.sh",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.agents-shire.sh/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.agents-shire.sh/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev: prevPost, next: nextPost } = getAdjacentPosts(slug);

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BreadcrumbJsonLd post={post} />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Back link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </a>

        {/* Meta */}
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime} min read</span>
        </div>

        {/* Title */}
        <h1
          className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          style={{ letterSpacing: "-0.025em" }}
        >
          {post.title}
        </h1>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="mt-8 h-px bg-border" />

        {/* MDX Content */}
        <div className="prose mt-8">
          <MDXRemote source={post.content} />
        </div>

        {/* Post footer divider */}
        <div className="mt-12 h-px bg-border" />

        {/* Prev/Next navigation */}
        <nav
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between"
          aria-label="Post navigation"
        >
          {prevPost ? (
            <a
              href={`/blog/${prevPost.slug}`}
              className="group flex flex-1 flex-col items-start rounded-lg border border-border p-4 transition-colors hover:bg-secondary"
            >
              <span className="text-xs font-medium text-muted-foreground">
                &larr; Previous
              </span>
              <span className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {prevPost.title}
              </span>
            </a>
          ) : (
            <div className="flex-1" />
          )}

          {nextPost ? (
            <a
              href={`/blog/${nextPost.slug}`}
              className="group flex flex-1 flex-col items-end rounded-lg border border-border p-4 text-right transition-colors hover:bg-secondary"
            >
              <span className="text-xs font-medium text-muted-foreground">
                Next &rarr;
              </span>
              <span className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {nextPost.title}
              </span>
            </a>
          ) : (
            <div className="flex-1" />
          )}
        </nav>
      </article>
    </>
  );
}
