import "./App.css";

function ProfileCard({ name, imageUrl, description }) {
    return (
        <div className="profile-card">
            <img
                src={imageUrl}
                alt={name}
                className="profile-image"
            />

            <h2>{name}</h2>

            <p>{description}</p>
        </div>
    );
}

function App() {
    return (
        <div className="app">
            <h1>My Profile</h1>

            <ProfileCard
                name="Kushal Shah"
                imageUrl="https://i.pravatar.cc/300?img=12"
                description="MCA student interested in full-stack development, React, JavaScript, and modern web technologies."
            />
        </div>
    );
}

export default App;