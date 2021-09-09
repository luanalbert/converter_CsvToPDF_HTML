const URL = "./src/components/"
const Reader = require(URL + "Reader");
const Writer = require(URL + 'Writer');
const Processor = require(URL + "Processor");
const Table = require(URL + "Table");
const HtmlParser = require(URL + "HtmlParser");
const PDFWriter = require(URL + "PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
  var dados = await leitor.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var users = new Table(dadosProcessados);

  var html = await HtmlParser.Parser(users);
  
  escritor.writer(Date.now() + ".html", html);
  PDFWriter.writePDF(Date.now() + ".pdf", html);
 
}
main()