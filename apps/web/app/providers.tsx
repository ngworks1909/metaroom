"use client";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import React from "react";

export function Providers({children}: {children: React.ReactNode}): React.JSX.Element {
  return (
    <RecoilRoot>
      <SessionProvider>
          {children}
      </SessionProvider>
    </RecoilRoot>
  );
}