const HeroSection = () => {
  return (
    <div className="p-10 text-center">
      <article className='text-wrap p-20'>
        <h1 className="font-bold capitalize text-5xl">Code Performance Analysis</h1>
        <p className="font-medium text-lg mt-10 text-gray-500">Analyze your code’s efficiency with detailed runtime and memory usage metrics. Instantly see how your input performs, helping you optimize and write faster, leaner programs.</p>
      </article>
      <div className='flex gap-5 justify-center items-center'>
        <button className="btn btn-primary bg-yellow-500 text-black btn-lg">Buy me a coffee</button>
        <button className="btn btn-outline btn-lg">Github</button>
      </div>
    </div>
  )
}
export default HeroSection
