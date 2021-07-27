import { urlRoot } from './consts';

export default slug =>
  slug == null ? null : `${urlRoot}/${slug.replace(/^\//, '')}`;
