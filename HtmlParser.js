var ejs = require("ejs");

class HtmlParser{
    
    static async Parse(table){
        return await ejs.renderFile("./tables.ejs", {header: table.header, rows: table.rows})
    }
}

module.exports = HtmlParser;