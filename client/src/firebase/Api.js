import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import firebaseConfig from './config/fireBase';

//connect fireBase to App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const DB = firebaseApp.firestore(); //manipulacion de datos

 const login = {
     googlePopUp: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
     },
     addUser : async (usuario) => {
        await DB.collection("users").doc(usuario.id).set({//collection-name
            name: usuario.name,
            avatar: usuario.avatar
        }, {merge:true}) //en caso de no reptir el mismo usuario 
     },
     getContactList : async (userId) => {
        const list = [];

        const results = await DB.collection("users").get();
        results.forEach( result => {
            const data = result.data();

            if(result.id !== userId){
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                })
            }
        })
        return list;
     },
     addNewChat : async (user, user2) => {
         const newChat = await DB.collection('chats').add({
             messages: [],
             users: [user.id, user2.id]
         });

         DB.collection("users").doc(user.id).update({
             chats: firebase.firestore.FieldValue.arrayUnion({
                 chatId: newChat.id,
                 title: user2.name,
                 image: user2.avatar,
                 with: user2.id //referencia con usuario1
             })
         });

         DB.collection("users").doc(user2.id).update({
             chats: firebase.firestore.FieldValue.arrayUnion({
                 chatId: newChat.id,
                 title: user.name,
                 image: user.avatar,
                 with: user.id //referencia con usuario1
             })
         });
     }
 }

 export default login;