import bigLogo from './looper.png';

function Header(props) {
    const {color} = props;

    return (
  
      <div className="App">
        <header class={color}>
          <div class="container">
            <img src={bigLogo} alt="logo" class="logo" />
            <nav>
              <ul>
                <li><a class="current" href="index.html">Timer</a></li>
                <li><a href="clock.html">Hourly</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
  
    );
  }

  export default Header;