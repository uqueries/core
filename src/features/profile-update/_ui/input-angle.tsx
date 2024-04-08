import { Label } from "@/shared/ui/label";
import { Slider } from "@/shared/ui/slider";
import React from "react";

export function InputAngle({
  get,
  set,
}: {
  get: number;
  set: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Label htmlFor="avatar-angle" className="text-left">
        Вращение
      </Label>
      <Slider
        id="avatar-angle"
        value={[get]}
        onValueChange={(value) => set(value[0])}
        min={0}
        max={360}
        step={1}
      />
    </>
  );
}
