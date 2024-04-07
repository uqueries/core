"use client";

import React from "react";
import { ThemeProvider } from "@/features/themes/theme-ptovider";
import { ComposeChildren } from "@/shared/lib/react";
import { AppSessionProvider } from "@/entities/user/session";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
