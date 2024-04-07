import { Profile } from "@/entities/user/_domain/types";

export const getProfileDisplayName = (profile: Profile) => {
  return profile.name ? profile.name : profile.email;
};
