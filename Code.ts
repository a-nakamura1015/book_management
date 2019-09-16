/**
 * 公開したURLが踏まれた際に実行される関数
 */
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setTitle('書籍管理');
}
