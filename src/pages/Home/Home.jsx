import './Home.css'

function Home() {
    return (
        <div className="profile-container">
          <div className="profile-header">
            <img 
              src="src/assets/jonus.jpg" 
              alt="Profile Avatar" 
              className="profile-avatar"
            />
            <h2 className="profile-name">Jonas</h2>
            <p className="profile-bio">A 25-year-old programmer who loves gaming and food!</p>
          </div>
          
          <div className="profile-details">
            <h3>Details</h3>
            <p><strong>Age:</strong> 25</p>
            <p><strong>Occupation:</strong> Programmer</p>
            <p><strong>Hobbies:</strong> Gaming, Cooking</p>
          </div>
        </div>
      );
    };


export default Home;
