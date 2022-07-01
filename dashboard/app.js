const Header = () => {
    return(
        <div className = "header">
            <h1> Delta Airlines Analytics Dashboard </h1>
        </div>

    )     
};

const Reviews = () => {
    return(
        <div className = "container">
            <h2>Reviews</h2>
            <p className = "para">"I love to fly Delta Business class because the service is amazing everytime.  Recently, my Mother and I travelled to TLV. The staff members were friendly and went above and beyond to ensure that our flight was comfortable and relaxing. I find the meals to be delicious and we always get a good choice of entrees. They also have a great selection of wines to complement the meals.</p>
        </div>
    )
};

const AverageRating = () => {
    return(
        <div className = "container2">
            <h2>Average Customer Rating</h2>
            <ul className = "list2">
                <li>4.92</li>
            </ul>
        </div>
    )
};

const WebsiteVisitors = () => {
    return(
        <div className = "container3">
            <h3>Most Popular Departures</h3>
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
                <li>Flight Specials</li>
                <br></br>
                <br></br>
                <li>Reviews</li>
                <br></br>
                <br></br>
                <li>Customers</li>
                <br></br>
                <br></br>
                <li>Followers</li>
                <br></br>
                <br></br>
                <li>Special Deals</li>
            </ul>
        </div>
    )
};

const Analyis = () => {
    return(
        <div className = "container4">
            <h2>Flight Analysis</h2>
            <ul className = "list2">
                <li>Departures: 120</li>
                <br></br>
                <li>Delays: 17</li>
                <br></br>
                <li>Cancellations: 26</li>
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