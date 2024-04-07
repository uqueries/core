import { Profile, SessionEntity, UserId } from "../_domain/types";
import { createProfileAbility } from "@/entities/user/_domain/ability";
import { AuthorizationError } from "@/shared/lib/errors";
import { profileRepository } from "@/entities/user/_repositories/profile";

type UpdateProfile = {
  userId: UserId;
  data: Partial<Profile>;
  session: SessionEntity;
};

export class UpdateProfileUseCase {
  async exec({ userId, data, session }: UpdateProfile): Promise<Profile> {
    const profileAbility = createProfileAbility(session);

    if (!profileAbility.canUpdateProfile(userId)) {
      throw new AuthorizationError();
    }
    return await profileRepository.update(userId, data);
  }
}

export const updateProfileUseCase = new UpdateProfileUseCase();
