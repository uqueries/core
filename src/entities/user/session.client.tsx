"use client";

import {
  SessionProvider as NextAuthSessionProvider,
  useSession,
} from "next-auth/react";
import * as React from "react";

export const useAppSession = useSession;

export const useRole = () => {
  const session = useAppSession();
  return session.data?.user?.role;
};

export function AppSessionProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
