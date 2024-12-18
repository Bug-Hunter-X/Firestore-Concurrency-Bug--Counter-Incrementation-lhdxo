function incrementCounter(userId) {
  db.runTransaction(async (transaction) => {
    const userDocRef = db.collection('users').doc(userId);
    const docSnapshot = await transaction.get(userDocRef);
    if (!docSnapshot.exists) {
      transaction.set(userDocRef, { counter: 1 });
    } else {
      const newCounter = docSnapshot.data().counter + 1;
      transaction.update(userDocRef, { counter: newCounter });
    }
  });
} 