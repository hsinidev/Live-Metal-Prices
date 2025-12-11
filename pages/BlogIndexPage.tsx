
import React from 'react';
import StaticPage from '../components/StaticPage';
import { ALL_POSTS } from '../blog/posts';

const BlogIndexPage: React.FC = () => {
    const formatDate = (dateString: string) => {
        const parts = dateString.split('-').map(s => parseInt(s, 10));
        const date = new Date(parts[0], parts[1] - 1, parts[2]);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <StaticPage title="Precious Metals Blog">
            <p className="mb-8">
                Explore our collection of articles on gold, silver, and platinum. Whether you're an investor, collector, or just curious, our posts provide valuable insights into the world of precious metals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ALL_POSTS.map(post => (
                    <a 
                        key={post.slug} 
                        href={`/blog/${post.slug}`} 
                        className="block bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 hover:bg-gray-800 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-yellow-400">{post.title}</h2>
                        <p className="text-sm text-gray-500 mt-2">{formatDate(post.date)}</p>
                        <p className="text-gray-400 mt-2">Click to read the full analysis &raquo;</p>
                    </a>
                ))}
            </div>
        </StaticPage>
    );
};

export default BlogIndexPage;
