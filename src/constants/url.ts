const BASE_URL =
  process.env.NEXT_PUBLIC_DEVELOPMENT || process.env.NEXT_PUBLIC_PRODUCTION;
const BLOGS_URL = `${BASE_URL}/api/blogs`;
const EXPERTS_URL = `${BASE_URL}/api/experts`;

export { BLOGS_URL, EXPERTS_URL };
