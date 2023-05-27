import './../App.css';

const SideBar = () => {
    return (
      <div className='App-side-bar'>
        <div className='link-to-page'>
            <h1>90 seconds</h1>
            <a>(English)</a>
        </div>
        <div className='link-to-page'>
            <img src='C:\react-app-learn-english\learn-english\images\image 5.png' />
            <a>Dictionari</a>
        </div>
        <div className='link-to-page'>
            <img src='C:\react-app-learn-english\learn-english\images\image 6.png' />
            <a>Account</a>
        </div>
        <div className='link-to-page'>
            <img src='C:\react-app-learn-english\learn-english\images\image 7.png' />
            <a>Search by tags/date</a>
        </div>
      </div>
      );
  }
  
  export default SideBar;