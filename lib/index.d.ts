import { colorEnum } from "./common/enums/colors";
import { IOptionSend, optionsDiscordWeebhook } from "./common/interfaces/";
declare class DiscordWebhook {
    private webhook;
    private avatar;
    constructor(options: optionsDiscordWeebhook);
    send(options: IOptionSend): Promise<void>;
}
export { DiscordWebhook, colorEnum };
