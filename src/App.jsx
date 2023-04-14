import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './components/Home/Home'
import Statistic from './components/Statistic/Statistic'
import About from './components/About/About'
import ReactQuiz from './components/ReactQuiz/ReactQuiz'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: 'statistic',
          element: <Statistic></Statistic>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '/:id',
          element: <ReactQuiz></ReactQuiz>,
          loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
