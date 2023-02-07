import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout, HomePage, RedColorPage, YellowColorPage, GreenColorPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/red', element: <RedColorPage /> },
      { path: '/yellow', element: <YellowColorPage /> },
      { path: '/green', element: <GreenColorPage /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
