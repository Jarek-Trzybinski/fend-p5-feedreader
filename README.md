# Feed Reader Tester


## About Project:

This project is about testing functionality of webside by using Jasmine javascript framework. 

Project base on http://github.com/udacity/frontend-nanodegree-feedreader. 


## Tests:
RSS Feeds:

`allFeeds variable are defined and not empty`

- test make sure that the allFeeds variable has been defined and that it is not empty. 


`feed URL is defined and URL not empty`
 - test loops through each feed in the allFeeds object and ensures it has a URL defined  and that the URL is not empty.

`feed name is defined and name is not empty`
- test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

The menu:

`menu element is hidden by default`
- test ensures the menu element is hidden by default. 

`menu changes visibility when menu clicked`
- test ensures the menu changes  visibility when the menu icon is clicked.

Initial Entries:
`Initial Entries`
- test  ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
         
New Feed Selection:
`content changes`
- test ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Dependences:

HTML, JavaScript, CSS, Jasmine Javascript Framework, http://github.com/udacity/frontend-nanodegree-feedreader


## Author:

Jaroslaw Trzybinski