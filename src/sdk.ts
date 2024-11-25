import "./telegram-web-apps";
import { Telegram, WebApp as WebAppTypes } from "@twa-dev-mba/types";

const telegramWindow = window as unknown as Window & { Telegram: Telegram };

export const WebApp: WebAppTypes = telegramWindow.Telegram.WebApp;
