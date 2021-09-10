import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface LoadingProps {}

function Loading<FC>(props: LoadingProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count === 100) setCount(count + 1);
    }, 100);
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="counter-state">{count}</div>
    </div>
  );
}

export default Loading;
