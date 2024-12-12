import { Route, Routes, useLocation } from "react-router"
import { HistoryPage, MainPage } from "./pages"
import { AnimatePresence } from "motion/react"

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />}/>
        <Route path="/history" element={<HistoryPage />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default App
