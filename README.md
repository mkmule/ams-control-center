## Getting Started

### Local development
Make sure you have created _.env.local_ with required variables below (can be obtained from Firebase project console).
```
NEXT_PUBLIC_FIREBASE_CLIENT_API_KEY=
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
```

```bash
npm install
npm run dev
```
### Using Docker
Make sure Docker is installed and running on your machine. You might see errors due to missing Firebase admin credentials when performing Update action.

Application Firebase admin's runtime configuration relies on Google Application Default Credentials: https://firebase.google.com/docs/admin/setup#initialize-sdk.
```bash
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```


