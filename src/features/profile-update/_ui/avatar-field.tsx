import { Button } from "@/shared/ui/button";
import { Profile, ProfileAvatar } from "@/entities/user/profile";
import { useUploadAvatar } from "@/features/profile-update/_vm/use-upload-avatar";
import React from "react";
import { useCropAvatar } from "@/features/profile-update/_vm/use-crop-avatar";
import { Spinner } from "@/shared/ui/spinner";

export function AvatarField({
  value,
  profile,
  onChange,
}: {
  value?: string;
  profile: Profile;
  onChange: (value?: string) => void;
}) {
  const { handleFileSelect, upload, isPending } = useUploadAvatar({
    onSuccess: onChange,
  });
  const CropAvatar = useCropAvatar(upload);

  return (
    <>
      {CropAvatar.Dialog}
      <Button
        variant="ghost"
        className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
        type="button"
        onClick={() => handleFileSelect().then(CropAvatar.cropImage)}
      >
        {isPending && (
          <div className="inset-0 absolute flex items-center justify-center z-10">
            <Spinner
              className="w-10 h-10"
              aria-label="Загрузка новой аватарки"
            />
          </div>
        )}
        <ProfileAvatar
          className="w-full h-full"
          profile={{ ...profile, image: value }}
        />
      </Button>
    </>
  );
}
