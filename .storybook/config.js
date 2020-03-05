import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

// initialize docs
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// import story files
configure(require.context('../src/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/), module);

// load global decorators
addDecorator(withKnobs);
