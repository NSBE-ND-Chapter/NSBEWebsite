import { React, Component } from "react";
import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                <p>
                    <h3> Our Vision:  </h3>

                    “We envision a world in which
                    engineering is a mainstream word in homes
                    and communities of color, and all Black
                    students can envision themselves as
                    engineers. In this world, Blacks exceed parity
                    in entering engineering fields, earning
                    degrees, and succeeding professionally.”

                    <h3> Our Mission: </h3>

                    "to increase the number of
                    culturally responsible Black Engineers
                    who excel academically, succeed
                    professionally and positively impact the community."


                    <h3> What does NSBE offer you? </h3>
                    NSBE offers leadership training, professional development activities,
                    mentoring, career placement services, community service opportunities
                    and more.
                </p>
            </div>
        );
    }
}