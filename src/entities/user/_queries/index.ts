import { UserId } from "@/entities/user/_domain/types";
import { getUserProfileAction } from "@/entities/user/_actions/get-user-profile";

const baseKey = "user";

export const getProfileQuery = (userId: UserId) => ({
  queryKey: [baseKey, "getProfileById", userId],
  queryFn: () => getUserProfileAction({ userId }),
});
