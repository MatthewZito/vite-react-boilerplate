import React from 'react'

import { Layout } from '@/components/Layout'

import type { RouteObject } from 'react-router-dom'

export default function Routes(): RouteObject[] {
  return [
    {
      element: <Layout />,
      path: '*',
    },
  ]
}
