import React, {useState, useEffect} from 'react';
import './style.scss';
import Dropdown from './Dropdown';
import Table from './Table/index';
import {connect} from 'react-redux';
import {setUsers} from '../../redux/list/actions';

const LandingPage = ({setUsers, users}) => {
  const [perPage, handleQuantity] = useState(5);
  const [currentPage, handlePage] = useState(1);
  useEffect(() => {
    const getUsers = async () => {
      try {
        await setUsers();
      } catch (e) {
        throw e.message;
      }
    };
    getUsers();
  }, [setUsers]);

  const changeQuantity = itemsPerPage => {
    handleQuantity(itemsPerPage);
    handlePage(1);
  };

  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-header">
          <Dropdown handlePage={changeQuantity} perPage={perPage} />
        </div>
        {!users.length ? (
          <i className="fa fa-spinner fa-spin" />
        ) : (
          <Table
            handlePage={handlePage}
            currentPage={currentPage}
            perPage={perPage}
            users={users}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({list}) => ({
  users: list.users
});
export default connect(
  mapStateToProps,
  {setUsers}
)(LandingPage);
