
function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className='main'>{props.children}</main>
    </div>
  );
}

export default Layout;
