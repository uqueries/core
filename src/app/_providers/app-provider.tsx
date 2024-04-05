"use client";

import React from "react";
import { ThemeProvider } from "@/features/themes/theme-ptovider";
import { ComposeChildren } from "@/shared/lib/react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
