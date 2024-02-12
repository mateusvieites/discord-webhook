import { IEmbeds } from './embeds.interface';
export interface ISend {
  content?: string | undefined;
  embeds?: IEmbeds[];
}