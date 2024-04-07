import { Button } from "@/shared/ui/button";
import { ProfileAvatar } from "@/entities/user/profile";
import { useUploadAvatar } from "@/features/profile-update/_vm/use-upload-avatar";

export function AvatarField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value?: string) => void;
}) {
  const { handleFileSelect, isPending } = useUploadAvatar({});

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
      onClick={handleFileSelect}
    >
      <ProfileAvatar
        className="w-full h-full"
        profile={{ email: "nclaus.code@gmail.com", image: value }}
      />
    </Button>
  );
}
