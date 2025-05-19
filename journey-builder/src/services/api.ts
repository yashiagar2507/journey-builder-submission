export const fetchFormGraph = async () => {
    const response = await fetch('http://localhost:3001/action-blueprint-graph-get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch form graph');
    }
  
    return response.json();
  };
  