export function guideFileReader() {
  return {
    name: 'guideFileReader',
    defaultPattern: /\.md$/,
    getDocs: function(fileInfo) {
      return [{
        docType: 'guide',
        title: "",
        content: fileInfo.content
      }];
    }
  };
}