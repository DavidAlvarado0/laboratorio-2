
import React from 'react';

function UserInfo({ nombre, edad }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

export default UserInfo;
