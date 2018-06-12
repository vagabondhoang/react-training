import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withReducer from '../../utils/withReducer';
import messageReducer from './reducer';
import InputPreview from '../../components/InputPreview/index';
import setMessage from './actions';
import Button from '../../styles';

type Props = {
  message: string,
  setMessage: () => void,
};

export class AboutPage extends React.Component<Props> {
  handleChange = e => {
    this.props.setMessage(e);
  };

  render() {
    const { message } = this.props;

    return (
      <React.Fragment>
        <InputPreview value={message} onChange={this.handleChange} />
        <p>{message}</p>
        <Link to="/">
          <Button>Go to home page</Button>
        </Link>
      </React.Fragment>
    );
  }
}
export const mapStateToProps = state => ({
  message: state.messageReducer,
});

export default withReducer('messageReducer', messageReducer)(
  connect(
    mapStateToProps,
    { setMessage }
  )(AboutPage)
);
