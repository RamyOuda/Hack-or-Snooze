"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// show form to submit new story
function navSubmit(event) {
  console.debug("navSubmit", event);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}
$navSubmit.on("click", navSubmit);

// show list of favorites
function navFavoritesClick(event) {
  console.debug("navFavoritesClick", event);
  hidePageComponents();
  putFavoritesListOnPage();
}
$body.on("click", "#nav-favorites", navFavoritesClick);

// show list of own stories
function navMyStories(event) {
  console.debug("navMyStories", event);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}
$body.on("click", "#nav-my-stories", navMyStories);

// show profile information
function navProfileClick(event) {
  console.debug("navProfileClick", event);
  hidePageComponents();
  $userProfile.show();
}
$navUserProfile.on("click", navProfileClick);
