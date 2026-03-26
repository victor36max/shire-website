import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog | Shire — Open Source AI Agent Platform",
  description:
    "Technical deep-dives, tutorials, and updates from the Shire team. Learn about persistent AI agent workspaces, multi-agent collaboration, and building with Shire.",
  alternates: {
    canonical: "https://www.agents-shire.sh/blog",
  },
  openGraph: {
    type: "website",
    title: "Shire Blog — AI Agent Platform Insights",
    description:
      "Technical deep-dives, tutorials, and updates from the Shire team.",
    url: "https://www.agents-shire.sh/blog",
    siteName: "Shire",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

function BlogIndexJsonLd({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Blog", "CollectionPage"],
    name: "Shire Blog",
    description:
      "Technical deep-dives, tutorials, and updates from the Shire team.",
    url: "https://www.agents-shire.sh/blog",
    publisher: {
      "@type": "Organization",
      name: "Shire",
      url: "https://www.agents-shire.sh",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.agents-shire.sh/blog/${post.slug}`,
      datePublished: `${post.date}T00:00:00Z`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogIndexJsonLd posts={posts} />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Updates, technical deep-dives, and thoughts on building with AI
            agents.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No posts yet — check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.slug}>
                  <a href={`/blog/${post.slug}`} className="group block">
                    <Card className="p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm lg:p-8">
                      {/* Meta line */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readTime} min read</span>
                      </div>

                      {/* Title */}
                      <h2 className="mt-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary lg:text-2xl">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>

                      {/* Tags */}
                      {post.tags?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </Card>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
