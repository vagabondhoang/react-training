// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import withReducer from '../../utils/withReducer';
import userReducer from './reducer';
import { getUsersRequest } from './actions';

type Props = {
  getUsersRequest: () => void,
  data: Object,
};

export class UsersPage extends Component<Props> {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    const { isFetching, users } = this.props.data;
    return (
      <div>
        <h1>Lists of Users</h1>
        {!!isFetching && <p>Loading ...</p>}
        {!isFetching && users.length > 0 && <ul>{users[0].map(user => <li key={user.id}>{user.name}</li>)}</ul>}
      </div>
    );
  }
}

export const mapStateToProps = (state: Object) => ({
  data: state.userReducer,
});

export default withReducer('userReducer', userReducer)(
  connect(
    mapStateToProps,
    { getUsersRequest }
  )(UsersPage)
);
