export function designExampleReader() {
  return {
    name: 'designExampleReader',
    getDocs: function(fileInfo) {
      return [{}];
    }
  };
}