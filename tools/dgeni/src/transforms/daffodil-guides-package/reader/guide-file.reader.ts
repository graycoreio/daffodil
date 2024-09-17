import toc from 'markdown-toc';

export const extractTitle = (doc: any) => {
  const matchesArray = doc.content.match(/^\#(.*?)$/m);
  if(!matchesArray){
    throw new Error('Guide doc ' + doc.id + ' is missing a title');
  };
  return matchesArray[1].trim();
};

export function guideFileReaderFactory() {
  return {
    name: 'guideFileReader',
    defaultPattern: /\.md$/,
    getDocs: (fileInfo) => fileInfo.content ? [{
      docType: 'guide',
      title: extractTitle(fileInfo),
      tableOfContents: toc(fileInfo.content),
      content: fileInfo.content,
    }] : [],
  };
}

