import { Layout } from "@/widgets/app-header/_ui/layout";
import { Logo } from "@/widgets/app-header/_ui/logo";
import { MainNav } from "@/widgets/app-header/_ui/main-nav";
import { Profile } from "@/widgets/app-header/_ui/profile";

export function AppHeader() {
  return <Layout logo={<Logo />} nav={<MainNav />} profile={<Profile />} />;
}
