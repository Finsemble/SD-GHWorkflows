# SD-GHWorkflows

Add the following code to your repository as a new github workflow. The name of your file is non important we recommend using deploy.yml.

It makes the following assumptions:
1. You have a build script in your package.json file. If no build step is needed change **build** to false. 
2. The final build outputs to a ./build file (top level). If you wish to change this uncomment **output-folder** and change './example-folder'
 

```
name: Sales Demo - release deploy

on:
  release:
    types: [published]

jobs:
 call-workflow:
    uses: Finsemble/SD-GHWorkflows/.github/workflows/build-deploy.yml@main
    inputs:
        build: true
        output-folder: './example-folder'
    secrets:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
