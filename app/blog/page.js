import StickyNavbar from '../components/StickyNavbar';
import Footer from '../components/Footer';
import BlogHero from './component/blog-hero';
import ArticlesSection from './component/articles-section';
import TrendingBlogSection from './component/trending-blog-section';

export default function BlogPage() {
  return (
    <div>
      <StickyNavbar />
      <BlogHero />
      <ArticlesSection />
      <TrendingBlogSection />
      <Footer />
    </div>
  );
}

