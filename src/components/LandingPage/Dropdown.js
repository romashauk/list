import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';

const Dropdowns = ({perPage, handlePage}) => {
  return (
    <div className="landing-dropdowns_container">
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="nav-link" caret>
          Per page
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handlePage(3)} active={perPage === 3}>
            3
          </DropdownItem>
          <DropdownItem onClick={() => handlePage(5)} active={perPage === 5}>
            5
          </DropdownItem>
          <DropdownItem onClick={() => handlePage(10)} active={perPage === 10}>
            10
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default Dropdowns;
