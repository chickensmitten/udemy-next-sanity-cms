# Sanity CMS with Next JS
## Setup
- `npx create-next-app <app name>`
- `npm install -g @sanity/cli`
- `sanity init` to kickstart the sanity studio folders
- `npm install react-bootstrap@1.0.1 bootstrap@4.5.0 --save`
- `npm i sass`
- create `jsconfig.json` file
- create `.env.local` file in root folder of the blog. Then, go to the `sanity.json` in sanity code base to get the project is and dataset name.
```
SANITY_DATASET_NAME=YOUR_DATASET_NAME
SANITY_PROJECT_ID=YOUR_PROJECT_ID
```
- `npm install --save @sanity/client`

## Run
- `npm start` for sanity studio app. then go to localhost 3333
- `npm run dev` for next js app. then go to localhost 3000