export type Label = {
  id: string | null | undefined;
  name: string | null | undefined;
};

export type Message = {
  threadId: string | null | undefined;
  labelIds: string[] | null | undefined;
  snippet: string | null | undefined;
  historyId: string | null | undefined;
  internalDate: string | null | undefined;
  payload: {
    partId: string | null | undefined;
    mimeType: string | null | undefined;
    filename: string | null | undefined;
    headers: any[] | null | undefined;
    body?: any;
    parts?: any[] | null | undefined;
  };
};

export type Notification = {
  historyId: string | null | undefined;
  expiration: string | null | undefined;
};
