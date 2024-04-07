"use server";

import { getServerSession } from "next-auth";
import { nextAuthConfig } from "./next-auth.config";

export const sessionServer = () => getServerSession(nextAuthConfig);
