"use client"
import React from 'react'
import { Button } from '../ui/button'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <Button onClick={async() => await signIn("google", { callbackUrl: "/" })} className="w-full">
        <FaGoogle className="text-lg" />
        Login with Google
    </Button>
  )
}