"use client";
import { ProfileForm } from "./_ui/profile-form";

export function UpdateProfileForm({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) {
  return (
    <ProfileForm
      // profile={profileQuery.data.profile}
      // onSuccess={handleSuccess}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
}
