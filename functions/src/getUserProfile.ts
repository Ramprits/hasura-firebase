import { logger, Request, Response } from "firebase-functions";
import { auth } from "firebase-admin";
export const getUserProfileHandler = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.body.input;
    const { uid, email, displayName } = await auth().getUser(id);
    logger.log(uid, email, displayName);
    response.status(200).send({
      id: uid,
      email,
      displayName,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};
