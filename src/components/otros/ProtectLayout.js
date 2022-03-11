import React from 'react'
import LayoutDashboard from '../layout/LayoutDashboard'
import {ProtectedRoute} from '../proptectedRouter/ProtectedRoute'

const ProtectLayout = ({children}) => {
  return (
    <ProtectedRoute>
        <LayoutDashboard>
              {children}               
        </LayoutDashboard>
    </ProtectedRoute>
  )
}

export default ProtectLayout