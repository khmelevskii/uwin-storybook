import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Flex from '../components/Flex';

storiesOf('Flex', module)
  .add('default view', () => (
    <Flex component="strong">
      test
    </Flex>
  )
);
