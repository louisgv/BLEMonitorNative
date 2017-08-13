import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

import BLEMonitor from './BLEMonitor';

@autobind
class Model {
  @observable counter = 0;
  @observable total = 0;

	bleMonitor = BLEMonitor()

  constructor(){
    reaction(()=>this.counter, this.increaseTotal);

		bleMonitor.start()

  }

  @action increaseTotal(){
    this.total++;
  }

  @action increase(){
    this.counter++;
  }

  @action decrease(){
    this.counter--;
  }
}

export default new Model();
