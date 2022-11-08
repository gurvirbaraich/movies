declare type AppContext = {
  totalPages: number;
  currentPage: number;
  currentGenre: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setGenre: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};
