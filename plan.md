# Problem statement

- Provide several location/postcode features via CLI.

# Supported commands

- `alive`
- `set home <postcode>`
- `find distance <distance>`
- `find directions from <a> to <b>`
- `set distance to <units>`

# App-wide problems to solve

- Need some way of reading user input
  - Maybe use built-in `readline` Node.js module
  - Create a `getCommandFromUser`
- Mapping user input to a supported command (see [supported commands](#Supported-commands))
  - Maybe simple switch case + text comparison (or RegEx for flexibility)
- Showing output to the user (with and without requiring user input)
- Handling the case where user input is invalid/malformed and cannot be mapped to a supported command.
- Some app state required

# Components

- Main script

```js
// Greeting/opening message

while (true) {
  // Get user input e.g. "Please enter a command..."
  // If user input is `quit`, break out of the loop.
  // If user input is invalid:
  //    Show error message.
  // Otherwise:
  //    Parse command (including any args) from user input
  //    Get handler for command
  //    Try:
  //      Invoke handler with args
  //      Display any string returned by handler
  //    Catch any error:
  //      Log error
}

// Goodbye/closing message?
```

- General handler

```ts
// prettier-ignore
type Handler<T> = (options: T) => {
  message: string
};
```

- `setHome` handler

```ts
interface SetHomeOptions {
  postcode: string;
}

// Send GET request to postcodes.io API
// If valid response:
//    Return { message: "Home location set to <name>" }
// If invalid response:
//    Raise error (e.g. invalid postcode, etc)
```
