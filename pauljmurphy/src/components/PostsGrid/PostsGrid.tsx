import './PostsGrid.css';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const PostsGrid = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: 'Building Modern Web Applications',
      excerpt: 'Explore the latest techniques and best practices for creating scalable, performant web applications.',
      date: '2026-02-25',
      category: 'Development',
      image: 'https://via.placeholder.com/400x250/646cff/ffffff?text=Web+Apps'
    },
    {
      id: 2,
      title: 'The Future of Frontend Development',
      excerpt: 'Discover emerging trends and technologies shaping the future of frontend development.',
      date: '2026-02-20',
      category: 'Technology',
      image: 'https://via.placeholder.com/400x250/535bf2/ffffff?text=Frontend'
    },
    {
      id: 3,
      title: 'Cloud Architecture Best Practices',
      excerpt: 'Learn how to design and deploy robust, scalable cloud architectures on Azure.',
      date: '2026-02-15',
      category: 'Cloud',
      image: 'https://via.placeholder.com/400x250/646cff/ffffff?text=Cloud'
    }
  ];

  return (
    <section className="posts">
      <div className="posts-container">
        <div className="posts-header">
          <h2 className="posts-title">Latest Insights</h2>
          <p className="posts-subtitle">
            Stay updated with our latest articles and insights
          </p>
        </div>
        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <span className="post-category">{post.category}</span>
              </div>
              <div className="post-content">
                <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="post-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsGrid;
