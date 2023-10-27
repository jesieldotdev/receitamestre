import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [receptsList, setReceptsList] = useState<[] | undefined>();

function getRecepts() {
    setLoading(true);

    fetch("https://posts-api-next.vercel.app/api/blog", {
      method: "GET",
    //   mode: "no-cors",
    
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    //   mode: 'opaque'
    })
      .then((response) => response.json())
      .then((json) => console.log(json) 
    //   setReceptsList(json)
      )
      .catch((err) => setError(err));
    setLoading(false);
  }

  useEffect(() => {
    getRecepts()
  }, []);

  return (
    <MyContext.Provider
      value={{ theme, setTheme, receptsList, loading, error }}
    >
      {children}
    </MyContext.Provider>
  );
};
