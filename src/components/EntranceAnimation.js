import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components';

const colors = [
  '#378086',
  '#6AACB0',
  '#0C1F2E',
  '#0C1F2E',
  '#378086',
  '#6AACB0',
  '#0C1F2E',
];

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  flex-basis: ${(props) => props.width}%;
  background: ${(props) => props.bgColor};
`;

const Content = styled.div`
  background: ${(props) => props.bgColor};
  flex-basis: 100%;
`;

class EntranceAnimation extends Component {
  render() {
    const {
      children,
      startAnimation,
    } = this.props;

    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
        ]}
        styles={(prevStyles) => [
          { width: spring(startAnimation ? 0 : 100) },
          { width: spring(prevStyles[0].width) },
          { width: spring(prevStyles[1].width) },
          { width: spring(prevStyles[2].width) },
          { width: spring(prevStyles[3].width) },
          { width: spring(prevStyles[4].width) },
        ]}
      >
        {(styles) => (
          <Wrapper>
            <Container bgColor={colors[0]} width={styles[0].width} />
            <Container bgColor={colors[1]} width={styles[1].width} />
            <Container bgColor={colors[2]} width={styles[2].width} />
            <Container bgColor={colors[3]} width={styles[3].width} />
            <Container bgColor={colors[4]} width={styles[4].width} />
            <Container bgColor={colors[5]} width={styles[5].width} />
            <Content bgColor={colors[6]}>
              {styles[3].width < 25 && children}
            </Content>
          </Wrapper>
        )}
      </StaggeredMotion>
    );
  }
}

export default EntranceAnimation;