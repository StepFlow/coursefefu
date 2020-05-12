<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="(unit, i) in units" :key="i">
                abc
            </li>
        </ul>
    </div>
</template>

<script>
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtUEJJ6lvoSEtg2zGO3NP9Z0bWPTAcfq0",
    authDomain: "coursefefu-f0d43.firebaseapp.com",
    databaseURL: "https://coursefefu-f0d43.firebaseio.com",
    projectId: "coursefefu-f0d43",
    storageBucket: "coursefefu-f0d43.appspot.com",
    messagingSenderId: "425159818791",
    appId: "1:425159818791:web:4c674117dd5169d8f29802"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

let units = db.collection('units').get(function(units) {
    if (dunitsoc.exists) {
        console.log("Document data:", units.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});
console.log(units)


docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

export default {
    name: 'vue-component',
    data() {
        return {
            units: [],
            msg: '123',
        }
    },
    watch: {
        units(newVal) {
            console.log(newVal);
        }
    },
    firebase: {
        units: db.collection('units').orderBy('createAt')
    }
}
</script>

<style>

</style>