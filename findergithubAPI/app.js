// Init Github
const github = new Github();

// Init
const ui = new UI();

//Search input
const searchUserInput = document.querySelector('#searchUser');

// Search input eventlistener
searchUserInput.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    //Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Show the profil
        ui.showProfile(data.profile);
      }
    });
  } else {
    //Clear profil
    ui.clearProfile();
  }
});
