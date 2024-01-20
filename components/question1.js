import React from 'react'

import PropTypes from 'prop-types'

const Question1 = (props) => {
  return (
    <>
      <div className="question1-container">
        <span className="question1-text heading3">{props.Question}</span>
        <span className="bodySmall">{props.Answer}</span>
      </div>
      <style jsx>
        {`
          .question1-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question1-text {
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Question1.defaultProps = {
  Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  Question: 'What types of cars do you sell?',
}

Question1.propTypes = {
  Answer: PropTypes.string,
  Question: PropTypes.string,
}

export default Question1
