import homeReducer from './home/reducers';
import loaderReducer from './loader/reducers';

export default ({ home, loader }, action) => ({
  home: homeReducer(home, action),
  loader: loaderReducer(loader, action)
});