import React, { Component } from 'react';

class PostingForm extends Component {
  render() {
    return (
      <div>
        <form>
          <button
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary">
            Save
          </button>
          &nbsp;
          <button
            onClick={e => this.handleCancel()}
            className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    );
  }

  handleCancel() {}
  handleFormSubmit() {}
}

export default PostingForm;