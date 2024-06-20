const ResultsSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Event Results</h2>
        <p className="text-gray-700 mb-4">Check out the results from past events and see who came out on top.</p>
        <div className="flex justify-center">
          <img src="/images/results.webp" alt="Event Results" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default ResultsSection
