Leisure
---------------
We generally collect many videos and movies in our hard drive, and arrange them in some type of folder heirarchy. However, we have to remember the blueprint of the tree structure that we maintain. Why would we like to remember the file system tree structure? One solution could be a searchable interface which can answer your queries. "Leisure" is a small prototype of a search interface built in Angular 1.x + firebase to illustrate the initial ideas of solutions for this problem. This is just a beginning!


How to setup and Run
---------------------
1. Leisure works with Node.js and Gulp. If you don't have it already, then install nodejs and then, install following packages globally:

        npm install -g bower gulp serve

2. Then, clone the repository.
3. Inside the root folder `leisure` on a cmd, type:

        npm install     
        bower install
        
4. Once the installation is done, then run any of the following gulp commands:

        gulp          // default task for development purpose.
        gulp serve    // creating a dist build and serve it.

5. Checkout the app on http://localhost:3000/

