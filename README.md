# Overview

The React Load plugin provides auto-instrumentation for react lifecycle methods.
This example uses the plugin and exports them to the console.

The example will show traces belong to the mounting, updating, and umounting flows as defined by React 16.4+.

## Installation

```sh
# from this directory
npm install
```

## Run the example

Run docker

```sh
# from this directory
npm run docker:start
```

Run app

```sh
# from this directory
npm run build
npm start
```

By default, the application runs on port 3000.

Open Zipkin page at <http://localhost:9411/zipkin/> - you should be able to see the spans in zipkin

Open Jaeger page at <http://localhost:16686/> - you should be able to see the spans in Jaeger

## Useful links

- For more information on OpenTelemetry, visit: [opentelemetry.io][otel]
- For more information on OpenTelemetry for Node.js, visit: [@opentelemetry/sdk-trace-node][otel-node]

## LICENSE

Apache 2.0 - See [LICENSE][license-url] for more information.

[license-url]: https://github.com/open-telemetry/opentelemetry-js-contrib/blob/main/LICENSE
[otel]: https://opentelemetry.io/
[otel-node]: https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-node
