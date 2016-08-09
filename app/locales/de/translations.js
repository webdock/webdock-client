export default {
  // components
  'container-start-stop-button': {
    'start': 'Starten',
    'stop': 'Stoppen',
    'start-message': 'Container {{name}} gestarted!',
    'stop-message': 'Container {{name}} gestoppt!',
    'already-running-message': 'Container {{name}} war bereits gestarted!',
    'not-running-message': 'Container {{name}} war nicht gestarted!',
    'error-message': 'Ein Fehler ist aufgetreten!',
  },
  'docker-container-detail': {
    'name': 'Name',
    'status': 'Status',
    'command': 'Befehl',
    'id': 'Id',
    'image': 'Image',
  },
  'docker-container-list': {
    'id': 'Id',
    'name': 'Name',
    'status': 'Status',
    'command': 'Befehl',
    'image': 'Image',
  },
  'docker-image-detail': {
    'repository': 'Repository',
    'created': 'Erstellt',
    'size': 'Größe',
    'virtual-size': 'Virtuelle Größe',
    'parent-id': 'Eltern Id',
    'id': 'Id',
  },
  'docker-image-list': {
    'id': 'Id',
    'repository': 'Repository',
    'created': 'Erstellt',
    'size': 'Größe',
  },
  'login-form': {
    'email': 'E-Mail',
    'password': 'Passwort',
    'login': 'Einloggen',
  },
  'nav-bar': {
    'home': 'Home',
    'containers': 'Container',
    'images': 'Images',
    'users': 'Benutzer',
    'logout': 'Ausloggen',
  },
  // routes
  'containers': {
    'detail': {
      'container': 'Container',
    },
    'index': {
      'containers': 'Container',
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
      'users': 'Benutzer',
      'email': 'E-Mail',
    },
  },
};
