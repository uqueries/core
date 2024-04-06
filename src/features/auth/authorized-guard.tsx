"use client";

import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { signIn } from "next-auth/react";
import React from "react";
import { useAppSession } from "@/entities/user/session.client";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useAppSession();

  const isUnauthenticated = session.status === "unauthenticated";

  React.useEffect(() => {
    if (isUnauthenticated) {
      signIn().then();
    }
  }, [isUnauthenticated]);

  const isLoading =
    session.status === "loading" || session.status === "unauthenticated";

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === "authenticated" && children}
    </>
  );
}
