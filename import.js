// Imports

const { initializeFirebaseApp, restore } = require("firestore-export-import");
const firebaseConfig = require("./config.js");
const serviceAccount = require("./serviceAccount.json");

const appName = "data";
const firestore = initializeFirebaseApp(serviceAccount);

// JSON To Firestore

const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    // await firestore.initializeFirebaseApp(
    //   serviceAccount,
    //   firebaseConfig.databaseURL
    // );
    await initializeFirebaseApp(serviceAccount);
    console.log("Firebase Initialized");

    await restore(firestore, "./numberTest.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
