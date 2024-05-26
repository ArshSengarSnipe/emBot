import { Message } from "@/types/Responses";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { getOAuth2Client } from "@/actions/gmail.actions";

export async function getMessage(
  oAuth2Client: any,
  messageId: string
): Promise<Message | {}> {
  let modifiedMessage: Message | {} = {};
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  if (gmail) {
    const response = await gmail.users.messages.get({
      userId: "me",
      id: messageId,
      format: "full",
    });
    if (response) {
      const message = response.data;
      if (message) {
        modifiedMessage = message;
      }
    }
  }
  return modifiedMessage;
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<Message | {}> | NextResponse<{ error: any }>> {
  const url: URL = new URL(request.url);
  const messageIdParameter: string | null = url.searchParams.get("messageId");
  if (!messageIdParameter) {
    return NextResponse.json(
      { error: "Please provide Message Label ID as parameter in URL." },
      { status: 400 }
    );
  }
  const messageId: string = messageIdParameter;
  try {
    const oAuth2Client: any = await getOAuth2Client();
    const message: Message | {} = await getMessage(oAuth2Client, messageId);
    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Message!" },
      { status: 500 }
    );
  }
}
