import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app/App.tsx'
import Results from './pages/Results/Results.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const router = createBrowserRouter([
    {path: "/olymp/", element: <App/>},
    {path: "/olymp/results9328328427342384293942/", element: <Results/>}
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
