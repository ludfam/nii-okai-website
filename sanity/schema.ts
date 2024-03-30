import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import category from './schemaTypes/category';
import news from './schemaTypes/news';
import author from './schemaTypes/author';
import homePage from './schemaTypes/home-page';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    blockContent, 
    category, 
    news,

    homePage,
    
  ],
};
