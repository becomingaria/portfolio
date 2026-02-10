import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Resume from "./pages/Resume"
import PageNotFound from "./pages/PageNotFound"
import { WipeTransitionProvider } from "./components/WipeTransition"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <WipeTransitionProvider>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </WipeTransitionProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
