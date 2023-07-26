import { Head as RuntimeHead } from '$fresh/runtime.ts';

export default function Head() {
  return (
    <RuntimeHead>
      <link rel="stylesheet" href="/styles.css"/>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>Mini Fresh App</title>
    </RuntimeHead>
  );
}
