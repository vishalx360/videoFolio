import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div>
        <ul className='flex gap-10'>
          <li className='list-disc'>typescript</li>
          <li className='list-disc'>tailwind css</li>
          <li className='list-disc'>shadcn/ui</li>
        </ul>
      </div>
    </main>
  )
}
