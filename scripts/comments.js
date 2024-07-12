// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Manejo de autenticación
const authContainer = document.getElementById('auth-container');
const commentsSection = document.getElementById('comments-section');

auth.onAuthStateChanged(user => {
    if (user) {
        authContainer.style.display = 'none';
        commentsSection.style.display = 'block';
        loadComments();
    } else {
        authContainer.style.display = 'block';
        commentsSection.style.display = 'none';
    }
});

document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => console.error('Error al iniciar sesión:', error));
});

document.getElementById('signup-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .catch(error => console.error('Error al registrarse:', error));
});

document.getElementById('logout-btn').addEventListener('click', () => {
    auth.signOut().catch(error => console.error('Error al cerrar sesión:', error));
});

// Manejo de comentarios
document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        db.collection('comments').add({
            text: commentText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: auth.currentUser.email
        }).then(() => {
            commentInput.value = '';
        }).catch(error => console.error('Error al agregar comentario:', error));
    } else {
        alert('Por favor, escribe un comentario antes de enviarlo.');
    }
});

function loadComments() {
    db.collection('comments').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.innerHTML = '';
        snapshot.forEach(doc => {
            const comment = doc.data();
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.textContent = `${comment.user}: ${comment.text}`;
            commentsContainer.appendChild(commentElement);
        });
    });
}
