import Image from 'next/image'

export default function Flowers() {
  return (
    <div className="absolute z-0 h-screen w-screen overflow-hidden">
      <Image
        src="/img-4.png"
        alt="flower"
        width="900"
        height="200"
        className="absolute left-0 top-0"
        quality="50"
      />

      {/* Top right */}
      <Image
        className="absolute right-0 top-0"
        src="/img-2.png"
        objectFit="cover"
        width="800"
        height="320"
        alt="flower"
        quality="50"
      />

      {/* Center right */}
      <Image
        className="absolute bottom-1/2 right-0 translate-y-1/2 transform"
        src="/img-3.png"
        objectFit="cover"
        width="200"
        height="350"
        alt="flower"
        quality="50"
      />

      {/* Bottom right */}
      <Image
        className="absolute bottom-0 right-10"
        width="500"
        height="200"
        src="/img-7.png"
        alt="flower"
        quality="50"
      />

      {/* Bottom Center */}
      <Image
        className="absolute bottom-0 right-1/2 translate-x-1/2 transform"
        src="/img-6.png"
        alt="flower"
        quality="50"
        width="700"
        height="200"
      />

      {/* Bottom Left */}
      <Image
        className="absolute bottom-0 left-10"
        src="/img-5.png"
        alt="flower"
        quality="50"
        width="600"
        height="200"
      />
    </div>
  )
}
