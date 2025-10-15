import { Button } from '@/components/ui/button'


const HeroSection = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="font-bold capitalize text-5xl">Code Performance Analysis</h1>
      <p className="font-medium text-lg mt-5 text-gray-500">Analyze your code’s efficiency with detailed runtime and memory usage metrics. Instantly see how your input performs, helping you optimize and write faster, leaner programs.</p>
      <div className='flex gap-5 mt-5 justify-center items-center'>
        <Button size="lg">Buy me a coffee</Button>
        <Button size="lg" variant="outline">Github</Button>
      </div>
    </div>
  )
}
export default HeroSection
