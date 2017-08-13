import {observer} from 'mobx-react/native';

import View from './view';

export const Counter = observer(View);

export {default as CounterModel} from './model';
