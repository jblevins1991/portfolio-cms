import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import Article from "./Article";
import Author from "./Author";
import Category from "./Category";
import Technology from "./Technology";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      Article,
      Author,
      Category,
      Technology
  ]),
});
