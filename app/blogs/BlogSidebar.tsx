
import Link from "next/link";
import type { PublicBlog } from "./blogUtils";
import { formatBlogDate } from "./blogUtils";

type BlogSidebarProps = {
  latestPosts: PublicBlog[];
  categories: string[];
  search?: string;
  activeCategory?: string;
};

export default function BlogSidebar({
  latestPosts,
  categories,
  search = "",
  activeCategory = "",
}: BlogSidebarProps) {
  return (
    <aside className="blogs-sidebar">
      <section className="blogs-sidebar-widget">
        <h2 className="blogs-sidebar-title">Search Blogs</h2>

        <form action="/blogs" method="GET" className="blogs-search-form">
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Search articles..."
            aria-label="Search blog articles"
          />

          <button type="submit" aria-label="Search">
            <span aria-hidden="true">⌕</span>
          </button>
        </form>
      </section>

      <section className="blogs-sidebar-widget">
        <h2 className="blogs-sidebar-title">Latest Posts</h2>

        {latestPosts.length > 0 ? (
          <div className="blogs-latest-list">
            {latestPosts.map((blog) => (
              <article className="blogs-latest-item" key={blog._id}>
                {blog.imageUrl && (
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="blogs-latest-image"
                    aria-label={`Read ${blog.title}`}
                  >
                    <img src={blog.imageUrl} alt="" loading="lazy" />
                  </Link>
                )}

                <div className="blogs-latest-content">
                  <p>{formatBlogDate(blog.publishDate || blog.createdAt)}</p>

                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="blogs-sidebar-empty">No published posts yet.</p>
        )}
      </section>

      <section className="blogs-sidebar-widget">
        <h2 className="blogs-sidebar-title">Categories</h2>

        <ul className="blogs-category-list">
          <li>
            <Link
              href="/blogs"
              className={!activeCategory ? "active" : ""}
            >
              All Categories
            </Link>
          </li>

          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blogs?category=${encodeURIComponent(category)}`}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
