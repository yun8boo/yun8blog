import Header from "./Header"

const Layout = ({children}: any) => {
  return (
    <div>
      <Header />
      <main className='mx-auto p-5 max-w-screen-lg'>
        {children}
      </main>
    </div>
  )
}

export default Layout