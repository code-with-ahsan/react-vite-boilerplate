import { useEffect, useState } from "react"

type RandomUserItem = {
  name: {
    first: string;
    last: string;
  }
}

export const RandomUser = () => {
  const [user, setUser] = useState<RandomUserItem | null>(null);

  useEffect(() => {
    const getUserFromApi = async() => {
      const res = await fetch('https://randomuser.me/api?seed=cwa');
      const jsonObj = await res.json();
      const userObj = jsonObj.results[0];
      setUser(userObj);
    }

    if(!user) {
      getUserFromApi();
    }
  }, [])

  if (!user) {
    return <div data-testid="randomUserText">Loading...</div>;
  }

  return (
    <div data-testid="randomUserText">Random User is {user?.name.first} {user?.name.last}</div>
  )
}
