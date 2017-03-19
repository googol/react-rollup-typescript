import * as React from 'react';
import * as ReactDom from 'react-dom';

interface HelloProps {
    compiler: string;
    framework: string;
}

const Hello = (props: HelloProps) => (<h1>Hello from {props.compiler} and {props.framework}!</h1>);

ReactDom.render(
    <Hello compiler="typescript" framework="react" />,
    document.getElementById('app'),
);
