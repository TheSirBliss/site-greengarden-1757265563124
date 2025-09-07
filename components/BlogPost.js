import Link from 'next/link';

const BlogPost = ({ title, date, summary, slug }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold text-primary mb-2">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p className="text-gray-600 text-sm">{date}</p>
      <p className="text-gray-700">{summary}</p>
      <Link href={`/blog/${slug}`} className="text-accent hover:underline">Leggi di più</Link>
    </div>
  );
};

export default BlogPost;