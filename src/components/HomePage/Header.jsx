// contains site's logo, name, navigation bar , search bar

function Header() {
  return (
    <div>
      <h1>Vintage shop</h1>
      <input type="text" placeholder="Search.." />
      <nav>
        <Link to="home">home</Link>
        <Link to="store">store</Link>
        <Link to="cart">cart</Link>
      </nav>
    </div>
  );
}
