import { Button } from "@/shared/ui/button";
import { Profile, ProfileAvatar } from "@/entities/user/profile";
import { useUploadAvatar } from "@/features/profile-update/_vm/use-upload-avatar";

export function AvatarField({
  value,
  profile,
  onChange,
}: {
  value?: string;
  profile: Profile;
  onChange: (value?: string) => void;
}) {
  const { handleFileSelect, isPending } = useUploadAvatar({
    onSuccess: onChange,
  });

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
      onClick={handleFileSelect}
    >
      <ProfileAvatar
        className="w-full h-full"
        profile={{ ...profile, image: value }}
      />
    </Button>
  );
}
