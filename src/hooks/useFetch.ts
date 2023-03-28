import React, { useCallback, useState } from 'react';

function useFetch(URI: string) {
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (REQ_INIT: RequestInit) => {
      setIsLoading(true);
      const result = await fetch(URI, REQ_INIT);
      const jsonResponse = await result.json();
      setIsLoading(false);
      return jsonResponse;
    },
    [URI]
  );

  return { isLoading, execute };
}

export default useFetch;
