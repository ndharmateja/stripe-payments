import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import CheckoutFailed from './pages/CheckoutFailed'
import CheckoutSuccess from './pages/CheckoutSuccess'
import Customers from './pages/Customers'
import Home from './pages/Home'
import Payments from './pages/Payments'
import Subscriptions from './pages/Subscriptions'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className='navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/checkout'>
                <span aria-label='emoji' role='img'>
                  🛒
                </span>{' '}
                Checkout
              </Link>
            </li>
            <li>
              <Link to='/payments'>
                <span aria-label='emoji' role='img'>
                  💸
                </span>{' '}
                Payments
              </Link>
            </li>
            <li>
              <Link to='/customers'>
                <span aria-label='emoji' role='img'>
                  🧑🏿‍🤝‍🧑🏻
                </span>{' '}
                Customers
              </Link>
            </li>
            <li>
              <Link to='/subscriptions'>
                <span aria-label='emoji' role='img'>
                  🔄
                </span>{' '}
                Subscriptions
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/payments' element={<Payments />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/subscriptions' element={<Subscriptions />} />
            <Route path='/success' element={<CheckoutSuccess />} />
            <Route path='/failed' element={<CheckoutFailed />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
