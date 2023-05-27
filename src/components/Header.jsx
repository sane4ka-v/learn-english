import './../App.css';
let date = '1 Января'
const Header = () => {
  return (
    <header className='App-header'>
      <h2 className='date'>{date}</h2>
      <h1>Добрый вечер :0 Что вы хотите сделать?</h1>
    </header>
    );
}

export default Header;