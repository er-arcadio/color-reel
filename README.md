# Color Reel

## How to run this Repo

- Fork the repo
- `npm install` for the dependencies
- `npm run dev` to run the site

### Troubleshooting
- Be sure you have vite installed `npm i vite`

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
10. Create a Red.jsx (and Red.css) that replicates Home.jsx (and Home.css respectively).
11. In the Cards.jsx, create an onClick function for the red button. Use the following resource to redirect to the Red page: https://reactrouter.com/en/main/hooks/use-navigate – You will have to create a Red route in App.jsx as well.
12. Make the following changes to the Red.jsx.
    a. There should be no `Cards` component.
    b. The background color of the body should be pink.
    c. The data passed to Gallery should be filtered to only “isRed” images. (HINT: use the “filter” function)
    d. The Gallery title should be renamed to Red (refer to the original code).

    _(NOTE: Don’t style the body. Changes will be made in both pages)_

14. Repeat steps 10 - 12 for the Yellow and Blue page. (I used lightyellow and lightblue respectively for the backgrounds.)
15. The color wheel logo at the top left of the page should navigate back to the home page.

### Medium Spicy - Favorites

14. Turn your Components into styled components.
15. Create a state array variable that will store any liked photos. When an image in the Gallery is clicked, that image should be added to the array (if it's not already there).
16. Create a Favorites page that is designed how you wish. It should include the Gallery component with all the liked images.
17. Include a way to remove an image from the Favorites page.


### Stretch

- Set up a database using MongoDB to store the image and their data. Then use a `useEffect` to pull in the data before rendering the page.
- Create a SpecialGallery component that will replace the red, yellow, and blue gallery components.
    - The Routes should be modified.
    - The SpecialGallery component should take in a prop to indicate which of the 3 colors it is.
    - Create variables that are set based on the prop value, and generalize the areas that use red/yellow/blue specific language.
