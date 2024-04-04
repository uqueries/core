"use client";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useTransition } from "react";

export function TagItem({
  tag,
  onDelete,
}: {
  tag: TagListElement;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{tag.name}</CardTitle>
        <CardDescription>Tag description</CardDescription>
      </CardHeader>
      <CardFooter className="space-x-2">
        <Button variant="outline">Изменить</Button>
        <Button onClick={handleDelete} disabled={isLoadingDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}
