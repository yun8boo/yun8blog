import Link from "next/link"

const Header = () => {
  return (
    <header className="flex m-auto" >
      <div>
      <Link href="/">
        <a className='text-red-500'>🤖 yun8blog</a>
      </Link>
      </div>
      <div>
        <Link href="/me">
          <a>🤖 yun8boo</a>
        </Link>
      </div>
    </header>
  )
}

export default Header