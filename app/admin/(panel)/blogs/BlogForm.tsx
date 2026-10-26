
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import "./BlogForm.css";

type BlogData = {
  _id?: string;
  title?: string;
  slug?: string;
  category?: string;
  publishDate?: string | null;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  content?: string;
  tags?: string[];
  imageUrl?: string;
  imagePublicId?: string;
  status?: "draft" | "published";
};

type BlogFormProps = {
  initialBlog?: BlogData;
};

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogForm({ initialBlog }: BlogFormProps) {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(initialBlog?.title || "");
  const [slug, setSlug] = useState(initialBlog?.slug || "");
  const [category, setCategory] = useState(
  initialBlog?.category || "General"
);
const [slugEdited, setSlugEdited] = useState(false);
  const [metaTitle, setMetaTitle] = useState(initialBlog?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    initialBlog?.metaDescription || ""
  );
  const [keywords, setKeywords] = useState(
    initialBlog?.keywords?.join(", ") || ""
  );
  const [tags, setTags] = useState(initialBlog?.tags?.join(", ") || "");
  const [content, setContent] = useState(initialBlog?.content || "");
  const [status, setStatus] = useState<"draft" | "published">(
    initialBlog?.status || "draft"
  );
  const [publishDate, setPublishDate] = useState(
    initialBlog?.publishDate
      ? new Date(initialBlog.publishDate).toISOString().slice(0, 10)
      : ""
  );

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(
    initialBlog?.imageUrl || ""
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialBlog?.content || "";
    }
  }, [initialBlog?.content]);

  useEffect(() => {
    return () => {
      if (imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);



  const savedRangeRef = useRef<Range | null>(null);

  function saveSelection() {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    if (editorRef.current?.contains(range.commonAncestorContainer)) {
      savedRangeRef.current = range.cloneRange();
    }
  }

  function restoreSelection() {
    const editor = editorRef.current;
    const selection = window.getSelection();
    const range = savedRangeRef.current;

    if (!editor || !selection || !range) return;

    if (!editor.contains(range.commonAncestorContainer)) return;

    editor.focus();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function runCommand(command: string, value?: string) {
    restoreSelection();

    document.execCommand(command, false, value);

    setContent(editorRef.current?.innerHTML || "");
    saveSelection();
  }



function addLink() {
  restoreSelection();

  const selection = window.getSelection();

  if (!selection || selection.isCollapsed || !selection.toString().trim()) {
    window.alert("Please select the text you want to turn into a link.");
    return;
  }

  const url = window.prompt("Enter the link URL (https://...)");

  if (!url) return;

  if (!/^https?:\/\//i.test(url)) {
    window.alert("Please enter a link starting with https:// or http://");
    return;
  }

  document.execCommand("createLink", false, url);

  // Make the link visible and update the editor content.
  if (editorRef.current) {
    editorRef.current.querySelectorAll("a").forEach((anchor) => {
      anchor.style.color = "#2673c9";
      anchor.style.textDecoration = "underline";
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    });

    setContent(editorRef.current.innerHTML);
  }

  saveSelection();
}
function unlink() {
  restoreSelection();

  document.execCommand("unlink", false);

  if (editorRef.current) {
    setContent(editorRef.current.innerHTML);
  }

  saveSelection();
}

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("The image must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }

    setError("");

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function removeImage() {
    setImage(null);
    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!title.trim() || !slug.trim()) {
      setError("Please enter a title and slug.");
      return;
    }

    if (!imagePreview) {
      setError("Please upload a blog image.");
      return;
    }

    const finalContent = editorRef.current?.innerHTML || "";

    if (!finalContent.trim()) {
      setError("Please add some blog content.");
      return;
    }


const today = new Date().toISOString().slice(0, 10);

const payload = {
  title: title.trim(),
  slug: makeSlug(slug),
   category,
  publishDate: publishDate || today,

  metaTitle: metaTitle.trim(),
      metaDescription: metaDescription.trim(),
      keywords: keywords
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      content: finalContent,
      imageUrl: initialBlog?.imageUrl || "",
      imagePublicId: initialBlog?.imagePublicId || "",
      status,
    };

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("data", JSON.stringify(payload));

      if (image) {
        formData.append("image", image);
      }

      const url = initialBlog?._id
        ? `/api/admin/blogs/${initialBlog._id}`
        : "/api/admin/blogs";

      const response = await fetch(url, {
        method: initialBlog?._id ? "PUT" : "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to save blog.");
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="blog-form-page">
      <div className="blog-form-heading">
        <div>
          <p className="blog-form-eyebrow">CONTENT MANAGEMENT</p>
          <h1>{initialBlog ? "Edit Blog" : "Add New Blog"}</h1>
          <p>Create and manage your website blog content.</p>
        </div>
      </div>

      <form className="blog-form" onSubmit={handleSubmit}>
        <section className="blog-form-section">
          <h2>Blog Details</h2>

          <label htmlFor="blog-title">Blog Title *</label>
          <input
            id="blog-title"
            value={title}
    onChange={(event) => {
  const value = event.target.value;
  setTitle(value);

  if (!slugEdited) {
    setSlug(makeSlug(value));
  }
}}
            placeholder="Enter blog title"
            required
          />

          <label htmlFor="blog-slug">URL Slug *</label>
          <div className="blog-slug-field">
            <span>/blogs/</span>
            <input
              id="blog-slug"
              value={slug}
              onChange={(event) => {
                setSlug(makeSlug(event.target.value));
                setSlugEdited(true);
              }}
              placeholder="blog-url"
              required
            />
          </div>

          <p className="blog-form-help">
            Generated automatically from the title. You can edit it.
          </p>
          <div className="blog-form-group">
  <label htmlFor="category">Category *</label>
  <select
    id="category"
    value={category}
    onChange={(event) => setCategory(event.target.value)}
    required
  >
    <option value="General">General</option>
    <option value="Snow Removal & Winter Maintenance">
      Snow Removal & Winter Maintenance
    </option>
    <option value="Facility Management">Facility Management</option>
    <option value="Building Maintenance">Building Maintenance</option>
    <option value="Cleaning Services">Cleaning Services</option>
    <option value="Landscaping & Grounds Maintenance">
      Landscaping & Grounds Maintenance
    </option>
    <option value="Property Maintenance">Property Maintenance</option>
  </select>
</div>

          <label htmlFor="blog-tags">Tags</label>
          <input
            id="blog-tags"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="Facilities, Maintenance, Business"
          />
          <p className="blog-form-help">Separate tags with commas.</p>

          <label htmlFor="blog-status">Status</label>
          <select
            id="blog-status"
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as "draft" | "published")
            }
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <label htmlFor="blog-date">Publish Date</label>
          <input
            id="blog-date"
            type="date"
            value={publishDate}
            onChange={(event) => setPublishDate(event.target.value)}
          />
          <p className="blog-form-help">
            If you publish without choosing a date, today's date will be used.
          </p>
        </section>

        <section className="blog-form-section">
          <h2>Featured Image</h2>

          <label htmlFor="blog-image">Blog Image *</label>
          <input
            ref={fileInputRef}
            id="blog-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required={!imagePreview}
          />

          <p className="blog-form-help">
            Maximum file size: 5 MB. The image will be uploaded to Cloudinary
            when you save the blog.
          </p>

          {imagePreview && (
            <div className="blog-image-preview">
              <img src={imagePreview} alt="Blog image preview" />

              <button type="button" onClick={removeImage}>
                Remove image
              </button>
            </div>
          )}
        </section>

        <section className="blog-form-section">
          <h2>Blog Content</h2>

          <div className="blog-editor-toolbar">
            <button
              type="button"
          onMouseDown={saveSelection}
              onClick={() => runCommand("bold")}
              title="Bold"
            >
              <strong>B</strong>
            </button>

            <button
              type="button"
         onMouseDown={saveSelection}
              onClick={() => runCommand("italic")}
              title="Italic"
            >
              <em>I</em>
            </button>

            <button
              type="button"
             onMouseDown={saveSelection}
              onClick={() => runCommand("underline")}
              title="Underline"
            >
              <u>U</u>
            </button>

            <span className="blog-editor-divider" />

 
<select
  aria-label="Text heading"
  defaultValue="p"
  onChange={(event) => {
    const value = event.target.value;

    if (value) {
      runCommand("formatBlock", value);
    }

    event.target.value = "p";
  }}
>
  <option value="p">Paragraph</option>
  <option value="h1">Heading 1</option>
  <option value="h2">Heading 2</option>
  <option value="h3">Heading 3</option>
  <option value="h4">Heading 4</option>
  <option value="h5">Heading 5</option>
  <option value="h6">Heading 6</option>
</select>


            <span className="blog-editor-divider" />

            <button
              type="button"
          onMouseDown={saveSelection}
              onClick={() => runCommand("insertUnorderedList")}
              title="Bulleted list"
            >
              • List
            </button>

            <button
              type="button"
          onMouseDown={saveSelection}
              onClick={() => runCommand("insertOrderedList")}
              title="Numbered list"
            >
              1. List
            </button>

     <button
  type="button"
  onMouseDown={saveSelection}
  onClick={addLink}
  title="Insert link"
>
  Link
</button>

<button
  type="button"
  onMouseDown={saveSelection}
  onClick={unlink}
  title="Remove hyperlink"
>
  Unlink
</button>
          </div>

          <div
            ref={editorRef}
            className="blog-editor"
            contentEditable
            suppressContentEditableWarning
            role="textbox"
            aria-label="Blog content editor"
            aria-multiline="true"
      onInput={(event) => {
  setContent(event.currentTarget.innerHTML);
  saveSelection();
}}
            data-placeholder="Write your blog content here..."
          />

          <p className="blog-form-help">
            Select text before clicking a formatting button to apply formatting.
          </p>
        </section>

        <section className="blog-form-section">
          <h2>Search Engine Optimization</h2>

          <label htmlFor="blog-meta-title">Meta Title</label>
          <input
            id="blog-meta-title"
            value={metaTitle}
            onChange={(event) => setMetaTitle(event.target.value)}
            placeholder="SEO title"
          />

          <label htmlFor="blog-meta-description">Meta Description</label>
          <textarea
            id="blog-meta-description"
            value={metaDescription}
            onChange={(event) => setMetaDescription(event.target.value)}
            placeholder="Short description for search engines"
            rows={4}
          />

          <label htmlFor="blog-keywords">Keywords</label>
          <input
            id="blog-keywords"
            value={keywords}
            onChange={(event) => setKeywords(event.target.value)}
            placeholder="facilities management, maintenance"
          />
          <p className="blog-form-help">Separate keywords with commas.</p>
        </section>

        {error && <p className="blog-form-error">{error}</p>}

        <div className="blog-form-actions">
          <button
            type="button"
            className="blog-form-cancel"
            onClick={() => router.push("/admin/blogs")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="blog-form-submit"
            disabled={saving}
          >
            {saving ? "Saving..." : initialBlog ? "Update Blog" : "Save Blog"}
          </button>
        </div>
      </form>
    </main>
  );
}
