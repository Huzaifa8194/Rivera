"use client"

export default function TrendingBlogSection() {
  const trendingArticles = [
    {
      id: 1,
      date: "21",
      month: "Jul 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "path/to/bedroom-image-1.jpg",
    },
    {
      id: 2,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "path/to/bedroom-image-2.jpg",
    },
    {
      id: 3,
      date: "29",
      month: "Sep 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "path/to/bedroom-image-3.jpg",
    },
  ]

  return (
    <div className="trending-blog-section">
      {/* Social Share Header */}
      <div className="social-header">
        <span className="share-text">Like what you see? Share with a friend.</span>
        <div className="social-icons">
          <a href="#" className="social-icon facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="social-icon twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className="social-icon linkedin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-content">
        <div className="blog-header">
          <p className="blog-subtitle">OUR BLOG</p>
          <h2 className="blog-title">Trending Blogs & Articles</h2>
        </div>

        <div className="articles-grid">
          {trendingArticles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image || "/placeholder.svg"} alt={article.title} />
              </div>
              <div className="article-content">
                <div className="article-date">
                  <span className="date-number">{article.date}</span>
                  <span className="date-month">{article.month}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <a href="#" className="read-more">
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trending-blog-section {
          width: 100%;
          background-color: #f8f9fa;
        }

                                    .social-header {
            background-image: url('/blog/social_links_bg.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 12px;
            margin: 0 auto 60px auto;
            width: 80vw;
            position: relative;
            overflow: hidden;
          }

                 .share-text {
           color: white;
           font-size: 18px;
           font-weight: 500;
           position: relative;
           z-index: 2;
         }

         .social-icons {
           display: flex;
           gap: 16px;
           position: relative;
           z-index: 2;
         }

         .social-icon {
           color: white;
           width: 32px;
           height: 32px;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: opacity 0.2s ease;
           text-decoration: none;
         }

        .social-icon:hover {
          opacity: 0.8;
        }

        .blog-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 80px 20px;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .blog-subtitle {
          color: #6b7280;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 8px 0;
        }

        .blog-title {
          color: #1f2937;
          font-size: 36px;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .article-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .article-image {
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .article-card:hover .article-image img {
          transform: scale(1.05);
        }

        .article-content {
          padding: 24px;
        }

        .article-date {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 16px;
        }

        .date-number {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          line-height: 1;
        }

        .date-month {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .article-title {
          color: #1f2937;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 20px 0;
          line-height: 1.4;
        }

        .read-more {
          color: #1e3a5f;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }

        .read-more:hover {
          color: #2563eb;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          
          .social-header {
            padding: 16px 24px;
            margin: 0 16px 40px 16px;
          }
          
          .share-text {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .social-header {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            padding: 20px;
            margin: 0 12px 32px 12px;
          }
          
          .blog-title {
            font-size: 28px;
          }
          
          .blog-content {
            padding: 0 16px 60px 16px;
          }
          
          .article-image {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .social-header {
            margin: 0 8px 24px 8px;
            border-radius: 8px;
          }
          
          .blog-title {
            font-size: 24px;
          }
          
          .article-content {
            padding: 20px;
          }
          
          .social-icons {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  )
}
