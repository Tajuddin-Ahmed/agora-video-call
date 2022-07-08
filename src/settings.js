import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f4366a39b37c42f8906202bea0e896ff";
const token =
  "006f4366a39b37c42f8906202bea0e896ffIADHaHhoUxMx0kxek4cBEh//MygPmgA/TRerPjMJuLBA5mTNKL8AAAAAEACZ/16CSpzJYgEAAQBAnMli";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
