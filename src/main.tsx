import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      index: true,
      path: '/user',
      element: <>Hello from Outlat</>
    },
    {
      path: '/user/:id',
      element: <>Hello user 1</>
    }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
