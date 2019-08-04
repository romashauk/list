import React from 'react';

const Row = ({data}) => {
  const trimComment = text => {
    if (text.length < 45) return text;
    return text.slice(0, 45) + '...';
  };
  const {name, surname, desc} = data;
  return (
    <tr>
      <td className="first-body">
        <div>
          {data.name[0]}
          <span>{data.surname[0]}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{trimComment(desc)}</td>
    </tr>
  );
};

export default Row;
