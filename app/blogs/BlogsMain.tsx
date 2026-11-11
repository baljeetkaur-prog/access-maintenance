
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { formatBlogDate } from "./blogUtils";
import type { PublicBlog } from "./blogUtils";
import "./blogs.css";


type BlogsMainProps = {
  blogs: PublicBlog[];
  latestPosts: PublicBlog[];
  categories: string[];
  search: string;
  category: string;
};

export default function BlogsMain({
  blogs,
  latestPosts,
  categories,
  search,
  category,
}: BlogsMainProps) {
  return (
    <main className="blogs-page">
      <section className="blogs-hero">
        <div className="blogs-container">
          <div className="blogs-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Blogs</span>
          </div>

          <div className="blogs-hero-content">
            <div className="blogs-eyebrow">
              <span className="blogs-eyebrow-line" />
              <span>Insights &amp; Updates</span>
            </div>

            <h1>Ideas for better maintained spaces.</h1>

            <p>
              Practical guidance, seasonal updates and insights into
              facilities maintenance, property care and site operations.
            </p>
          </div>
        </div>
      </section>

      <section className="blogs-content-section">
        <div className="blogs-container blogs-layout">
          <div className="blogs-main-column">
            <div className="blogs-results-heading">
              <div>
                <p className="blogs-section-eyebrow">
                  FROM ACCESS MAINTENANCE
                </p>

                <h2>
                  {category ||
                    (search ? "Search Results" : "Latest Articles")}
                </h2>
              </div>

              <span className="blogs-results-count">
                {blogs.length} {blogs.length === 1 ? "Article" : "Articles"}
              </span>
            </div>

            {(search || category) && (
              <div className="blogs-active-filters">
                {search && <span>Search: {search}</span>}

                {category && <span>Category: {category}</span>}

                <Link href="/blogs">Clear filters</Link>
              </div>
            )}

            {blogs.length > 0 ? (
              <div className="blogs-grid">
                {blogs.map((blog) => (
                  <article className="blogs-card" key={blog._id}>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="blogs-card-image"
                    >
                      {blog.imageUrl ? (
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="blogs-image-placeholder">
                          Access Maintenance
                        </div>
                      )}
                    </Link>

                    <div className="blogs-card-body">
                      <div className="blogs-card-meta">
                        <Link
                          href={`/blogs?category=${encodeURIComponent(
                            blog.category
                          )}`}
                          className="blogs-card-category"
                        >
                          {blog.category}
                        </Link>

                        <span>
                          {formatBlogDate(
                            blog.publishDate || blog.createdAt
                          )}
                        </span>
                      </div>

                      <h3>
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="blogs-card-description">
                        {blog.metaDescription ||
                          "Read the latest insights from Access Maintenance."}
                      </p>

                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="blogs-read-link"
                      >
                        Read article <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="blogs-empty-state">
                <h3>No articles found</h3>

                <p>
                  Try another search or select a different category to
                  explore our published articles.
                </p>

                <Link href="/blogs" className="blogs-empty-link">
                  View all blogs
                </Link>
              </div>
            )}
          </div>

          <BlogSidebar
            latestPosts={latestPosts}
            categories={categories}
            search={search}
            activeCategory={category}
          />
        </div>
      </section>
    </main>
  );
}
