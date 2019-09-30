export function guideFileReader() {
  const extractTitle = (doc: any) => {
    const matchesArray = doc.content.match(/^\#(.*?)$/m);
    if(!matchesArray){throw 'Guide doc ' + doc.id + ' is missing a title'};
    return matchesArray ? matchesArray[1].trim() : '';
  }

  return {
    name: 'guideFileReader',
    defaultPattern: /\.md$/,
    getDocs: function(fileInfo) {
      return [{
        docType: 'guide',
        title: extractTitle(fileInfo),
        content: fileInfo.content
      }];
    }
  };
}