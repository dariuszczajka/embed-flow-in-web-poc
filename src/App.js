import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='container'></div>
        <Helmet>
        <script type='text/javascript' src="https://embeddedflow-developer-edition.ap24.force.com/lightning/lightning.out.js"></script>
        <script type='text/javascript'>
        function init(){
            $Lightning.use("c:embeddedFlowApp",    // name of the Lightning app
                function() {                  // Callback once framework and app loaded
                    $Lightning.createComponent(
                        "c:embeddedFlow", // top-level component of your app
                        { },                  // attributes to set on the component when created
                        "container",   // the DOM location to insert the component
                        function(cmp) { // callback when component is created and active on the page
                        }
                    );
                },
                'https://enxoo-7c-dev-ed.develop.my.site.com/help' // Experience Cloud site endpoint
            );
            }
        </script>
        </Helmet>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
