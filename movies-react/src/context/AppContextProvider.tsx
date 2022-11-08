import React from "react";

export const AppContext = React.createContext<AppContext>({
  totalPages: 1,
  currentPage: 1,
  currentGenre: 0,
  setPage: () => {},
  setGenre: () => {},
  setTotalPages: () => {},
});

export default function AppContextProvider({
  children,
}: {
  children: unknown;
}) {
  const [page, setPage] = React.useState(1);
  const [genre, setGenre] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);

  return (
    <AppContext.Provider
      value={{
        currentPage: page,
        setPage: setPage,
        setGenre: setGenre,
        currentGenre: genre,
        totalPages: totalPages,
        setTotalPages: setTotalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
