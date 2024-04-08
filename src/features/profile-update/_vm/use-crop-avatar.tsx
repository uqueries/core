import { CropAvatarDialog } from "@/features/profile-update/_ui/crop-avatar-dialog";
import React from "react";
import { useControllableDialog } from "@/shared/vm/use-controllable-dialog";

export const useCropAvatar = (handleSave: (fileData: string) => void) => {
  const ControllableDialog = useControllableDialog();
  const [preview, setPreview] = React.useState<File>();

  const onSave = (fileData: string) => {
    handleSave(fileData);
    ControllableDialog.close();
  };

  return {
    cropImage: (file: File) => {
      ControllableDialog.open();
      setPreview(file);
    },
    Dialog: (
      <ControllableDialog.Dialog>
        <CropAvatarDialog onSave={onSave} image={preview} />
      </ControllableDialog.Dialog>
    ),
  };
};
