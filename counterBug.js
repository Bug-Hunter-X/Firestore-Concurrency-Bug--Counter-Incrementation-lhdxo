function incrementCounter(userId) {
  // Incorrect: Directly accessing a document without a transaction
  db.collection('users').doc(userId).update({ counter: firebase.firestore.FieldValue.increment(1) });
}