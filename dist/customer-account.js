// Public Firebase web configuration is injected from the shop's registered web app.
import { initializeApp } from './vendor/firebase/firebase-app.js';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from './vendor/firebase/firebase-auth.js';
const auth = getAuth(initializeApp({apiKey:"AIzaSyBAfr7yliX6DPnoua-cCqj1lIUQ5DK5Cco",authDomain:"valeria-sports-wears.firebaseapp.com",projectId:"valeria-sports-wears",storageBucket:"valeria-sports-wears.firebasestorage.app",messagingSenderId:"717777749519",appId:"1:717777749519:web:4f8aa5ac158e0d1733857a"}));
auth.useDeviceLanguage();
const dialog = document.querySelector('#account-modal');
const login = document.querySelector('#open-account');
const signup = document.querySelector('#open-signup');
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
let mode = 'login', user = null, busy = false, status = '';

function render() {
  login.querySelector('.account-btn-label').textContent = user ? 'My account' : 'Log in';
  login.setAttribute('aria-label', user ? 'My account' : 'Log in');
  signup.hidden = Boolean(user);
  if (!dialog.open) return;

  const signed = Boolean(user);
  const creating = mode === 'signup';
  const heading = signed ? 'My account' : creating ? 'Create your account' : 'Log in';
  const copy = signed ? 'You’re signed in with Google.' : creating
    ? 'Choose a Google account to create your Valeria account. You can use your Gmail address.'
    : 'Use the Google account you signed up with.';
  dialog.querySelector('#account-title').textContent = heading;
  dialog.querySelector('#account-description').textContent = copy;
  const identity = dialog.querySelector('#account-identity');
  identity.hidden = !signed;
  identity.textContent = signed ? [user.displayName, user.email].filter(Boolean).join(' · ') : '';
  const action = dialog.querySelector('#account-action');
  action.disabled = busy;
  action.textContent = busy ? (signed ? 'Signing out…' : 'Waiting for Google…') : signed ? 'Sign out' : 'Continue with Google ↗';
  const toggle = dialog.querySelector('#account-toggle');
  toggle.hidden = signed;
  toggle.disabled = busy;
  toggle.textContent = creating ? 'Already have an account? Log in' : 'New here? Sign up';
  dialog.querySelector('#account-status').textContent = status;
}

function show(request) {
  mode = request;
  if (!busy) status = '';
  if (!dialog.open) dialog.showModal();
  render();
}

function errorMessage(error) {
  switch(error?.code) {
    case 'auth/popup-blocked': return 'Allow pop-ups for this site, or open the shop in Chrome or Safari and try again.';
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request': return 'The Google window was closed. You can try again.';
    case 'auth/unauthorized-domain': return 'Google sign-in is not configured for this address. Open the published shop and try again.';
    case 'auth/web-storage-unsupported': return 'This browser blocked storage needed for sign-in. Try opening the shop in a regular browser window.';
    case 'auth/network-request-failed': return 'Google could not be reached. Check your connection and try again.';
    default: return 'Google sign-in could not finish. Try again, or contact Valeria.';
  }
}

document.querySelector('#account-action').addEventListener('click', async () => {
  if (busy) return;
  busy = true;
  status = '';
  const signingOut = Boolean(user);
  const hint = signingOut ? null : setTimeout(() => {
    status = "If no Google window appeared, open this shop in Chrome or Safari and allow pop-ups.";
    render();
  }, 6500);
  try {
    // Start the popup in the click handler so the browser recognizes the gesture.
    const operation = signingOut ? signOut(auth) : signInWithPopup(auth, provider);
    render();
    const result = await operation;
    user = signingOut ? null : result.user;
    status = signingOut ? 'You’re signed out.' : 'Google sign-in complete.';
  } catch (error) {
    status = signingOut ? 'Sign-out failed. Please try again.' : errorMessage(error);
  } finally {
    clearTimeout(hint);
    busy = false;
    render();
  }
});

document.querySelector('#account-toggle').addEventListener('click', () => show(mode === 'signup' ? 'login' : 'signup'));
document.querySelector("#account-contact-login").addEventListener("click", () => show("login"));
login.addEventListener('click', () => show('login'));
signup.addEventListener('click', () => show('signup'));
document.querySelector('#footer-account').addEventListener('click', () => show('login'));
document.querySelector('#account-help').addEventListener('click', () => show('signup'));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const {left,right,top,bottom} = dialog.getBoundingClientRect();
  if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) dialog.close();
});
onAuthStateChanged(auth, current => { user = current; render(); });
render();
