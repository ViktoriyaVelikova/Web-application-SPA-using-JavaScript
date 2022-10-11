# Web Application (SPA)-using JavaScript

The application uses my Firebase Realtime Database.
To initialize the project, execute the command npm install via the command-line terminal.

  - Navigation Bar 
     - The logged-in user navbar contains the links to the Catalog page, the Create page, and a link for a Logout action.
     - The guest user navbar contains the links to the Catalog page, the Home page, Login and Register.
  - Login User
       - By providing an email and password, the user logs in.
  - Register 
      - By providing an email and password, the application registers a new user in the system.
  - Logout 
      - The Logout action is available to logged-in users.
  - Catalog Page 
      - This page displays a list of all albums in the system with information about them. All users see the albums, but only logged-in users will see the details button and details page. 
      - If there are no albums, a message is displayed.
  - Create Page 
      - The creation page is available to logged in users. Contains a form for creating new albums.
      - If successful, redirects the user to the catalog page.
  - Details 
      - Users can view album details. Clicking an album's Details link displays the Details page. 
      - If the currently logged in user is the creator of the album, the Edit and Delete buttons are displayed.
  - Edit Page 
     - The Edit page is available to logged in users and allows the author to edit their albums. 
     - Clicking a specific album's Edit link on the details page displays the Edit page. It contains a form with input fields for all relevant properties.
  - Delete 
     - The Delete action is available to logged in users for albums they have created. 
     - When the author clicks the Delete action of any album, a confirmation dialog box will be displayed and upon confirming this dialog box, the album will be deleted from the system.