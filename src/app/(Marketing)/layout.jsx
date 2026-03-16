import NavBar from "components/layout/NavBar"
import Footer from "components/layout/Footer"

export default function MarketingLayout( { children } ) {
  return (
    <>
      <main className="max-w-6xl mx-auto scroll-smooth">
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  )
}