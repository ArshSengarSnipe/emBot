"use server";
import { google } from "googleapis";

let oAuth2Client: any;

export async function getOAuth2Client(): Promise<any> {
  if (oAuth2Client) {
    return oAuth2Client;
  }
  oAuth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID ??
      "484633762306-oiatjdhjelkk5fiua5qu5a8h5d645vp2.apps.googleusercontent.com",
    process.env.GMAIL_CLIENT_SECRET ?? "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",
    undefined
  );
  if (oAuth2Client) {
    oAuth2Client.setCredentials({
      refresh_token:
        process.env.GMAIL_REFRESH_TOKEN ??
        "1//04nuRtjTBirkvCgYIARAAGAQSNwF-L9Irsrn9GDxvdSU2qDmrdb9Q29VBw1lykP_AioJcsp_qQGqvtE2Emz99NL29bIC3Og32Gt8",
    });
  }
  return oAuth2Client;
}
