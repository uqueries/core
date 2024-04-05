import { Layout } from "@/widgets/app-header/_ui/layout";
import { Logo } from "@/widgets/app-header/_ui/logo";
import { MainNav } from "@/widgets/app-header/_ui/main-nav";
import { Profile } from "@/widgets/app-header/_ui/profile";
import { ToggleTheme } from "@/features/themes/toggle-theme";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "private" | "public";
}) {
  const isProfile = variant !== "auth";
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
