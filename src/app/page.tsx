import Flowers from '@/components/Flowers'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-[#d99c92]">
      <Flowers />

      <div className="container mx-auto my-10 flex justify-center">
        <Header />
      </div>
    </div>
  )
}
