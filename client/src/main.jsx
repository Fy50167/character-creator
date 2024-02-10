import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './animation.css';
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Creator from './pages/Creator';
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import Character from './pages/Character';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/creator',
                element: <Creator />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/character/:characterId',
                element: <Character />,
            },
            {
                path: '/categories/:currentClass',
                element: <Categories />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
