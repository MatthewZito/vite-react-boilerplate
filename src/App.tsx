import { useRoutes } from 'react-router-dom'

import '@/styles/index.css'

import Routes from '@/router'

export default function App() {
  return useRoutes(Routes())
}
