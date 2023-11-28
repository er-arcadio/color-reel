# Color Reel

## How to run this Repo

- Fork the repo
- `npm install` for the dependencies
- `npm run dev` to run the site

## Complete the Following Activities in Order

[Replit Reference](https://replit.com/@MannyRodriguez3/ColorReel#index.html)

### Mild - Transfer it to React!

1. Copy the HTML code in the Home.jsx component
2. Use “CMD + ?” to turn the comments into jsx comments
3. Replace your “class” with “className” and “tabindex” with “tabIndex”
4. Change references to images so that they match the template. (Don’t worry about the gallery for now)
5. Separate the Navbar, Header, Main, and Footer into their own components with their own CSS files. Separate the CSS for each as well.
6. In Main.jsx, separate the 2 sections into their own components “Cards” and “Gallery” with their own CSS.
7. Main doesn’t need to be its own component - Undo the creation of main by putting its code back in its parent component along with its CSS and imports.

### Medium - The Gallery

8. In the Home.jsx, import the data from sample data and send it as a prop to Gallery.
9. In Gallery.jsx, map over the data to populate the images.
10. Create a Red.jsx that replicates Home.jsx with the following changes
    a. There should be no Cards component.
    b. The background color of the body should be pink.
    c. The data passed to Gallery should be filtered to only “isRed” images. (HINT: use the “filter” function)

    _(NOTE: Don’t style the body. Changes will be made in both pages)_

11. In the Cards.jsx, create an onClick function for the buttons. Use the following resource to redirect to the Red page: https://reactrouter.com/en/main/hooks/use-navigate – You will have to create a Red route in App.jsx as well.
12. Repeat steps 10 and 11 for the Yellow and Blue page. (I used lightyellow and lightblue respectively for the backgrounds.)
13. The color wheel logo at the top left of the page should navigate back to the home page.

### Medium Spicy - Favorites

14. Turn your Components into styled components.
15. Create a state array variable that will store any liked photos. When an image in the Gallery is clicked, that image should be added to the array (if it's not already there).
16. Create a Favorites page that is designed how you wish. It should include the Gallery component with all the liked images.
17. Include a way to remove an image from the Favorites page.
18. TBC
