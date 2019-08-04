import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import Row from './Row';
import './style.scss';
import {PaginationItem, PaginationLink, Pagination} from 'reactstrap';

const TableComponent = ({users, perPage, currentPage, handlePage}) => {
  const [list, handleData] = useState(users);
  const [pageNumbers, changePageNumbers] = useState([]);

  useEffect(() => {
    const pageNumbers = [];
    let activeList = [...users];
    for (let i = activeList.length; i > 0; i -= perPage) {
      pageNumbers.push(i);
    }
    activeList = activeList.splice((currentPage - 1) * perPage, perPage);
    changePageNumbers(pageNumbers);
    handleData(activeList);
  }, [perPage, currentPage, users]);

  const handlePaginationClick = e => {
    let num = Number(e.target.innerText);
    handlePage(num);
  };
  const renderPagination = () => {
    if (currentPage <= 4) {
      return pageNumbers.slice(0, 5).map((item, i) => {
        let index = pageNumbers.indexOf(item);
        return (
          <PaginationItem key={i} active={index + 1 === currentPage}>
            <PaginationLink
              id={index + 1}
              key={index + 1}
              onClick={e => handlePaginationClick(e)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        );
      });
    } else {
      let firstPage = currentPage - 3;
      let lastPage = currentPage + 3;
      return pageNumbers.slice(firstPage, lastPage).map(item => {
        let index = pageNumbers.indexOf(item);
        return (
          <PaginationItem active={index + 1 === currentPage}>
            <PaginationLink
              id={index + 1}
              key={index + 1}
              onClick={e => handlePaginationClick(e)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        );
      });
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (pageNumbers.length !== currentPage) {
      handlePage(currentPage + 1);
    }
  };

  return (
    <>
      <Table>
        {list.length ? (
          <>
            <thead className="table-header">
              <tr>
                <th className="first">A/Z</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {list.map(data => (
                <Row key={data.id} data={data} />
              ))}
            </tbody>
          </>
        ) : (
          <h4>No matching results found</h4>
        )}
      </Table>
      {pageNumbers.length > 1 && (
        <Pagination
          className="d-flex justify-content-center"
          style={{marginTop: '10px', display: 'flex'}}
        >
          <PaginationItem>
            <PaginationLink previous onClick={() => previousPage()} />
          </PaginationItem>
          {renderPagination()}
          <PaginationItem>
            <PaginationLink next onClick={() => nextPage()} />
          </PaginationItem>
        </Pagination>
      )}
    </>
  );
};

export default TableComponent;
