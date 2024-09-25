import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "../assets/profile.jpg";

class App extends Component {
    state = { displayBio: false };

    handleToggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    };

    render() {
        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Shawn Estes.</p>
                <Title />
                <p>
                    I'm always looking forward to working on meaningful
                    projects.
                </p>
                {this.state.displayBio ? (
                    <div>
                        <p>I'm an electrical engineering student at MSOE</p>
                        <p>My favorite language is C.</p>
                        <p>
                            Besides coding, I also enjoy music and electronics!
                        </p>
                        <button onClick={this.handleToggleDisplayBio}>
                            Show Less
                        </button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.handleToggleDisplayBio}>
                            Read more
                        </button>
                    </div>
                )}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;
