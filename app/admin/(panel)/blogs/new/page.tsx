
"use client";

import { useEffect, useState } from "react";
import BlogForm from "../BlogForm";

export default function NewBlogPage() {
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    setFormKey((previousKey) => previousKey + 1);
  }, []);

  return <BlogForm key={formKey} />;
}
