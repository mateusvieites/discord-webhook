"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorEnum = exports.DiscordWebhook = void 0;
const colors_1 = require("./common/enums/colors");
Object.defineProperty(exports, "colorEnum", { enumerable: true, get: function () { return colors_1.colorEnum; } });
class DiscordWebhook {
    constructor(options) {
        this.webhook = options.weebook;
        this.avatar = options.avatar || null;
    }
    send(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = {
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
        });
    }
}
exports.DiscordWebhook = DiscordWebhook;
