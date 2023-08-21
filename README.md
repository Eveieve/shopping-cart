# Shopping cart

E-commerce site made with React, Tailwind
# Components structure

## Planning

1. Set up components

- Sketch out components i need - think about the static version first
- Set up React router Links to each page(store, home, cart pages)
- [ ] Will I need a navbar component? -> will add one later if i need one
- 

2. Add routing

- Header(logo and navbar) should be in StorePage and HomePage 
- [ ] Decide whether CartPage is going to have Header or not later
- Currently, both App comp and Header comp shares "/" path 

3. Fetch shop items from API in `StorePage`
4. Give each item name and price 
- style items to be responsive with tailwind 

5. Direct to new route when item is clicked (store/name or id)
- [x] Use dynamic segments, `useParams()` to direct user to different url. Set `ProductPage` as a default component show details of a product. 
  - `Link`'s `to` attribute handles clicking by default. I forgot about that! 
  - `ProductPage` should have access to `fetchedData` array - separate `fetchData` hook in `Items` component into a separate file. 
  - Import `fetchData` hook, call `fetchData()` to get access to the fetched data. 
 - [ ] bug? : It takes a while to load the `ProductPage` for each product because I'm calling `fetchData` api call. 
 - Fix to only get data of the clicked product. 
 - [ ] Use `loader` property in `createBrowserRouter`. 

6. Style Product page 
- Using the `fetchedData` array, style the component. 
  - Is it okay to use `vw` unit? `max-w-[30vw]`
- Set up add to cart button 

7. Enable `Add to cart` button 
- when add to cart is clicked, the item is added to the CartPage 
- Set up a state to contain `cartItems`
- [x] Change to use `useContext` to get access to the data across all components
  - `useParams` returns a string!! 

- Read typescript documentation 
- Test CartPage if correctly renders the product information
- Keep on testing other UI elements in CartPage 
  - `it` test block was cleaning up itself after each test because of `setup.js` test file was cleaning up after each test. 
- Make `CartItem` component for rendering each cart item in `CartPage`
  - use `span` to wratp flowbite component and add animail with tailwind 

- Update `cartItems`'s to have `quantity` field for each product
  - Edit `addToCart` function to take in number of product as argument
 
- Style HomePage
  - Add `Carousel` from flowbite-react
## Better next time 

- Use more consistent commit messages 

- 
## Resources

- [Fake store API](https://github.com/keikaavousi/fake-store-api)
- [Cartpage UI](https://dribbble.com/shots/20785837-Ecommerce-minimal-Product-Page-UXUI)
- [HomePage design](https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page)
## Resource for learning 
- [Testing playground]("https://testing-playground.com/")
- [Common mistakew with react testing library]("https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-the-wrong-query")