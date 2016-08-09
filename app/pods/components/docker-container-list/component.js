import Ember from 'ember';

export default Ember.Component.extend({
  dockerContainers: [],
  searchFilter: null,
  showRunning: false,

  runningContainers: Ember.computed('dockerContainers.@each.isRunning', 'showRunning', function() {
    const dockerContainers = this.get('dockerContainers');
    if (this.get('showRunning')) {
      return dockerContainers.filterBy('isRunning', true);
    }
    return dockerContainers;
  }),

  filteredContainers: Ember.computed('runningContainers.@each.{name,id}', 'searchFilter', function () {
    const searchFilter = this.get('searchFilter');
    const dockerContainers = this.get('runningContainers');
    if (Ember.isEmpty(searchFilter)) {
      return dockerContainers;
    }

    const lowerFilter = searchFilter.toLowerCase();
    return dockerContainers.filter(container => {
      const { name, id } = container.getProperties('name', 'id');
      if (name.toLowerCase().indexOf(lowerFilter) !== -1) {
        return true;
      }
      return id.indexOf(lowerFilter) !== -1;
    });
  }),

  containerSorting: ['status:desc', 'name'],
  sortedContainers: Ember.computed.sort('filteredContainers', 'containerSorting'),
});
