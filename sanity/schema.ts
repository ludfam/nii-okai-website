import { type SchemaTypeDefinition } from 'sanity';
import { HOMEPAGE, ABOUTPAGE, MUSICPAGE, SPEAKINGPAGE, ICHURCHPAGE } from './schemaTypes';
import blockContent from './schemaTypes/blockContent';
import category from './schemaTypes/category';
import news from './schemaTypes/news';
import longContent from './schemaTypes/longContent';
import events from './schemaTypes/events';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    blockContent, 
    longContent,

    HOMEPAGE,
    ABOUTPAGE,
    MUSICPAGE,
    SPEAKINGPAGE,
    ICHURCHPAGE,

    events,

    category, 
    news,

    
  ],
};
