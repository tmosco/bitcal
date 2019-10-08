import React from 'react';
import JSON from './data.json';

const AppContext = React.createContext();

const getAccounts = () =>{
    
let accounts = [
    {
      id: 1,
      title: "Account 1",
      slug: "account-1"
    },
    {
      id: 2,
      title: "Account 2",
      slug: "account-2"
    },
    {
      id: 3,
      title: "Account 3",
      slug: "account-3"
    },
    {
      id: 4,
      slug: "account-4",
      title: "Account 4"
    }
  ];

  return new Promise((reslove, reject) =>{
      setTimeout(()=>{
          reslove(accounts);
      },2000);
  });
};


const AppProvider = ({children}) =>{
  let [accounts, setAccounts] = useState([]);
  let [loading, setLoading]= useState(false);
  let [markets, setMarkets] = useState([]);

  useEffect(() => {     //nedded for comonentwillmout to load d accounts on startpage
    loadAccounts();
  },[]);

  function loadAccounts(){
    setLoading(true);
    return getAccounts().then(data => {
      setAccounts(data);
      setLoading(false);
      return data;
    });
  }

  function getMarkets(account_id){
    setLoading(true); // start the loading indicator
    return loadAccounts().then(data => {
      let acc = data.find(x = x.slug === account_id);
      let result = JSON.filter(x => x.account_id === acc.slug);
      setMarkets(result); // data found and filtered . market is passed for account
      setLoading(false);
    });
  }
  return (
    <AppContext.Provider
    value= {{accounts, loading, loadAccounts,markets,getMarkets}}>
    {children}
    </AppContext.Provider>
  );

};




