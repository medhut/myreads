## MyReads: A Book Tracking App 


## About	

​	This Web App was built to showcase the power of React Library in creating effecient and smart frontend applications

## Instructions

- npm i
- yarn start
- open localhost:3000
- The main page lists your personal Books Collection categorized in three main categories (Bookshelves) namely : Currently Reading , Want to Read and Read
- The Books are listed in each shelf as the book cover thumbnail with a drop-down list for changing shelf the book belongs to or even remove it from the three shelves by selecting the option 'None'
- At the bottom right , there is a button with a "+ " sign to add books to your personal book collection by searching the backend server BooksAPI for new titles or authors  .
- For Demonstration purposes the Selection is limited to a set of query strings as listed in the SEARCH_TERMS.md file
- The Search Page results can then be directed to the required bookshelf by selecting it from the drop down list .
- The assigned bookshelf for a certain book stays persistent in both the Main Page and the Search Page
- The App also demonstrate the use of "react-router-dom" component to establish the routing of the pages: the ( / ) and ( /search)  pages using the Add Button to go to the /search and the Back button to go back to the main page and vice versa.

##  Package Content

```
|   +---public
|			favicon.ico
|			index.html	
|   +---src
|   |   +---css
|   |   |       App.css
|   |   |       index.css
|   |   |
|   |   +---icons
|   |   |       add.svg
|   |   |       arrow-back.svg
|   |   |		arrow-drop-down.svg
|	|	|
|   |   +---images
|   |   |       noCover.png
|	|
|   |   App.js
|	|	Book.js
|	|	BooksAPI.js
|	|	BookShelf.js
|	|	BookShelfChanger.js
|	|	index.js
|	|	ListBooks.js
|	|	Search.js
|   package.json
|   README.md
|   SEARCH_TERMS.md
|   yarn.lock

```



## Built With
* HTML 5, CSS 3 and SASS
* Javascript ES6 for coding .
* React 17.0.2
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Authors

* ***Medhat Abdulmoneim Sayed*** 

​       medhut2011@gmail.com

## Acknowledgments

Many thanks to :

* Udacity.com
* Egypt FWD
