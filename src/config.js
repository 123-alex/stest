/**
 * Firebase connection settings
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, measurementId: string, authDomain: string}}
 */
export const firebaseConfig = {
    apiKey: "FIREBASE_API_KEY",
    authDomain: "FIREBASE_AUTH_DOMAIN",
    projectId: "FIREBASE_PROJECT_ID",
    storageBucket: "FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
    appId: "FIREBASE_APP_ID",
    measurementId: "FIREBASE_MEASUREMENT_ID"
};

/**
 * Firestore collection name
 * @type {string}
 */
export const firestoreCollection = "FIRESTORE_COLLECTION";

/**
 * Segment source Write Key
 * @type {string}
 */
export const segmentWriteKey = "SEGMENT_WRITE_KEY";


