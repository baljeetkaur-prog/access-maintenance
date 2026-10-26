import Link from "next/link";
import BlogSidebar from "../BlogSidebar";
import { formatBlogDate, type PublicBlog } from "../blogUtils";
import "../blogs.css";

type BlogDetailProps = {
  blog: PublicBlog;
  latestPosts: PublicBlog[];
  categories: string[];
};

export default function BlogDetail({
  blog,
  latestPosts,
  categories,
}: BlogDetailProps) {
  return (
    <main className="blogs-page">
      <section className="blogs-detail-hero">
        <div className="blogs-container">
          <div className="blogs-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blogs">Blogs</Link>
            <span>/</span>
            <span>{blog.title}</span>
          </div>

          <div className="blogs-detail-heading">
            <Link
              href={`/blogs?category=${encodeURIComponent(blog.category)}`}
              className="blogs-detail-category"
            >
              {blog.category}
            </Link>

            <h1>{blog.title}</h1>

            <p className="blogs-detail-date">
              Published{" "}
              {formatBlogDate(blog.publishDate || blog.createdAt || null)}
            </p>
          </div>
        </div>
      </section>

      <section className="blogs-content-section blogs-detail-section">
        <div className="blogs-container blogs-layout">
          <article className="blogs-article">
            {blog.imageUrl && (
              <div className="blogs-detail-image">
                <img src={blog.imageUrl} alt={blog.title} />
              </div>
            )}

            <div
              className="blogs-article-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {blog.tags.length > 0 && (
              <div className="blogs-article-tags">
                <span>Tags:</span>

                {blog.tags.map((tag) => (
                  <span className="blogs-article-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="blogs-article-footer">
              <Link href="/blogs" className="blogs-back-link">
                <span aria-hidden="true">←</span> Back to all blogs
              </Link>
            </div>
          </article>

          <BlogSidebar
            latestPosts={latestPosts}
            categories={categories}
          />
        </div>
      </section>
    </main>
  );
}