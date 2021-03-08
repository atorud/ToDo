import React from 'react';
import {Container} from 'react-bootstrap'
import './style.css';


function createData(id, name, check, goods, bonus) {
  return { id, name, check, goods, bonus };
}

const rows = [
  createData(1,'Sitora Nigorova', 7015000, 84, 418000),
  createData(2,'Jaxongir Fozilov', 32450000, 45,315200),
  createData(3,'Ivan Ivanovich', 27000000, 61,264000),
  createData(4,'Maftuna Fozilova', 32450000, 45,219000),
  createData(5,'Ulugbek Ulugbekov', 27000000, 21,173500),
];

export default function Table() {

  return (
    <Container>
      <table style ={{width:'900px'}}>
        <thead>
          <tr>
            <td align="center">Рейтинг</td>
            <td>Фио Сотрудника</td>
            <td>Общая сумма чеков</td>
            <td>кол-во товаров</td>
            <td>Размер начисленного бонуса</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td  align="center">
                {row.id}
              </td>
              <td align="left">{row.name}</td>
              <td align="right">{row.check}</td>
              <td align="right">{row.goods}</td>
              <td align="right">{row.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}