import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
