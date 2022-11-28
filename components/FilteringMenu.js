
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_VIEW_ICONS = ['list', 'border-all'];
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up'];

import { faList, faSun, faMoon, faBorderAll, faSortNumericDown, faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

const FilteringMenu = ({onChange, filter}) => {

  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable mr-3"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list] == 'list' ? faList : faBorderAll}
        onClick={() =>
        onChange('view', {list: +!filter.view.list })} />
        <FontAwesomeIcon
          className="clickable hoverable"
          size="2x"
          icon={DATE_FILTERING_ICONS[filter.view.list] == 'list' ? faSortNumericDown : faSortNumericUp}
          onClick={() =>
            onChange('date', {asc: +!filter.date.asc })} />
    </div>
  )
}

export default FilteringMenu;