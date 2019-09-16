import React from "react";
import Button from "@twitter/feather-component-button-react";
import Form from "@twitter/feather-component-form-react";
import { FormField, FormTextarea } from "@twitter/feather-component-form-react";
import "@twitter/feather-component-form/dist/css/feather-component-form.css";
import "./TweetWriter.css";

class TweetWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetValue: ""
    };
  }

  _handleTextareaChange = e => {
    this.setState({
      tweetValue: e.currentTarget.value
    });
  };

  render() {
    const { tweetValue } = this.state;
    const { onTweet, forwardRef } = this.props;

    return (
      <div className="TweetWriter">
        <Form className="TweetWriter--form">
          <FormField>
            <FormField.Label>Tweet</FormField.Label>
            <FormTextarea
              onChange={this._handleTextareaChange}
              otherProps={{
                ref: forwardRef
              }}
              value={tweetValue}
            />
            <FormField.CharacterCounter
              length={tweetValue.length}
              maxLength={280}
            />
          </FormField>
        </Form>
        <Button onClick={() => onTweet(tweetValue)}>Tweet</Button>
      </div>
    );
  }
}

export default TweetWriter;
