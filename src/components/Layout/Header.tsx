import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between p-5">
      <div>
      <Link href="/">
        <a>🤖 yun8blog</a>
      </Link>
      </div>
      <div>
        <Link href="/me">
          <a>me</a>
        </Link>
      </div>
    </header>
  )
}

export default Header