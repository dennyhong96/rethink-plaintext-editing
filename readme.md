### Notes / Room for Improvements

- To start the project, download and run `npm install && npm run dev`
- For persisting files, I could've done it with localstorage. I've gone with a bit more 'realistic' approach to make the in-memory generated files in files.js actual files in file system (please see \_files directory). Then on user input, uses next.js's api route to update the files in file system.
- For code editor, only handling .js and .css for now. Could handle more file types.
- On user input in a file, while making a request to api route to update the file in file system, could also make an update to the 'lastModified' time in the file list sidebar.
- If given more time I would re-factor the file list + individual file pieces of state into a context to reduce prop drilling.

# Rethink Plaintext Editing

This is our frontend coding challenge. It gives us a chance to see your abilities and how you approach problems. It is designed to give you unlimited creative freedom as you develop a solution. Feel free to use any packages/tools/etc. you'd like to edit text as elegantly as possible. There are a variety of different file types to experiment with as you see fit.

To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm run dev`
- Open `localhost:3000` in your browser
- Enjoy

Once complete, please email us a link to your forked repo with clean, tested code. We will use Chrome to run it.

- Rethink Engineering
