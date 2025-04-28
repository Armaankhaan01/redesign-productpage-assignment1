import { Routes } from '@/@types/routes'
import { lazy } from 'react'

const sharedRoutes: Routes = [
    {
        component: lazy(() => import('@/views/Home')),
        path: `/`,
        authority: [],
    },
    // add more shared routes here
]

export default sharedRoutes
