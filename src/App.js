import React from 'react';
import Beer from './Beer';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Beer />
      <div className="App"></div>
    </QueryClientProvider>
  );
};

export default App;
