import { getApps, initializeApp, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

let adminApp: App;
if (!getApps().length) {
  adminApp = initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!)),
  });
} else {
  adminApp = getApps()[0]!;
}

export const adminAuth = getAuth(adminApp);
export const db = getFirestore(adminApp);
// (Storage ficará para depois)
