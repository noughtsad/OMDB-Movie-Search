
# React Movie Search App

A simple movie search and favorites application built with React and Vite, using the OMDb API.


## Features

- Movie Search: Search for movies by title using the OMDb API.
- Favorites: Add or remove movies from your favorites list, which is persisted in local storage.
- Navigation: Switch between Home (search) and Favorites pages.
- Responsive UI: Clean, modern, and responsive design.


## Prerequisites

- Node.js (v16 or higher recommended)
- npm
## Installation

Install my-project with npm

1. Clone the repository
```bash
git clone https://github.com/noughtsad/OMDB-Movie-Search.git
cd .\OMDB-Movie-Search\
```
2. Install dependencies
```bash
npm install
```
3. Set up OMDb API Key:
- The app uses the OMDb API. Replace the placeholder API key in src/services/api.js:
```bash
const API__KEY = "my-api"; // <-- Replace with your OMDb API key
```
- You can get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).
4. Start the development server
```bash
npm run dev
```
## Usage/Examples

- Home Page: Search for movies and view results as cards. Click the heart icon to add/remove a movie from favorites.
- Favorites Page: View your list of favorite movies.
  
<img width="1919" height="955" alt="Screenshot 2025-07-20 123523" src="https://github.com/user-attachments/assets/1cf6af76-9d37-440a-aee6-42c14a27c07c" />
<img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/9f43f017-35e1-43dd-b830-5d9c95e0c32f" />
