import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
