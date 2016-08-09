export default {
  // components
  'container-start-stop-button': {
    'start': 'Start',
    'stop': 'Stop',
    'start-message': 'Container {{name}} started!',
    'stop-message': 'Container {{name}} stopped!',
    'already-running-message': 'Container {{name}} was already running!',
    'not-running-message': 'Container {{name}} was not running!',
    'error-message': 'An error occurred!',
  },
  'docker-container-detail': {
    'name': 'Name',
    'status': 'Status',
    'command': 'Command',
    'id': 'Id',
    'image': 'Image',
  },
  'docker-container-list': {
    'id': 'Id',
    'name': 'Name',
    'status': 'Status',
    'command': 'Command',
    'image': 'Image',
  },
  'docker-image-detail': {
    'repository': 'Repository',
    'created': 'Created',
    'size': 'Size',
    'virtual-size': 'Virtual Size',
    'parent-id': 'Parent Id',
    'id': 'Id',
  },
  'docker-image-list': {
    'id': 'Id',
    'repository': 'Repository',
    'created': 'Created',
    'size': 'Size',
  },
  'login-form': {
    'email': 'Email',
    'password': 'Password',
    'login': 'Login',
  },
  'nav-bar': {
    'home': 'Home',
    'containers': 'Containers',
    'images': 'Images',
    'users': 'Users',
    'logout': 'Logout',
  },
  // routes
  'containers': {
    'detail': {
      'container': 'Container',
    },
    'index': {
      'containers': 'Containers',
      'search': 'Search',
      'show-running': 'Show running containers only',
    },
  },
  'images': {
    'detail': {
      'image': 'Image',
    },
    'index': {
      'images': 'Images',
    },
  },
  'users': {
    'index': {
      'users': 'Users',
      'email': 'Email',
    },
  },
};
