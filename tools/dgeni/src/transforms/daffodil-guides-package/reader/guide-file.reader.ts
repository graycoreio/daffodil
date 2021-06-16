var toc = require('markdown-toc');

export function guideFileReader() {

  return {
    name: 'guideFileReader',
    defaultPattern: /\.md$/,
    getDocs: function(fileInfo) {
      return [{
        docType: 'guide',
        title: extractTitle(fileInfo),
				tableOfContents: toc(fileInfo.content),
        content: fileInfo.content
      }];
    }
  };
}

export const extractTitle = (doc: any) => {
	const matchesArray = doc.content.match(/^\#(.*?)$/m);
	if(!matchesArray){throw 'Guide doc ' + doc.id + ' is missing a title'};
	return matchesArray[1].trim();
}
