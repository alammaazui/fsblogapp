import React from 'react'
import { Outlet } from 'react-router'
import useCurrentUser from '../hooks/useCurrentUser'

export default function Auth({ allowedRoles }) {
  const { currentUser } = useCurrentUser();
  return (
    <>
      {currentUser.status && currentUser.role == allowedRoles ? (
        <Outlet />
      ) : (
        <h1>Unauthorized</h1>
      )}
    </>
  );
}
