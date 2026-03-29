export default function BookLayout({ children }) {
  return (
    <main className="flex justify-center min-h-screen mt-10">
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </main>
  )
}