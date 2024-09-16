import Image from 'next/image'

export default function Hero() {
  return (
    <div className="mx-auto flex max-w-4xl justify-between">
      <Image
        className=""
        src="/rings.jpg"
        alt="rings"
        width="400"
        height="400"
      />

      <div className="flex flex-col justify-center gap-4 text-right">
        <h1 className="text-6xl font-medium">
          بسمة
          <br />
          <span className='font-bold'>للزواج الاسلامي</span>
        </h1>

        <h4 className="text-2xl text-gray-900">نبحث لك عن نصفك الآخر</h4>
      </div>
    </div>
  )
}
