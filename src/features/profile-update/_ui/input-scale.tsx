import { Label } from "@/shared/ui/label";
import { Slider } from "@/shared/ui/slider";
import React from "react";

export function InputScale({
  get,
  set,
}: {
  get: number;
  set: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Label htmlFor="avatar-scale" className="text-left">
        Приближение
      </Label>
      <Slider
        id="avatar-scale"
        value={[get]}
        onValueChange={(value) => set(value[0])}
        min={1}
        max={3}
        step={0.01}
      />
    </>
  );
}
