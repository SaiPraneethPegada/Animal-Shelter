const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

var db;

export const createIndexedDB = () => {
  if (!idb) {
    console.log("The Browser doesn't support IndexedDB");
    return;
  }

  const request = idb.open("user_data", 1);

  request.onupgradeneeded = (e) => {
    // console.log(e);
    db = e.target.result;

    const adoptData = db.createObjectStore("adoptData", {
      keyPath: "id",
      autoIncrement: true,
    });

    adoptData.createIndex("Details", "fullName", {
      unique: false,
    });

    const giveawayData = db.createObjectStore("giveawayData", {
      keyPath: "id",
      autoIncrement: true,
    });

    giveawayData.createIndex("Details", "fullName", {
      unique: false,
    });
  };

  request.onsuccess = (e) => {
    db = e.target.result;
    // console.log(`success creating ${db.name} DB`);
    // alert(`success creating ${db.name} DB`);
  };

  request.onerror = (e) => {
    console.log(e.target.error);
  };
};

export const addUserData = (userDetails, btnMsg) => {
  // console.log(userDetails);
  const data = {
    petType: userDetails?.petType,
    breed: userDetails?.breed,
    fullName: userDetails?.fullName,
    email: userDetails?.email,
    phone: userDetails?.phone,
    submittedAt: new Date(),
  };

  if (btnMsg === "Adopt") {
    const tx = db.transaction("adoptData", "readwrite");
    tx.onerror = (e) => {
      alert(` Error! Please Try submitting again  `);
      console.log(` Error! ${e.target.error} `);
    };
    const adoptUsersData = tx.objectStore("adoptData");
    adoptUsersData.add({ id: Math.round(Math.random() * 1000), ...data });
  } else {
    const tx = db.transaction("giveawayData", "readwrite");
    tx.onerror = (e) => {
      alert(` Error! Please Try submitting again  `);
      console.log(` Error! ${e.target.error} `);
    };
    const giveawayUsersData = tx.objectStore("giveawayData");
    giveawayUsersData.add({ id: Math.round(Math.random() * 1000), ...data });
  }
};

export const getAdoptUserData = () => {
  const tx = db.transaction("adoptData", "readonly");
  const getAdoptUsersData = tx.objectStore("adoptData");
  const users = getAdoptUsersData.getAll();
  users.onsuccess = (e) => {
    console.log(e.target.result);
  };
  // tx.oncomplete = () => {
  //   db.close();
  // };
};

export const getGiveawayUserData = () => {
  const tx = db.transaction("giveawayData", "readonly");
  const getGiveawayUsersData = tx.objectStore("giveawayData");
  const users = getGiveawayUsersData.getAll();
  users.onsuccess = (e) => {
    console.log(e.target.result);
  };
  // tx.oncomplete = () => {
  //   db.close();
  // };
};
