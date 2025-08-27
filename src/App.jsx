import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Footer />
    </main>
  )
}

export default App
