import { Label } from "@/types/Responses";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { getOAuth2Client } from "@/actions/gmail.actions";

export async function getLabels(oAuth2Client: any): Promise<Label[]> {
  let modifiedLabels: Label[] = [];
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  if (gmail) {
    const response = await gmail.users.labels.list({ userId: "me" });
    if (response) {
      const labels = response.data?.labels;
      if (labels && labels.length > 0) {
        modifiedLabels = labels.map((label, index, labels) => ({
          id: label.id,
          name: label.name,
        }));
      }
    }
  }
  return modifiedLabels;
}

export async function GET(): Promise<
  NextResponse<Label[]> | NextResponse<{ error: any }>
> {
  try {
    const oAuth2Client: any = await getOAuth2Client();
    const labels: Label[] = await getLabels(oAuth2Client);
    return NextResponse.json(labels);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Labels!" },
      { status: 500 }
    );
  }
}
