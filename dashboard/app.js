const Header = () => {
    return(
        <div className = "header">
            <h1> Vinsanity Dashboard </h1>
        </div>

    )     
};

const Reviews = () => {
    return(
        <div className = "container">
            <h2>Reviews</h2>
            <p className = "para">"Vince Carter is one of the most amazing, high-flying basketball player ever!!"</p>
        </div>
    )
};

const AverageRating = () => {
    return(
        <div className = "container2">
            <h2>2K Player Rating</h2>
            <ul className = "list2">
                <li>4.92</li>
            </ul>
        </div>
    )
};

const WebsiteVisitors = () => {
    return(
        <div className = "container3">
            <h3>Highest Rated Dunks In The History Of The NBA</h3><br></br>
            <div>
            <h4 className="dunks">
            <ul>
                <li>Windmill</li>
                <li>360</li>
            </ul>
            </h4>
            </div>
            <img src="https://i.cbc.ca/1.2840833.1416425051!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/carter-vince-1999-620.jpg"></img>

        </div>
    )
};

const Menu = () => {
    return(
        <div className = "menubar">
            <h2>Menu</h2>
            <ul className = "list">
                <li>Dashboard</li>
                <br></br>
                <br></br>
                <li>Teams</li>
                <br></br>
                <br></br>
                <li>2000 Dunk Contest</li>
                <br></br>
                <br></br>
                <li>Game Winners</li>
                <br></br>
                <br></br>
                <li>All-Star Games</li>
                <br></br>
                <br></br>
                <li>Top 10 Plays</li>
            </ul>
        </div>
    )
};

const Analyis = () => {
    return(
        <div className = "container4">
            <h2>Career Stats</h2>
            <ul className = "list2">
                <li>Points: --</li>
                <br></br>
                <li>Assist: --</li>
                <br></br>
                <li>Rebounds: --</li>
            </ul>
        </div>
    )
}

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Reviews />
                <AverageRating />
                <WebsiteVisitors />
                <Analyis />
                <Menu />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'))