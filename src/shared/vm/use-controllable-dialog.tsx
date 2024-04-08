import React from "react";
import { Dialog } from "@/shared/ui/dialog";

export function useControllableDialog() {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen((old) => !old),
    Dialog: ({ children }: { children: React.ReactNode }) => (
      <Dialog open={isOpen} onOpenChange={setOpen}>
        {children}
      </Dialog>
    ),
  };
}
