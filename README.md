# Sanity CMS with Next JS
**This pairs with `udemy-next-sanity-studio-cms` github repo**
## Features 
- Pagination
- Sorting
- Switching tile to list view
- Changing background colours with `createContext`
- Changing fonts
- Preview edited content before publishing

## Documentation
- for documentation, head to [sanity.io/docs](https://sanity.io/docs)
- "next.config.js", "lib/api.js" and "/lib.sanity.js" is there you configure next js for sanity
- First create theme context, then create theme provider to use theme context, then wrap theme provider in _app.js. Then in pagelayout, show the change with jsx global
```
      <style jsx global>{`
        html, body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}
      </style>
```

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
- `npm install --save @sanity/block-content-to-react`
- `npm install --save highlight.js@10.0.3` must be this specific highlight for code highlight to work.
- `npm install --save @sanity/image-url`
- `npm i @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons`
- `npm i swr` // this uses old swr version "swr": "^0.2.2"
- pagination with SWR. Go to SWR github repo.
- `npm install moment`
- `npm install react-toggle`

## Run
- `npm start` for sanity studio app. then go to localhost 3333
- `npm run dev` for next js app. then go to localhost 3000