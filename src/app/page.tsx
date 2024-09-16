import Flowers from '@/components/Flowers'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#d99c92]">
      <Flowers />

      <div className="container z-[11] mx-auto my-10 flex justify-center">
        <Header />
      </div>

      <div className="container z-10 mx-auto flex pt-44">
        <Hero />
      </div>
    </div>
  )
}
