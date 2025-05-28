# Fortune Cookie Broker

A lightweight K2 SmartObject broker that returns random fortune cookie messages, complete with a slug and timestamp—powered by npm modules!

---

## Features

- Returns a random fortune cookie message.
- Each fortune is provided with:
  - **Slug:** A URL-friendly version of the fortune.
  - **Date:** The exact date and time when the fortune was fetched.
- Powered by community npm modules: [`fortune-cookie`](https://www.npmjs.com/package/fortune-cookie), [`slugify`](https://www.npmjs.com/package/slugify), and [`dayjs`](https://www.npmjs.com/package/dayjs).

---

## Deployment

Most users **do not need to build or modify the code** themselves.

### Option 1: Deploy by File

1. **Copy the built file**  
   The distributable file is already built for you:  
   - Use `dist/index.js` from this repository.
2. **(Optional) Rename**  
   You may rename `index.js` to something more descriptive, such as `fortune-cookie-broker.jssp`:
   ```bash
   mv dist/index.js dist/fortune-cookie-broker.jssp
   ```
3. **Upload in K2**  
   - Navigate to  
     `System > Management > SmartObjects > SmartObjects > JavaScript Service Provider`
   - Click **Create or Update from File** and select your `.jssp` file.

### Option 2: Deploy by URL

1. **Host** the built file (`dist/index.js`) at a public URL of your choice.
2. **Register in K2**  
   - Go to  
     `System > Management > SmartObjects > SmartObjects > JavaScript Service Provider`
   - Use **Create or Update from URL** and provide the direct link to your hosted file.

---

## Building the Broker (For Developers or Custom Builds)

If you need to build the broker yourself (for customization or contributing):

1. **Clone or fork this repository.**
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Build the distributable file:**
    ```bash
    npm run build
    ```
4. The output file will appear in the `dist` folder as `index.js`.

You can now follow the deployment instructions above using your built file.

---

## Configuration

After uploading or registering the broker file,  
**create a service instance** for the Fortune Cookie Broker in your K2 environment.  
You can do this via:
- The K2 Management Site  
- Or the SmartObject Service Tester

No additional configuration is required.

---

## Objects & Methods

### Fortune

| Property | Type   | Description                  |
|----------|--------|-----------------------------|
| fortune  | string | The fortune cookie message.  |
| slug     | string | URL-friendly slug of fortune.|
| date     | string | Date and time generated.     |

#### Methods

| Method | Type | Description           | Inputs | Outputs               |
|--------|------|-----------------------|--------|-----------------------|
| get    | read | Returns a new fortune | none   | fortune, slug, date   |

---

## Usage

Call the **Fortune** object and use the `get` method to retrieve a fresh fortune cookie message, its slug, and the timestamp.

### Example Output

~~~
{
  "fortune": "You will have a pleasant surprise.",
  "slug": "you-will-have-a-pleasant-surprise",
  "date": "2025-05-28 13:14:15"
}
~~~

---

## Development Notes

- **System Name:** `com.demo.fortunecookie`
- **Display Name:** `Fortune Cookie Broker`
- **Description:** Returns random fortune cookies with extra metadata, powered by npm modules!

---

## License

MIT

---

## Credits

- [`fortune-cookie`](https://www.npmjs.com/package/fortune-cookie)
- [`slugify`](https://www.npmjs.com/package/slugify)
- [`dayjs`](https://www.npmjs.com/package/dayjs)
