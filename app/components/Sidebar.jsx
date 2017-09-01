import React from 'react';

const Sidebar = (props) => {

  const deselectCampus = props.deselectCampus;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#" onClick={deselectCampus}>HOME</a>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <a href="#" onClick={deselectStudent}>STUDENTS</a>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
