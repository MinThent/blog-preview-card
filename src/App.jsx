import BlogPreviewCard from "./components/BlogPreviewCard";

function App() {
  return (
    <div className="flex justify-center items-center bg-[#f4d04e] min-h-screen">
      <BlogPreviewCard
        imgUrl="illustration-article.svg"
        altText="illustration article"
        topic="Learning"
        publishedDate="Published 21 Dec 2023"
        heading="HTML & CSS foundations"
        headingContent="These languages are the backbone of every website, defining structure, content, and presentation."
        avatar="image-avatar.webp"
        avatarName="Greg Hooper"
      />
    </div>
  );
}

export default App;
