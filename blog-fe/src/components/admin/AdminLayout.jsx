import React from 'react'
import { Outlet } from 'react-router'
import Aside from './Aside'
import Nav from './Nav'

export default function AdminLayout() {
  return (
    <section className='conatiner-fluid'>
        <div className="row g-0">
            <div className="col-md-3">
                <Aside/>
            </div>
            <div className="col-md-9">
                <Nav/>
                <hr />
                <div className='p-3'>
                    <Outlet/>
                </div>
                <hr />
                <h1>For Footer</h1>
            </div>
        </div>
    </section>
  )
}
