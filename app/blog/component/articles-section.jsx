"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const articles = [
    {
      id: 1,
      date: "21",
      month: "Jul 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-1.jpg",
    },
    {
      id: 2,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-2.jpg",
    },
    {
      id: 3,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-3.jpg",
    },
    {
      id: 4,
      date: "21",
      month: "Jul 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-4.jpg",
    },
    {
      id: 5,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-5.jpg",
    },
    {
      id: 6,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-6.jpg",
    },
    {
      id: 7,
      date: "21",
      month: "Jul 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-7.jpg",
    },
    {
      id: 8,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-8.jpg",
    },
    {
      id: 9,
      date: "25",
      month: "Aug 2023",
      title: "Lorem ipsum dolor sit amet,",
      image: "/path/to/bedroom-image-9.jpg",
    },
  ]

  const discountFilters = [
    { name: "Sharply Priced", count: 13, checked: false },
    { name: "Cash Discount", count: 17, checked: false },
    { name: "Viewed Deals", count: 8, checked: false },
  ]

  const careFilters = [
    { name: "Accommodation", count: 13, checked: false },
    { name: "Bed and Breakfast", count: 12, checked: false },
    { name: "Half Board", count: 8, checked: false },
    { name: "Full Board", count: 8, checked: false },
    { name: "All Inclusive", count: 8, checked: false },
  ]

  return (
    <>
      <div className="container">
        <div className="layout">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-content">
              {/* Filter Button */}
              <button className="filter-button">
                <span>Filter</span>
                <Filter size={18} />
              </button>

              {/* Discount Section */}
              <div className="filter-section">
                <div className="section-header">
                  <h3>Discount</h3>
                  <button className="expand-button">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="filter-options">
                  {discountFilters.map((filter, index) => (
                    <label key={index} className="filter-option">
                      <div className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox" defaultChecked={filter.checked} />
                        <span className="filter-name">{filter.name}</span>
                      </div>
                      <span className="filter-count">{filter.count.toString().padStart(2, "0")}</span>
                    </label>
                  ))}
                </div>
                <button className="show-more">Show More Categories</button>
              </div>

              {/* Care Section */}
              <div className="filter-section">
                <div className="section-header">
                  <h3>Care</h3>
                  <button className="expand-button">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="filter-options">
                  {careFilters.map((filter, index) => (
                    <label key={index} className="filter-option">
                      <div className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox" defaultChecked={filter.checked} />
                        <span className="filter-name">{filter.name}</span>
                      </div>
                      <span className="filter-count">{filter.count.toString().padStart(2, "0")}</span>
                    </label>
                  ))}
                </div>
                <button className="show-more">Show More Categories</button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            {/* Header */}
            <div className="content-header">
              <p className="explore-text">EXPLORE LATEST ARTICLES</p>
              <h1 className="page-title">Articles</h1>

              {/* Search Bar */}
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search anything here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button className="search-button">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="articles-grid">
              {articles.map((article) => (
                <div key={article.id} className="article-card">
                  <div className="article-image">
                    <img src={article.image || "/placeholder.svg"} alt={article.title} />
                  </div>
                  <div className="article-content">
                    <div className="article-info">
                      <div className="date-section">
                        <div className="date">{article.date}</div>
                        <div className="month">{article.month}</div>
                      </div>
                      <div className="article-text">
                        <h3 className="article-title">{article.title}</h3>
                        <button className="read-more">
                          READ MORE
                          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore More Button */}
            <div className="explore-more-container">
              <button className="explore-more-button">Explore More Articles</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: #f9fafb;
        }

        .layout {
          display: flex;
          flex-direction: column;
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
          gap: 1.5rem;
        }

        .sidebar {
          width: 100%;
          flex-shrink: 0;
        }

        .sidebar-content {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .filter-button {
          width: 100%;
          background-color: #1e293b;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .filter-button:hover {
          background-color: #334155;
        }

        .filter-section {
          margin-bottom: 2rem;
        }

        .filter-section:last-child {
          margin-bottom: 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .section-header h3 {
          font-weight: 500;
          color: #111827;
          margin: 0;
        }

        .expand-button {
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
        }

        .expand-button:hover {
          color: #4b5563;
        }

        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .filter-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
        }

        .checkbox {
          width: 1rem;
          height: 1rem;
          color: #1e293b;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          margin-right: 0.75rem;
        }

        .checkbox:focus {
          outline: 2px solid #64748b;
          outline-offset: 2px;
        }

        .filter-name {
          font-size: 0.875rem;
          color: #374151;
          transition: color 0.2s;
        }

        .filter-option:hover .filter-name {
          color: #111827;
        }

        .filter-count {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        .show-more {
          background: none;
          border: none;
          font-size: 0.875rem;
          color: #1e293b;
          font-weight: 500;
          margin-top: 1rem;
          cursor: pointer;
          transition: color 0.2s;
        }

        .show-more:hover {
          color: #475569;
        }

        .main-content {
          flex: 1;
        }

        .content-header {
          margin-bottom: 1.5rem;
        }

        .explore-text {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin: 0 0 0.5rem 0;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #111827;
          margin: 0 0 1.5rem 0;
        }

        .search-container {
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem;
          padding-right: 3rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          background: white;
          font-size: 1rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #1e293b;
          box-shadow: 0 0 0 2px rgba(30, 41, 59, 0.1);
        }

        .search-button {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background-color: #1e293b;
          color: white;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .search-button:hover {
          background-color: #334155;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .article-card {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.2s;
        }

        .article-card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .article-image {
          aspect-ratio: 4/3;
          background-color: #e5e7eb;
          position: relative;
          overflow: hidden;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .article-card:hover .article-image img {
          transform: scale(1.05);
        }

        .article-content {
          padding: 1.5rem;
        }

        .article-info {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .date-section {
          text-align: center;
          margin-right: 1rem;
        }

        .date {
          font-size: 1.5rem;
          font-weight: bold;
          color: #111827;
        }

        .month {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .article-text {
          flex: 1;
        }

        .article-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 1rem 0;
          line-height: 1.4;
        }

        .read-more {
          background: none;
          border: none;
          color: #1e293b;
          font-weight: 500;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: color 0.2s;
        }

        .read-more:hover {
          color: #475569;
        }

        .arrow-icon {
          margin-left: 0.5rem;
          width: 1rem;
          height: 1rem;
          transition: transform 0.2s;
        }

        .read-more:hover .arrow-icon {
          transform: translateX(0.25rem);
        }

        .explore-more-container {
          text-align: center;
        }

        .explore-more-button {
          background-color: #1e293b;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .explore-more-button:hover {
          background-color: #334155;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .layout {
            flex-direction: row;
          }

          .sidebar {
            width: 16rem;
          }

          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  )
}
