import { calendarRendering } from './scripts/calendar-visualization';
import {
  createDates,
  renderDates,
  showCurrentMonthAndYear,
  renderNextWeek,
  renderPreviousWeek,
  todayButtonFunction,
} from './scripts/navigation';
import { generateNumbersRange, getTimesBlocks } from './scripts/main';
import { addButton } from './scripts/popup';
import { arrOfEvents, getFromLocalStorage, onStorageChange } from './scripts/storage';
import { redLine } from './scripts/red-line';
import { saveEvent } from './scripts/save-event';
import { activeEventOnclick } from './scripts/edit-event';
import { deleteButtonOnclick } from './scripts/delete-event';

import './index.scss';
