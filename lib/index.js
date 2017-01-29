const firebase = require('./firebase');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-snippet');
const {
  $snippetsSection,
  $newSnippetForm,
  $newSnippetTitle,
  $newSnippetCode,
  $newSnippetSubmit,
  $signInButton,
  $userInfo
} = require('./elements');

let currentUser;
const provider = new firebase.auth.GoogleAuthProvider();

$newSnippetTitle.on('keyup', validateInputFields);
$newSnippetCode.on('keyup', validateInputFields);

$newSnippetForm.on('submit', (e) => {
    e.preventDefault();

    const title = $newSnippetTitle.val();
    const code = $newSnippetCode.text();

    $snippetsSection.append(renderSnippet(title, code));

    $newSnippetTitle.val('');
    $newSnippetCode.val('');
});


$signInButton.on('click', () => {
    firebase.auth().signInWithPopup(provider);
});


firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    $signInButton.toggle(!currentUser);
    $newSnippetForm.toggle(!!currentUser);

    if (currentUser) {
          const { displayName, email } = currentUser;
          $userInfo.text(`Sign in as ${displayName} (${email}).`);
        } else {
          $userInfo.text('');
        }
});
