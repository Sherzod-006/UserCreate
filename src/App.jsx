import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <h1 className="text-5xl text-center mt-10 font-bold text-gray-300">No Users Found</h1>
      <Footer />
    </main>
  )
}

export default App
