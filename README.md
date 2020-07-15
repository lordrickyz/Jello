# Jello

## Visit The Live Site

[Click Me To Enter Live Site](https://jelloz.herokuapp.com/)

![Jello splash page](https://github.com/lordrickyz/Jello/blob/master/app/assets/readme/readme-splash.png)

## Introduction

Jello is a Trello Clone. It offers collaborate tools to assist in project management and allows users to organize their workflow. Teams can easily manage their projects through a simple system of creating boards.

![Jello splash gif](https://github.com/lordrickyz/Jello/blob/master/app/assets/readme/splashgif.gif)


## Technologies

* Backend: Ruby on Rails, PostgreSQL
* Frontend: React, Redux
* Hosting: Heroku
* Additional technologies:
  * [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): adds drag and drop functionality
  * [@React-FontAwesome](https://github.com/FortAwesome/react-fontawesome) for icons.

## Features

### User Auth

![Sign Up Page](https://github.com/lordrickyz/Jello/blob/master/app/assets/readme/signup.png)

Users can sign up or log in through the redirect buttons from top of the navigation bar. Users passwords are secured with BCrypt and session tokens are randomly generated and invalidated when logged out.

## Boards

### Board Create

![Create Board](https://github.com/lordrickyz/Jello/blob/master/app/assets/readme/createboard.gif)

### Drag-and-Drop Lists and Cards

![Draggable](https://github.com/lordrickyz/Jello/blob/master/app/assets/readme/moveLists.gif)

Users have a simple dashboard that includes their list of boards they already made. Users can create, edit, and delete their own boards for their designated projects.

For lists to reposition themselves, every changes needs to be sorted out. Data  has to be sorted out first. 

```js
// Sets our prev_id and next_id for first list in orderList 
  if (newIndex === 0) {
    list.prev_id = null;
    list.next_id = newListOrder[1];

// Sets our prev_id and next_id for last list in orderList 
  } else if (newIndex === newListOrder.length - 1) {
    list.prev_id = newListOrder[newListOrder.length - 2];
    list.next_id = null;
// Sets our prev_id and next_id for every other list between first and last lists in orderList 
  } else {
    list.prev_id = newListOrder[newIndex - 1];
    list.next_id = newListOrder[newIndex + 1];
  }
  this.props.updateList(list);
```

```js
sortList() {
// Checks to see if our props contain any lists
  if (Object.keys(this.props.lists).length === 0) return;
  
// Checks for our first list within our props and pushes our lists into an ordered list. 
  let oldList = Object.values(this.props.lists);
  let currentList = oldList.find((list) => list.prev_id === null);
  let orderedLists = [];
  orderedLists.push(currentList.id);
```

Then while loop helps sort out next list and adds it to the last order. And finally sets our state so it can be registered up to our database using a different function.

```js
  while (currentList.next_id !== null) {
    currentList = listsFromProps.find((list) => list.id === currentList.next_id);
    orderedLists.push(currentList.id);
  }
  this.setState({ listOrder: orderedLists });
}
```
### Cards

![CreateCard](https://github.com/lordrickyz/Jello/blob/master/app/assets/readme/createCard.gif)

## Future Updates

Jello will eventually be able to do the following:

* Users will be able to delete lists and cards.
* Upload images to lists.
* Search for Boards
* Change Background of Board.
* Notifications for Changes Made