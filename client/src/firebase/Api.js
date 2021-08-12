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
     //add data
     addUser : async (usuario) => {
        await DB.collection("users").doc(usuario.id).set({//collection-name
            name: usuario.name,
            avatar: usuario.avatar
        }, {merge:true}) //en caso de no reptir el mismo usuario 
     },
     //fnd chat list
     getContactList : async (userId) => {
        let list = [];

        let results = await DB.collection("users").get();
        results.forEach( result => {
            let data = result.data();
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
        let newChat = await DB.collection('chats').add({
             messages: [],
             users: [user.id, user2.id]
         });

        DB.collection("users").doc(user.id).update({
             chats: firebase.firestore.FieldValue.arrayUnion({ 
                 id: newChat.id,
                 name: user2.name,
                 avatar: user2.avatar,
                 with: user2.id //referencia con usuario1
             })
         });

        DB.collection("users").doc(user2.id).update({
             chats: firebase.firestore.FieldValue.arrayUnion({
                 id: newChat.id,
                 name: user.name,
                 avatar: user.avatar,
                 with: user.id //referencia con usuario
             })
         });
     },
     onChatList : (userId, setChats) => {
         return DB.collection("users").doc(userId).onSnapshot((doc) => {
             if(doc.exists){
                 let data = doc.data();
                 if(data.chats){
                     setChats(data.chats);
                 }
             }
         })
     },
     onChatContent : (userId, setListMessages) => {
         return DB.collection("users").doc(userId).onSnapshot((doc)=>{
             if(doc.exists){
                 let data = doc.data();
                 setListMessages(data.messages);
             }
         })
     }
 }
 
 export default login;