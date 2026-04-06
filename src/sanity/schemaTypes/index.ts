import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './caseStudy'
import blog from './blog'
import news from './news'
import career from './career'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, blog, news, career],
}