import Loadable from 'react-loadable';
import Loading from '../components/loading';

export default ({ loader, loading = Loading }) => Loadable({
  loader,
  loading,
});
