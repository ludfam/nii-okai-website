import { type SchemaTypeDefinition } from 'sanity';
import { HOMEPAGE, ABOUTPAGE } from './schemaTypes';
import blockContent from './schemaTypes/blockContent';
import category from './schemaTypes/category';
import news from './schemaTypes/news';
import longContent from './schemaTypes/longContent';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    blockContent, 
    longContent,
    
    HOMEPAGE,
    ABOUTPAGE,

    category, 
    news,

    
  ],
};
