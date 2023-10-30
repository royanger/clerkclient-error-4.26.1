# Steps to reproduce

1. Clone the repo
2. Add your .env with Clerk keys
3. Run `pnpm i` or `npm i`
4. Run `pnpm dev` or `npm run dev`
5. Login via Account Portal
6. Reload the page -- should error appear in terminal in 5-10 reloads.

## Error


```bash
_ClerkAPIResponseError: Bad Request
    at UserAPI.eval [as request] (webpack-internal:///(rsc)/./node_modules/.pnpm/@clerk+backend@0.32.1_react@18.2.0/node_modules/@clerk/backend/dist/index.js:1191:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async getOAuth (webpack-internal:///(rsc)/./src/app/page.tsx:15:18) {
  clerkError: true,
  status: 400,
  errors: [
    {
      code: 'oauth_token_retrieval_error',
      message: 'Token retrieval failed',
      longMessage: 'Failed to retrieve a new access token. If this problem persists, please contact your site administrator.',
      meta: [Object]
    }
  ]
}
 ⨯ node_modules/.pnpm/@clerk+backend@0.32.1_react@18.2.0/node_modules/@clerk/backend/dist/index.js (1381:10) @ UserAPI.eval [as request]
 ⨯ unhandledRejection: _ClerkAPIResponseError: Bad Request
    at UserAPI.eval [as request] (webpack-internal:///(rsc)/./node_modules/.pnpm/@clerk+backend@0.32.1_react@18.2.0/node_modules/@clerk/backend/dist/index.js:1191:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async getOAuth (webpack-internal:///(rsc)/./src/app/page.tsx:15:18) {
  clerkError: true,
  status: 400,
  errors: [
    {
      code: 'oauth_token_retrieval_error',
      message: 'Token retrieval failed',
      longMessage: 'Failed to retrieve a new access token. If this problem persists, please contact your site administrator.',
      meta: [Object]
    }
  ]
}
null
 ⨯ node_modules/.pnpm/@clerk+backend@0.32.1_react@18.2.0/node_modules/@clerk/backend/dist/index.js (1381:10) @ UserAPI.eval [as request]
 ⨯ unhandledRejection: _ClerkAPIResponseError: Bad Request
    at UserAPI.eval [as request] (webpack-internal:///(rsc)/./node_modules/.pnpm/@clerk+backend@0.32.1_react@18.2.0/node_modules/@clerk/backend/dist/index.js:1191:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async getOAuth (webpack-internal:///(rsc)/./src/app/page.tsx:15:18) {
  clerkError: true,
  status: 400,
  errors: [
    {
      code: 'oauth_token_retrieval_error',
      message: 'Token retrieval failed',
      longMessage: 'Failed to retrieve a new access token. If this problem persists, please contact your site administrator.',
      meta: [Object]
    }
  ]
}
null
```
