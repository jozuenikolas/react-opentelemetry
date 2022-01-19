import React from 'react';
import { BaseOpenTelemetryComponent } from '@opentelemetry/plugin-react-load';

class Topics extends BaseOpenTelemetryComponent{
    render() {
        return (
            <div>
                <h2>Topics</h2>
                Duis non nisi fringilla, malesuada.
            </div>
        )
    }
}

export default Topics;
