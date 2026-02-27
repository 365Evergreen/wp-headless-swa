const BASE_URL = import.meta.env.VITE_WP_API_URL ?? 'https://example.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

async function apiFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export async function getPosts(page = 1, perPage = 10): Promise<WPPost[]> {
  return apiFetch<WPPost[]>('posts', {
    page: String(page),
    per_page: String(perPage),
    _embed: '1',
  });
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await apiFetch<WPPost[]>('posts', { slug, _embed: '1' });
  return posts[0] ?? null;
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await apiFetch<WPPage[]>('pages', { slug });
  return pages[0] ?? null;
}
