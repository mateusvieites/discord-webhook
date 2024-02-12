import { colorEnum } from "./common/enums/colors";
import {
  IOptionSend,
  ISend,
  optionsDiscordWeebhook,
} from "./common/interfaces/";

class DiscordWebhook {
  private webhook: string;
  private avatar: string | null;

  constructor(options: optionsDiscordWeebhook) {
    this.webhook = options.weebook;
    this.avatar = options.avatar || null;
  }

  async send(options: IOptionSend) {
    let payload: ISend = {
      content: options.message,
      embeds: options.embeds,
    };
    fetch(this.webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((error) => console.error("Erro ao enviar mensagem:", error));
  }
}

export { DiscordWebhook, colorEnum };
