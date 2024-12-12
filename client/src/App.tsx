import { Route, Routes } from "react-router"
import { HistoryPage, MainPage } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  )
}

export default App
