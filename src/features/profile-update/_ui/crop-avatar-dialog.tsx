import React from "react";
import AvatarEditor from "react-avatar-editor";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { InputScale } from "@/features/profile-update/_ui/input-scale";
import { InputAngle } from "@/features/profile-update/_ui/input-angle";

export function CropAvatarDialog({
  image,
  onSave,
}: {
  image?: File;
  onSave?: (fileData: string) => void;
}) {
  const editorRef = React.useRef<AvatarEditor>(null);
  const [avatarScale, setScale] = React.useState<number>(1);
  const [avatarAngle, setAngle] = React.useState<number>(0);

  const handleSave = () => {
    const canvas = editorRef.current?.getImageScaledToCanvas();
    onSave?.(canvas!.toDataURL());
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Нужно лишь чутка подрезать</DialogTitle>
        <DialogDescription>
          Воспользуйтесь ползунками снизу, чтобы подогнать изображение к нужному
          размеру
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center gap-4 py-4">
        <AvatarEditor
          className="rounded-lg"
          ref={editorRef}
          image={image ?? ""}
          width={250}
          height={250}
          border={0}
          borderRadius={250}
          color={[0, 0, 0, 0.5]} // RGBA
          scale={avatarScale}
          rotate={avatarAngle}
        />
      </div>
      <InputScale get={avatarScale} set={setScale} />
      <InputAngle get={avatarAngle} set={setAngle} />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">Отмена</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button onClick={handleSave}>Обрезать</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
