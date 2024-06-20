const articles = [
  {
    title: "Exciting New Routes Announced for the Upcoming Event",
    description:
      "We are thrilled to announce new and challenging routes for the upcoming One Lap of America event. Join us to experience these exciting new tracks.",
    imgSrc: "/images/news/news1.jpg",
    alt: "Exciting New Routes",
  },
  {
    title: "Meet the Champions: Interviews with Last Year’s Winners",
    description:
      "Get to know the champions of last year’s One Lap of America. Read our exclusive interviews and learn what it takes to win this challenging event.",
    imgSrc: "/images/news/news2.jpeg",
    alt: "Meet the Champions",
  },
  {
    title: "Safety First: Enhanced Safety Measures for Participants",
    description:
      "Safety is our top priority. Learn about the enhanced safety measures we are implementing to ensure a safe and enjoyable experience for all participants.",
    imgSrc: "/images/news/news3.jpeg",
    alt: "Enhanced Safety Measures",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-grayLight py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-primary text-center">
          Latest News
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Stay updated with the latest news and announcements from One Lap of
          America.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={article.imgSrc}
                alt={article.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {article.title}
                </h3>
                <p className="text-gray-700">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
