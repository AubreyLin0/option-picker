/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

admin.initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  //   logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const getUserInfo = onRequest(async (request, response) => {
  console.log(request);
  try {
    const snapshot = await admin
      .firestore()
      .doc(`users/ZvEYTjgnmsZOL82n4HIy`)
      .get();
    const data = snapshot.data();
    response.send(data);
  } catch (err) {
    console.log(err);
    response.status(500).send(err);
  }
});
