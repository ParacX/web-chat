import React from 'react';

function Header({userName, member, logout}) {
    return(
        <div className="App-header">
        {
          (member.id) ?
          (<h1 className='App-title'>Dobro došao/la {userName}<button className='Logout' onClick={logout}>Odjava</button></h1>) :
          (<h1 className='App-title'>Chat app</h1>)
        }
      </div>
  );
}

export default Header;