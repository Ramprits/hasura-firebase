import { Request, Response } from "firebase-functions";
import fetch from "node-fetch";
const AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDU7RI1kDYJPDyoTc1sBWD1AIqjJaJAaws";
export const SignInHandler = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body.input.credentials;
    const loginResponse = await fetch(AUTH_URL, {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });
    const { idToken } = await loginResponse.json();
    if (!idToken) throw new Error("email or password incorrect");
    response.status(200).send({
      accessToken: idToken,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};
