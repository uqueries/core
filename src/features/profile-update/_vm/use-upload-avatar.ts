import { useMutation } from "@tanstack/react-query";
import { selectFile } from "@/shared/lib/file";
import { AVATAR_FILE_KEY } from "@/features/profile-update/_constants";
import { uploadAvatarAction } from "@/features/profile-update/_actions/upload-avatar";

export const useUploadAvatar = ({
  onSuccess,
}: {
  onSuccess?: (avatarPath: string) => void;
}) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: uploadAvatarAction,
    onSuccess(data) {
      onSuccess?.(data.avatar.path);
    },
  });

  const handleFileSelect = async () => {
    return await selectFile("image/*");
  };

  const upload = async (fileData: string) => {
    const blob = await (await fetch(fileData)).blob();

    const formData = new FormData();
    formData.set(AVATAR_FILE_KEY, blob);

    await mutateAsync(formData);
  };

  return {
    handleFileSelect,
    upload,
    isPending,
  };
};
