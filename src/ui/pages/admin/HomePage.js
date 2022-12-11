import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "src/context/LoadingContext";

export function HomePage() {
  const { loading, setLoading } = useContext(LoadingContext);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(false);
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-3">HomePage</div>
    </>
  );
}
