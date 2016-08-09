import Ember from 'ember';

export default Ember.Component.extend({
  dockerContainers: [],
  searchFilter: null,

  filteredContainers: Ember.computed('dockerContainers', 'searchFilter', function () {
    const searchFilter = this.get('searchFilter');
    const dockerContainers = this.get('dockerContainers');
    if (Ember.isEmpty(searchFilter)) {
      return dockerContainers;
    }

    return dockerContainers.filter(container => {
      const { name, id } = container.getProperties('name', 'id');
      if (name.toLowerCase().indexOf(searchFilter) !== -1) {
        return true;
      }
      return id.indexOf(searchFilter) !== -1;
    });
  }),

  containerSorting: ['status:desc', 'name'],
  sortedContainers: Ember.computed.sort('filteredContainers', 'containerSorting'),
});
