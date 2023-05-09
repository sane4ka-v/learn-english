import './../App.css';
const items = [1, 2, 3];

const Header = () => {
  return (
    <header className='App-header'>
        {items.map((item, index) => {
          return <div className='square-red' id={index}></div>
        })} 
    </header>
    );
}

export default Header;