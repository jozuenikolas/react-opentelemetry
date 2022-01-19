import React from 'react';
import { BaseOpenTelemetryComponent } from '@opentelemetry/plugin-react-load';

class About extends BaseOpenTelemetryComponent{

    render() {
        return (
            <div>
                <h2>About</h2>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </div>
        )
    }

}

export default About;
