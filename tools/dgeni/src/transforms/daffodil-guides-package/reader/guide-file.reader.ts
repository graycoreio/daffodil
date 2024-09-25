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

export function designGuideFileReaderFactory() {
  return {
    name: 'guideFileReader',
    defaultPattern: /\.md$/,
    getDocs: (fileInfo) => fileInfo.content
      ? [{
        // check if the doc is a package readme, ignore the root readme though
        docType: fileInfo.relativePath.split('/').slice(1).includes('README.md') ? 'package-guide' : 'guide',
        title: extractTitle(fileInfo),
        tableOfContents: toc(fileInfo.content),
        content: fileInfo.content,
      }]
      : [],
  };
}
