var pdf = require("html-pdf");

class PdfWriter{

    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err, res) => {
            if (err) return console.log(err);
          });
    }

}
module.exports = PdfWriter;