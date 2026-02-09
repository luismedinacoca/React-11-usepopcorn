# usePopcorn

A React application for movie discovery and personal rating management. Search movies using the OMDB API, view detailed information (plot, cast, director, ratings), rate them with an interactive star system, and maintain a persistent watched list stored in the browser's local storage.

## Features

- **Movie Search** — Query the OMDB API with real-time results (minimum 3 characters)
- **Movie Details** — View comprehensive info including plot, cast, director, genre, and IMDb rating
- **Star Rating System** — Configurable, reusable star component with hover effects and PropTypes validation
- **Watched List** — Track watched movies with personal ratings and aggregate statistics (avg IMDb rating, avg user rating, avg runtime)
- **Local Storage Persistence** — Watched list data persists across browser sessions
- **Keyboard Navigation** — Press `Escape` to close movie details, `Enter` to focus the search bar
- **Collapsible Panels** — Toggle visibility of search results and watched list sections
- **Request Cancellation** — Uses `AbortController` to cancel in-flight API requests on new searches
- **Dynamic Document Title** — Page title updates to reflect the currently viewed movie

## Key Concepts / Architecture

### Component Composition

The application follows React composition patterns with clear component roles:

- **Structural Components** — `Navbar`, `Main`, `Box` provide layout and accept `children` props
- **Presentational Components** — `Movie`, `WatchedMovie`, `WatchedSummary`, `Loader`, `ErrorMessage` render UI without managing state
- **Container Components** — `App`, `MovieDetails` manage state and data flow

### Custom Hooks

Three custom hooks encapsulate reusable logic:

| Hook | Purpose |
|------|---------|
| `useMovies` | Fetches movies from OMDB API with loading/error states and request cancellation |
| `useLocalStorageState` | Syncs React state with `localStorage` for persistence |
| `useKey` | Registers global keyboard event listeners with automatic cleanup |

### State Management

- Local state with `useState` for UI and data
- `useRef` for mutable values that don't trigger re-renders (e.g., rating decision counter)
- `useEffect` for side effects: API calls, event listeners, document title updates, localStorage sync

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library |
| React DOM | 19.2.0 | DOM rendering |
| Vite | 7.2.4 | Build tool and dev server |
| PropTypes | 15.8.1 | Runtime prop validation |
| ESLint | 9.39.1 | Code linting |
| OMDB API | — | Movie data source |

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd 11-usepopcorn
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser.

## Usage

1. **Search** — Type a movie title in the search bar (minimum 3 characters to trigger a search)
2. **Browse** — View matching results with posters and release year
3. **View Details** — Click a movie to see its full details (plot, cast, director, genre, IMDb rating)
4. **Rate** — Use the 10-star rating widget to rate a movie
5. **Add to Watched** — After rating, click "Add to list" to save it
6. **Manage List** — View your watched movies with stats; click the delete button to remove entries
7. **Keyboard Shortcuts** — Press `Escape` to close details, `Enter` to focus the search input

## Project Structure

```
11-usepopcorn/
├── docs/
│   └── LECTURE_STEPS.md          # Course lecture notes
├── img/                          # Lecture reference images
├── src/
│   ├── components/
│   │   ├── Box.jsx               # Collapsible container (children pattern)
│   │   ├── ErrorMessage.jsx      # Error display
│   │   ├── ListBox.jsx           # Legacy list container
│   │   ├── Loader.jsx            # Loading indicator
│   │   ├── Logo.jsx              # App logo
│   │   ├── Main.jsx              # Main layout wrapper
│   │   ├── Movie.jsx             # Single movie list item
│   │   ├── MovieDetails.jsx      # Movie detail view with rating
│   │   ├── MovieList.jsx         # Search results list
│   │   ├── Navbar.jsx            # Navigation bar (composition)
│   │   ├── NumResult.jsx         # Results counter
│   │   ├── Search.jsx            # Search input with keyboard support
│   │   ├── Test.jsx              # Development testing component
│   │   ├── WatchedBox.jsx        # Legacy watched container
│   │   ├── WatchedMovie.jsx      # Single watched movie item
│   │   ├── WatchedMovieList.jsx  # Watched movies list
│   │   └── WatchedSummary.jsx    # Watched stats summary
│   ├── Hooks/
│   │   ├── useKey.js             # Keyboard event listener hook
│   │   ├── useLocalStorageState.js # localStorage sync hook
│   │   └── useMovies.js          # Movie fetching hook
│   ├── App.jsx                   # Root application component
│   ├── App-v01.jsx               # Earlier iteration (reference)
│   ├── App-v02.jsx               # Earlier iteration (reference)
│   ├── App-v03.jsx               # Earlier iteration (reference)
│   ├── Star.jsx                  # Individual star SVG component
│   ├── StarRating.jsx            # Star rating system (reusable)
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── eslint.config.js              # ESLint flat config
├── package.json
└── package-lock.json
```

## Configuration

### API Key

The OMDB API key is defined in `src/Hooks/useMovies.js` and `src/components/MovieDetails.jsx`:

```js
const KEY = "f84fc31d";
```

To use your own key, register at [omdbapi.com](https://www.omdbapi.com/apikey.aspx) and replace the value.

### CSS Custom Properties

Global theme variables are defined in `src/index.css`:

```css
:root {
  --color-primary: #6741d9;
  --color-primary-light: #7950f2;
  --color-text: #dee2e6;
  --color-text-dark: #adb5bd;
  --color-background-100: #343a40;
  --color-background-500: #2b3035;
  --color-background-900: #212529;
  --color-red: #fa5252;
  --color-red-dark: #e03131;
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |

## Testing and Quality

- **ESLint** — Flat config with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **PropTypes** — Runtime prop validation on the `StarRating` component
- **AbortController** — Prevents race conditions by cancelling stale API requests
- **Error Handling** — Graceful error states for failed API calls and empty search results
- **Loading States** — Visual feedback during data fetching

## Acknowledgments

This project is part of Jonas Schmedtmann's [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). Built as a hands-on exercise covering component composition, custom hooks, effects, refs, and data fetching patterns in React.

## License

This project is for educational purposes and is not licensed for commercial use.
