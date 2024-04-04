"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createTagAction } from "@/features/tag-list/actions";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";

const createTagFormSchema = z.object({
  name: z.string(),
});

export function CreateTagForm({
  className,
  revalidatePagePath,
}: {
  className: string;
  revalidatePagePath: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createTagFormSchema),
    defaultValues: {
      name: "",
    },
  });
  return (
    <Form {...form}>
      <form
        className={cn(className, "space-y-8")}
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            await createTagAction(revalidatePagePath, data);
          });
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </Form>
  );
}
