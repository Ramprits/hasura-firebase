import { Request, Response } from "firebase-functions";
import { initializeApp, auth } from "firebase-admin";
initializeApp();
export const CreateUserHandler = async (
  request: Request,
  response: Response
) => {
  try {
    const { displayName, email, password } = request.body.input.credentials;
    const user = await auth().createUser({ email, password, displayName });

    await auth().setCustomUserClaims(user.uid, {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user", "admin"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": user.uid,
      },
    });
    response.status(200).send({
      id: user.uid,
      displayName: user.displayName,
      email: user.email,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};
