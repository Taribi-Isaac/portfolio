import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index'
import {structure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'my_backend',

  projectId: 'i4s8p6ik',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
