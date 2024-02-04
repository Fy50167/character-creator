import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Outlet />
        </>
    );
}

export default App;
