"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

export default function Home() {
  return (
    <div>
      This is home component you are looking for
      <Button onClick={() => {signOut()}}>Logout</Button>
    </div>
  )
}