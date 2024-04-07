import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/shared/ui/utils";
import React from "react";
import "./globals.css";
import { AppProvider } from "@/app/_providers/app-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "uqueries | Разделяй и властвуй — наш девиз!",
  description:
    "Сервис предназначен для оптимизации рутинных задач и их упрощенной аналитики",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
