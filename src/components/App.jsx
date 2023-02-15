import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TrafficLightsProvider } from '../store/TrafficLightsContext';
import { RootLayout, HomePage, RedColorPage, YellowColorPage, GreenColorPage, ErrorPage } from '../pages';
import { LIGHTS } from '../utils/const';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: LIGHTS.red, element: <RedColorPage /> },
      { path: LIGHTS.yellow, element: <YellowColorPage /> },
      { path: LIGHTS.green, element: <GreenColorPage /> },
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
