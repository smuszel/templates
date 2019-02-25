import { PLATFORM } from 'aurelia-framework';
import './main.css';

export const configure = async aurelia => {
    aurelia.use.defaultBindingLanguage().defaultResources();
    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('app'));
}