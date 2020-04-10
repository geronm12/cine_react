import React from 'react';

//Componente que recibirá el título que debe renderizar por las props


export const Title = ({children}) => ( 
<h1 className="title">{children}</h1>
)