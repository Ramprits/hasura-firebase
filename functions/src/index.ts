import * as functions from "firebase-functions";
import { CreateUserHandler } from "./createUser";
import { getUserProfileHandler } from "./getUserProfile";
import { SignInHandler } from "./signin";
import { NotifyAboutCommentHandler } from "./notifyAboutComment";

export const notifyAboutComment = functions.https.onRequest(
  NotifyAboutCommentHandler
);

export const createUser = functions.https.onRequest(CreateUserHandler);
export const userProfile = functions.https.onRequest(getUserProfileHandler);
export const signin = functions.https.onRequest(SignInHandler);
