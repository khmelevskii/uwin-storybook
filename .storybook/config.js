import { configure } from '@kadira/storybook';
import './styles.scss';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
