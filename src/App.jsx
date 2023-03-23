import './App.css'
import router from './app/index.jsx'
import { RouterProvider, Routes, Route, Link } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ReactDOM from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main/main.jsx'
import Account from './components/footer/account'

import Modal from './components/Modal'
import Authorization from './components/auth/Authorization'
import Password_recovery from './components/auth/Password-recovery'
import Registration from './components/auth/Registration'
import Search from './components/header/Search'
import Catalogue from './components/header/Catalogue'
import Card from './components/card/Card'
import Cart from './components/cart/Cart'
function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
