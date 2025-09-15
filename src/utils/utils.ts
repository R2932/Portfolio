import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// In-memory cache to store post data
const postCache = new Map();

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    // Instead of calling notFound() directly, which is a render-time-only function,
    // we can return an empty array or handle it gracefully.
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };
  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath: string[] = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  const cacheKey = postsDir;

  // Check if the data is already in our cache
  if (postCache.has(cacheKey)) {
    return postCache.get(cacheKey);
  }

  // If not, read the data from the filesystem
  const data = getMDXData(postsDir);
  
  // Store the data in the cache for next time
  postCache.set(cacheKey, data);

  return data;
}