import projectSchemaCar from '@/sanity/schemas/project-schema';
import {defineConfig} from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({

    // Project ID is the name of the project in Sanity
    projectId: 'wrbrkepp',

    // Dataset name is the name of the dataset you’re querying
    dataset: 'production',

    title: 'car magazine',
    
    apiVersion: '2025-02-11',

    basePath: '/admin',

    plugins: [deskTool()],

    schema: {types: [projectSchemaCar]},
})

export default config;