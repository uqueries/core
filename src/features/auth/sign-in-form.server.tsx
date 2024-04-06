"use server";

import { getProviders } from "next-auth/react";
import { cn } from "@/shared/ui/utils";
import { Divider } from "@/features/auth/_ui/divider";
import { EmailSignInForm } from "@/features/auth/_ui/email-sign-in-form";
import { ProviderButton } from "@/features/auth/_ui/provider-button";

export async function SignInForm({ className }: { className?: string }) {
  const providers = await getProviders();
  const oauthProviders = Object.values(providers ?? {}).filter(
    (provider) => provider.type === "oauth",
  );

  return (
    <div className={cn("grid gap-6", className)}>
      <EmailSignInForm />
      <Divider />
      {oauthProviders.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
