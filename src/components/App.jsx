import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout, HomePage, RedColorPage, YellowColorPage, GreenColorPage, ErrorPage } from '../pages';
import { TrafficLightsProvider } from '../store/TrafficLightsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'red', element: <RedColorPage /> },
      { path: 'yellow', element: <YellowColorPage /> },
      { path: 'green', element: <GreenColorPage /> },
    ]
  }
])

function App() {
  return (
    <TrafficLightsProvider>
      <RouterProvider router={router} />
    </TrafficLightsProvider>
  );
}

export default App;
