"use client";

import React from "react";
import { ThemeProvider } from "@/features/themes/theme-ptovider";
import { ComposeChildren } from "@/shared/lib/react";
import { AppSessionProvider } from "@/entities/session/app-session-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      {children}
    </ComposeChildren>
  );
}
