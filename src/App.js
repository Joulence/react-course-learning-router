import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';


createBrowserRouter([
  { path: '/', element: <HomePage /> },
]);

function App() {
  return <div></div>;
}

export default App;