# usePopcorn

A modern React application for movie discovery and rating. Search for movies, view detailed information, and maintain a personal watched list with ratings.

## Features

- **Movie Search**: Search through a vast movie database using the OMDB API
- **Movie Details**: View comprehensive movie information including plot, cast, director, and ratings
- **Interactive Rating**: Rate movies using an intuitive star rating system
- **Watched List**: Track movies you've watched with personal ratings
- **Responsive Design**: Clean, modern UI that works across devices
- **Component Architecture**: Well-structured React components following composition patterns

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and development server
- **OMDB API** - Movie data source
- **CSS** - Styling
- **ESLint** - Code linting

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

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

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Search Movies**: Enter a movie title in the search bar (minimum 3 characters)
2. **Browse Results**: View the list of matching movies with posters and basic info
3. **View Details**: Click on any movie to see detailed information
4. **Rate Movies**: Use the star rating system to rate movies you haven't watched yet
5. **Add to Watched**: Rate a movie and add it to your watched list
6. **Manage Watched List**: View your watched movies with personal ratings and statistics

## Project Structure

```
src/
├── components/                 # Reusable React components
│   ├── Box.jsx                 # Layout container component
│   ├── ErrorMessage.jsx        # Error display component
│   ├── ListBox.jsx             # List container component
│   ├── Loader.jsx              # Loading spinner component
│   ├── Logo.jsx                # Application logo component
│   ├── Main.jsx                # Main layout component
│   ├── Movie.jsx               # Individual movie item component
│   ├── MovieDetails.jsx        # Movie details view component
│   ├── MovieList.jsx           # Movie list component
│   ├── Navbar.jsx              # Navigation bar component
│   ├── NumResult.jsx           # Results counter component
│   ├── Search.jsx              # Search input component
│   ├── WatchedBox.jsx          # Watched movies container
│   ├── WatchedMovie.jsx        # Watched movie item component
│   ├── WatchedMovieList.jsx    # Watched movies list component
│   └── WatchedSummary.jsx      # Watched movies statistics component
├── App.jsx                     # Main application component
├── Star.jsx                    # Individual star component
├── StarRating.jsx              # Star rating system component
├── index.css                   # Global styles
└── main.jsx                    # Application entry point
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Key Concepts

### Component Composition
The application demonstrates React component composition patterns, with components organized into:
- **Presentational Components**: Stateless components focused on UI rendering
- **Container Components**: Components that manage state and data flow
- **Structural Components**: Layout and composition components

### State Management
- Local state management using React's `useState` hook
- Props drilling for state distribution
- Effect hooks for side effects (API calls, event listeners)

### Custom Hooks
- Reusable star rating component with hover effects
- Keyboard navigation support (Escape key to close details)

## Testing & Quality

- ESLint configuration for code quality and consistency
- PropTypes for component prop validation
- Error boundaries for graceful error handling
- Loading states for better user experience

## License

This project is part of a learning course and is not licensed for commercial use.
