import { Notification } from "@/types/Responses";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { getOAuth2Client } from "@/actions/gmail.actions";

export async function postNotification(
  oAuth2Client: any,
  messageLabelIds: string[]
): Promise<Notification | {}> {
  let modifiedNotification: Notification | {} = {};
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  if (gmail) {
    const response = await gmail.users.watch({
      userId: "me",
      requestBody: {
        labelIds: messageLabelIds,
        topicName:
          process.env.GMAIL_TOPIC_NAME ??
          "projects/embot-snipe/topics/emBotTopic0",
      },
    });
    if (response) {
      modifiedNotification = response.data;
    }
  }
  return modifiedNotification;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<Notification | {}> | NextResponse<{ error: any }>> {
  const body: any = await request.json();
  const { messageLabelIds: messageLabelIdsParam }: any = body;
  if (!messageLabelIdsParam || !Array.isArray(messageLabelIdsParam)) {
    return NextResponse.json(
      { error: "Please provide Message Label IDs within body of URL." },
      { status: 400 }
    );
  }
  const messageLabelIds: string[] = messageLabelIdsParam;
  try {
    const oAuth2Client: any = await getOAuth2Client();
    const notification: Notification | {} = await postNotification(
      oAuth2Client,
      messageLabelIds
    );
    return NextResponse.json(notification);
  } catch (error) {
    return NextResponse.json({ error: "Failed to Notify!" }, { status: 500 });
  }
}
