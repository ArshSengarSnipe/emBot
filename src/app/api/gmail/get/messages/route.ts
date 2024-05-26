import { Message } from "@/types/Responses";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { getOAuth2Client } from "@/actions/gmail.actions";
import { getMessage } from "../message/route";

export async function getMessageIds(
  oAuth2Client: any,
  messageLabelIds: string[]
): Promise<(string | null | undefined)[]> {
  let modifiedMessageIds: (string | null | undefined)[] = [];
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  if (gmail) {
    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 500,
      labelIds: messageLabelIds,
      includeSpamTrash: true,
    });
    if (response) {
      const messageIds = response.data?.messages;
      if (messageIds) {
        modifiedMessageIds = messageIds.map(
          (messageId, index, messages) => messageId.id
        );
      }
    }
  }
  return modifiedMessageIds;
}

export async function GET(
  request: NextRequest
): Promise<
  NextResponse<(Message | {} | undefined)[]> | NextResponse<{ error: any }>
> {
  const url: URL = new URL(request.url);
  const messageLabelIdsParam: string | null =
    url.searchParams.get("messageLabelIds");
  if (!messageLabelIdsParam) {
    return NextResponse.json(
      { error: "Please provide Message Label ID as a parameter in URL." },
      { status: 400 }
    );
  }
  const messageLabelIds: string[] = messageLabelIdsParam.split(",");
  try {
    const oAuth2Client: any = await getOAuth2Client();
    const messageIds: (string | null | undefined)[] = await getMessageIds(
      oAuth2Client,
      messageLabelIds
    );
    const messages: (Message | {} | undefined)[] = await Promise.all(
      messageIds.map(async (messageId, index, messageIds) => {
        if (messageId) {
          return await getMessage(oAuth2Client, messageId);
        }
      })
    );
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Messages!" },
      { status: 500 }
    );
  }
}
